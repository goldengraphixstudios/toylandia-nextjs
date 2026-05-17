import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllBlogPosts } from "@/lib/blogPosts";
import { assetPath } from "@/lib/assetPath";

export const metadata: Metadata = {
  title: "ToyLandia Blog | Toy Buying Guides, Party Tips, and Reseller Advice",
  description:
    "Read ToyLandia guides about toys per kilo, party giveaways, reseller toy inventory, and browsing ToyLandia on Shopee.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const featured = posts[0];

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "ToyLandia Blog",
    description: "Toy buying guides for families, event buyers, and toy resellers in the Philippines.",
    url: "https://goldengraphixstudios.github.io/toylandia-nextjs/blog/",
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      url: `https://goldengraphixstudios.github.io/toylandia-nextjs/blog/${post.slug}/`,
    })),
  };

  return (
    <main className="min-h-screen bg-tl-warm text-tl-ink">
      <Navbar />
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="absolute -left-28 top-24 h-72 w-72 rounded-full bg-tl-yellow/60 blur-3xl" />
        <div className="absolute -right-28 bottom-8 h-80 w-80 rounded-full bg-tl-red/20 blur-3xl" />
        <div className="wrap relative z-10">
          <div className="max-w-4xl">
            <p className="eyebrow-yellow mb-5 border-2 border-tl-ink shadow-toy-sm">ToyLandia articles</p>
            <h1 className="display-xl text-tl-ink">
              Toy buying guides for parents, parties, and <span className="text-tl-red">resellers.</span>
            </h1>
            <p className="body-lg mt-5 max-w-2xl">
              Practical, answer-first articles designed for search, AI answers, and real customers who need help choosing toys.
            </p>
          </div>
        </div>
      </section>

      {featured ? (
        <section className="wrap pb-10">
          <Link
            href={`/blog/${featured.slug}`}
            className="grid overflow-hidden rounded-[2.2rem] border-2 border-tl-ink bg-white shadow-toy transition-all duration-300 hover:-translate-y-1 lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="relative min-h-[340px] overflow-hidden border-b-2 border-tl-ink lg:border-b-0 lg:border-r-2">
              <Image
                src={assetPath(featured.heroImage.src)}
                alt={featured.heroImage.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
            </div>
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-tl-red">Featured guide</p>
              <h2 className="mt-3 font-fun text-4xl leading-none text-tl-ink sm:text-5xl">{featured.title}</h2>
              <p className="mt-5 text-base font-semibold leading-relaxed text-tl-charcoal">{featured.summary}</p>
              <div className="mt-7 inline-flex rounded-full border-2 border-tl-ink bg-tl-yellow px-5 py-3 text-sm font-black text-tl-ink shadow-toy-sm">
                Read featured article
              </div>
            </div>
          </Link>
        </section>
      ) : null}

      <section className="wrap pb-24">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {posts.slice(1).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-[2rem] border-2 border-tl-ink bg-white shadow-toy-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-toy"
            >
              <div className="relative h-60 overflow-hidden border-b-2 border-tl-ink">
                <Image
                  src={assetPath(post.heroImage.src)}
                  alt={post.heroImage.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-tl-red px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-white">
                    {post.category}
                  </span>
                  <span className="rounded-full bg-tl-yellow px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-tl-ink">
                    {post.readTime}
                  </span>
                </div>
                <h2 className="mt-4 font-fun text-3xl leading-none text-tl-ink group-hover:text-tl-red">{post.title}</h2>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-tl-charcoal">{post.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
    </main>
  );
}
