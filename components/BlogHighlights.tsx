import Image from "next/image";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blogPosts";
import { assetPath } from "@/lib/assetPath";

export default function BlogHighlights() {
  const posts = getAllBlogPosts().slice(0, 3);

  return (
    <section id="blog" className="section overflow-hidden bg-white">
      <div className="absolute inset-0 bg-dots opacity-25" />
      <div className="wrap relative z-10">
        <header className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">Toy buying guides</p>
            <h2 className="display-lg text-tl-ink">
              Helpful articles for smarter <span className="text-tl-red">toy shopping.</span>
            </h2>
            <p className="body-md mt-4">
              SEO-ready guides built to answer parent, event buyer, and reseller questions before they order.
            </p>
          </div>
          <Link href="/blog" className="btn-yellow">
            Read all articles
          </Link>
        </header>

        <div className="grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-[2rem] border-2 border-tl-ink bg-tl-warm shadow-toy-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-toy"
            >
              <div className="relative h-56 overflow-hidden border-b-2 border-tl-ink bg-tl-yellowSoft">
                <Image
                  src={assetPath(post.heroImage.src)}
                  alt={post.heroImage.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute left-4 top-4 rounded-full border-2 border-tl-ink bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-tl-red shadow-toy-sm">
                  {post.category}
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-tl-muted">{post.readTime}</p>
                <h3 className="mt-2 font-fun text-2xl leading-none text-tl-ink group-hover:text-tl-red">
                  {post.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm font-semibold leading-relaxed text-tl-charcoal">
                  {post.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
