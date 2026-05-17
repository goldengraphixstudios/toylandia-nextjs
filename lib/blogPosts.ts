import posts from "@/content/blog-posts.json";

export type BlogImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type BlogSection = {
  heading: string;
  body: string[];
  image?: BlogImage;
  images?: BlogImage[];
  bullets?: string[];
  quote?: string;
};

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  category: string;
  readTime: string;
  keywords: string[];
  summary: string;
  deck: string;
  heroImage: BlogImage;
  takeaways: string[];
  contentHtml?: string;
  sections: BlogSection[];
  faqs: BlogFaq[];
  cta: {
    label: string;
    href: string;
    note?: string;
  };
};

const typedPosts = posts as BlogPost[];

export function getSeedBlogPosts() {
  return [...typedPosts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getSeedBlogPost(slug: string) {
  return typedPosts.find((post) => post.slug === slug);
}

export async function getAllBlogPosts() {
  const { getPublishedCmsPosts } = await import("@/lib/cmsDb");
  const cmsPosts = await getPublishedCmsPosts();
  return cmsPosts.length ? cmsPosts : getSeedBlogPosts();
}

export async function getBlogPost(slug: string) {
  const { getPublishedCmsPost } = await import("@/lib/cmsDb");
  return (await getPublishedCmsPost(slug)) ?? getSeedBlogPost(slug);
}
