import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getBlogPost } from "@/lib/blogPosts";
import { assetPath } from "@/lib/assetPath";

type PageProps = {
  params: {
    slug: string;
  };
};

function stripHtml(value: string) {
  return value.replace(/<[^>]*>/g, "");
}

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | ToyLandia Blog`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: [assetPath(post.heroImage.src)],
    },
  };
}

function renderArticleImage(image: { src: string; alt: string; caption?: string }) {
  const src = assetPath(image.src);
  const isInlineData = image.src.startsWith("data:");

  return (
    <figure>
      {isInlineData ? (
        // Pasted CMS images can be stored as data URLs, which should render as plain images.
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={image.alt} className="aspect-video w-full object-cover" />
      ) : (
        <Image
          src={src}
          alt={image.alt}
          width={1200}
          height={675}
          className="aspect-video w-full object-cover"
        />
      )}
      {image.caption ? <figcaption>{image.caption}</figcaption> : null}
    </figure>
  );
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: assetPath(post.heroImage.src),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: "ToyLandia",
    },
    publisher: {
      "@type": "Organization",
      name: "ToyLandia",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `/blog/${post.slug}/`,
    },
    articleSection: post.category,
    keywords: post.keywords.join(", "),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-tl-ink text-white">
      <Navbar />
      <article>
        <header className="relative overflow-hidden pt-32 pb-14">
          <div className="absolute inset-0">
            <Image
              src={assetPath(post.heroImage.src)}
              alt=""
              fill
              className="object-cover opacity-35"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-tl-ink/75 via-tl-ink/88 to-tl-ink" />
          </div>

          <div className="wrap relative z-10">
            <Link href="/blog" className="mb-8 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-tl-yellow backdrop-blur">
              Back to blog
            </Link>
            <div className="max-w-5xl">
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-tl-red px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-white">{post.category}</span>
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-white/80">{post.readTime}</span>
                <time className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-white/80" dateTime={post.updatedAt}>
                  Updated {post.updatedAt}
                </time>
              </div>
              <h1 className="font-fun text-[clamp(3rem,8vw,6.6rem)] leading-[0.88] tracking-tight text-white">
                {post.title}
              </h1>
              <p className="mt-6 max-w-3xl text-xl font-semibold leading-relaxed text-white/82">{post.deck}</p>
            </div>
          </div>
        </header>

        <div className="wrap grid gap-10 pb-24 lg:grid-cols-[minmax(0,760px)_300px] lg:items-start lg:justify-center">
          <div className="min-w-0">
            <section className="border-y border-white/15 py-7">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-tl-yellow">Answer first</p>
              <p className="mt-4 text-2xl font-semibold leading-relaxed tracking-[-0.02em] text-white sm:text-3xl">
                {post.summary}
              </p>
            </section>

            {post.takeaways.length ? (
              <section className="mt-9 rounded-[1.6rem] border-2 border-tl-yellow/40 bg-tl-yellow/10 p-6">
                <h2 className="font-fun text-3xl text-tl-yellow">Key takeaways</h2>
                <ul className="mt-4 grid gap-3">
                  {post.takeaways.map((item) => (
                    <li key={item} className="flex gap-3 text-base font-semibold leading-relaxed text-white/82">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-tl-yellow" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <div className="toylandia-article-prose mt-10 space-y-12">
              {post.sections.map((section, index) => (
                <section key={`${section.heading}-${index}`} id={`section-${index + 1}`} className="scroll-mt-28">
                  <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-tl-red">{String(index + 1).padStart(2, "0")}</p>
                  <h2>{section.heading}</h2>
                  {section.image?.src ? renderArticleImage(section.image) : null}
                  {section.images?.map((image, imageIndex) => (
                    <div key={`${image.src}-${imageIndex}`}>{renderArticleImage(image)}</div>
                  ))}
                  <div className="mt-5 space-y-5">
                    {section.body.map((paragraph) => (
                      <p key={paragraph} dangerouslySetInnerHTML={{ __html: paragraph }} />
                    ))}
                  </div>
                  {section.bullets?.length ? (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>
                          <span dangerouslySetInnerHTML={{ __html: bullet }} />
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {section.quote ? <blockquote dangerouslySetInnerHTML={{ __html: section.quote }} /> : null}
                </section>
              ))}
            </div>

            {post.faqs.length ? (
              <section className="mt-14">
                <h2 className="font-fun text-4xl text-white">Frequently asked questions</h2>
                <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
                  {post.faqs.map((faq) => (
                    <div key={faq.question} className="py-6">
                      <h3 className="text-xl font-black text-tl-yellow">{faq.question}</h3>
                      <p className="mt-2 text-base font-medium leading-relaxed text-white/72">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            <section className="mt-14 rounded-[1.6rem] border-2 border-tl-yellow/40 bg-tl-red p-6 text-white sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-tl-yellow">Next step</p>
              <h2 className="mt-3 font-fun text-4xl leading-none">Ready to shop ToyLandia?</h2>
              <p className="mt-4 max-w-2xl text-base font-semibold leading-relaxed text-white/84">{post.cta.note}</p>
              <a
                href={post.cta.href}
                target={post.cta.href.startsWith("http") ? "_blank" : undefined}
                rel={post.cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="btn-yellow mt-6"
              >
                {post.cta.label}
              </a>
            </section>
          </div>

          <aside className="top-28 hidden rounded-[1.4rem] border border-white/10 bg-white/[0.06] p-5 lg:sticky lg:block">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-white/46">In this article</p>
            <nav className="mt-4 space-y-3">
              {post.sections.map((section, index) => (
                <a key={`${section.heading}-${index}`} href={`#section-${index + 1}`} className="block text-sm font-bold leading-snug text-white/64 transition-colors hover:text-tl-yellow">
                  {stripHtml(section.heading)}
                </a>
              ))}
            </nav>
          </aside>
        </div>
      </article>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </main>
  );
}
