import { createClient, type Client } from "@libsql/client";
import seedPosts from "@/content/blog-posts.json";
import type { BlogImage, BlogPost } from "@/lib/blogPosts";

let client: Client | null = null;
let schemaReady = false;

const fallbackDatabaseUrl = "libsql://toylandia-goldengraphixstudios.aws-ap-northeast-1.turso.io";

export function isTursoConfigured() {
  return Boolean((process.env.TURSO_DATABASE_URL || fallbackDatabaseUrl) && process.env.TURSO_AUTH_TOKEN);
}

function getCmsClient() {
  if (!process.env.TURSO_AUTH_TOKEN) {
    throw new Error("Missing TURSO_AUTH_TOKEN");
  }

  if (!client) {
    client = createClient({
      url: process.env.TURSO_DATABASE_URL || fallbackDatabaseUrl,
      authToken: process.env.TURSO_AUTH_TOKEN,
    });
  }

  return client;
}

function parseJson<T>(value: unknown, fallback: T): T {
  if (typeof value !== "string" || !value) {
    return fallback;
  }

  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

function normalizeImage(value: Partial<BlogImage> | undefined, fallback: BlogImage): BlogImage {
  return {
    src: value?.src || fallback.src,
    alt: value?.alt || fallback.alt,
    caption: value?.caption ?? fallback.caption,
  };
}

export function normalizePost(post: Partial<BlogPost>): BlogPost {
  const fallback = (seedPosts as BlogPost[])[0];
  const now = new Date().toISOString().slice(0, 10);

  return {
    slug: post.slug || "toylandia-article",
    title: post.title || "ToyLandia Article",
    description: post.description || fallback.description,
    publishedAt: post.publishedAt || now,
    updatedAt: post.updatedAt || now,
    category: post.category || "Buying Guide",
    readTime: post.readTime || "5 min read",
    keywords: Array.isArray(post.keywords) ? post.keywords : [],
    summary: post.summary || fallback.summary,
    deck: post.deck || fallback.deck,
    heroImage: normalizeImage(post.heroImage, fallback.heroImage),
    takeaways: Array.isArray(post.takeaways) ? post.takeaways : [],
    contentHtml: post.contentHtml || "",
    sections: Array.isArray(post.sections) ? post.sections : [],
    faqs: Array.isArray(post.faqs) ? post.faqs : [],
    cta: {
      label: post.cta?.label || fallback.cta.label,
      href: post.cta?.href || fallback.cta.href,
      note: post.cta?.note ?? fallback.cta.note,
    },
  };
}

async function ensureCmsSchema() {
  if (schemaReady) {
    return;
  }

  await getCmsClient().execute(`
    CREATE TABLE IF NOT EXISTS cms_posts (
      slug TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      published_at TEXT NOT NULL,
      updated_at TEXT NOT NULL,
      category TEXT NOT NULL,
      read_time TEXT NOT NULL,
      keywords TEXT NOT NULL,
      summary TEXT NOT NULL,
      deck TEXT NOT NULL,
      hero_image TEXT NOT NULL,
      takeaways TEXT NOT NULL,
      content_html TEXT NOT NULL DEFAULT '',
      sections TEXT NOT NULL,
      faqs TEXT NOT NULL,
      cta TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'published',
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      saved_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);

  schemaReady = true;
}

async function ensureCmsColumns() {
  await ensureCmsSchema();
  await getCmsClient().execute("ALTER TABLE cms_posts ADD COLUMN content_html TEXT NOT NULL DEFAULT ''").catch(() => null);
}

function rowToPost(row: Record<string, unknown>): BlogPost {
  return normalizePost({
    slug: String(row.slug ?? ""),
    title: String(row.title ?? ""),
    description: String(row.description ?? ""),
    publishedAt: String(row.published_at ?? ""),
    updatedAt: String(row.updated_at ?? ""),
    category: String(row.category ?? ""),
    readTime: String(row.read_time ?? ""),
    keywords: parseJson<string[]>(row.keywords, []),
    summary: String(row.summary ?? ""),
    deck: String(row.deck ?? ""),
    heroImage: parseJson<BlogImage>(row.hero_image, { src: "/toy-1.jpg", alt: "ToyLandia toys" }),
    takeaways: parseJson<string[]>(row.takeaways, []),
    contentHtml: String(row.content_html ?? ""),
    sections: parseJson<BlogPost["sections"]>(row.sections, []),
    faqs: parseJson<BlogPost["faqs"]>(row.faqs, []),
    cta: parseJson<BlogPost["cta"]>(row.cta, {
      label: "Browse ToyLandia on Shopee",
      href: "https://shopee.ph/toylandia678",
    }),
  });
}

export async function getCmsPosts() {
  if (!isTursoConfigured()) {
    return [];
  }

  await ensureCmsColumns();
  const result = await getCmsClient().execute({
    sql: "SELECT * FROM cms_posts ORDER BY published_at DESC, saved_at DESC",
    args: [],
  });

  return result.rows.map((row) => rowToPost(row as Record<string, unknown>));
}

export async function getPublishedCmsPosts() {
  if (!isTursoConfigured()) {
    return [];
  }

  await ensureCmsColumns();
  const result = await getCmsClient().execute({
    sql: "SELECT * FROM cms_posts WHERE status = 'published' ORDER BY published_at DESC, saved_at DESC",
    args: [],
  });

  return result.rows.map((row) => rowToPost(row as Record<string, unknown>));
}

export async function getPublishedCmsPost(slug: string) {
  if (!isTursoConfigured()) {
    return null;
  }

  await ensureCmsColumns();
  const result = await getCmsClient().execute({
    sql: "SELECT * FROM cms_posts WHERE slug = ? AND status = 'published' LIMIT 1",
    args: [slug],
  });

  const row = result.rows[0];
  return row ? rowToPost(row as Record<string, unknown>) : null;
}

export async function upsertCmsPost(post: BlogPost, status = "published") {
  await ensureCmsColumns();
  const normalized = normalizePost(post);

  await getCmsClient().execute({
    sql: `
      INSERT INTO cms_posts (
        slug, title, description, published_at, updated_at, category, read_time,
        keywords, summary, deck, hero_image, takeaways, content_html, sections, faqs, cta, status, saved_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
      ON CONFLICT(slug) DO UPDATE SET
        title = excluded.title,
        description = excluded.description,
        published_at = excluded.published_at,
        updated_at = excluded.updated_at,
        category = excluded.category,
        read_time = excluded.read_time,
        keywords = excluded.keywords,
        summary = excluded.summary,
        deck = excluded.deck,
        hero_image = excluded.hero_image,
        takeaways = excluded.takeaways,
        content_html = excluded.content_html,
        sections = excluded.sections,
        faqs = excluded.faqs,
        cta = excluded.cta,
        status = excluded.status,
        saved_at = CURRENT_TIMESTAMP
    `,
    args: [
      normalized.slug,
      normalized.title,
      normalized.description,
      normalized.publishedAt,
      normalized.updatedAt,
      normalized.category,
      normalized.readTime,
      JSON.stringify(normalized.keywords),
      normalized.summary,
      normalized.deck,
      JSON.stringify(normalized.heroImage),
      JSON.stringify(normalized.takeaways),
      normalized.contentHtml || "",
      JSON.stringify(normalized.sections),
      JSON.stringify(normalized.faqs),
      JSON.stringify(normalized.cta),
      status,
    ],
  });

  return normalized;
}

export async function deleteCmsPost(slug: string) {
  await ensureCmsColumns();
  await getCmsClient().execute({
    sql: "DELETE FROM cms_posts WHERE slug = ?",
    args: [slug],
  });
}

export async function seedCmsPosts() {
  await ensureCmsColumns();
  const existing = await getCmsClient().execute("SELECT COUNT(*) AS count FROM cms_posts");
  const count = Number(existing.rows[0]?.count ?? 0);

  if (count > 0) {
    return { inserted: 0, skipped: count };
  }

  const seeds = seedPosts as BlogPost[];
  for (const post of seeds) {
    await upsertCmsPost(post, "published");
  }

  return { inserted: seeds.length, skipped: 0 };
}
