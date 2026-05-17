import { createClient } from "@libsql/client";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const databaseUrl = process.env.TURSO_DATABASE_URL || "libsql://toylandia-goldengraphixstudios.aws-ap-northeast-1.turso.io";
const authToken = process.env.TURSO_AUTH_TOKEN;

if (!authToken) {
  console.error("Missing TURSO_AUTH_TOKEN. Generate one in Turso, then rerun this script.");
  process.exit(1);
}

const client = createClient({ url: databaseUrl, authToken });
const posts = JSON.parse(await readFile(join(process.cwd(), "content", "blog-posts.json"), "utf8"));

await client.execute(`
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
    sections TEXT NOT NULL,
    faqs TEXT NOT NULL,
    cta TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'published',
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    saved_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  )
`);

let inserted = 0;

for (const post of posts) {
  await client.execute({
    sql: `
      INSERT INTO cms_posts (
        slug, title, description, published_at, updated_at, category, read_time,
        keywords, summary, deck, hero_image, takeaways, sections, faqs, cta, status, saved_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'published', CURRENT_TIMESTAMP)
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
        sections = excluded.sections,
        faqs = excluded.faqs,
        cta = excluded.cta,
        status = excluded.status,
        saved_at = CURRENT_TIMESTAMP
    `,
    args: [
      post.slug,
      post.title,
      post.description,
      post.publishedAt,
      post.updatedAt,
      post.category,
      post.readTime,
      JSON.stringify(post.keywords),
      post.summary,
      post.deck,
      JSON.stringify(post.heroImage),
      JSON.stringify(post.takeaways),
      JSON.stringify(post.sections),
      JSON.stringify(post.faqs),
      JSON.stringify(post.cta),
    ],
  });
  inserted += 1;
}

console.log(`Turso CMS ready. Upserted ${inserted} articles into cms_posts.`);
