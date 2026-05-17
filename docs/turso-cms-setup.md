# ToyLandia Turso CMS Setup

The website now expects a server runtime for CMS database writes. Use Vercel or another Node-capable host, not GitHub Pages, for the Turso-backed CMS.

## Required Environment Variables

```bash
TURSO_DATABASE_URL=libsql://toylandia-goldengraphixstudios.aws-ap-northeast-1.turso.io
TURSO_AUTH_TOKEN=your-token-from-turso
CMS_ADMIN_EMAIL=admin@toylandia.com
CMS_ADMIN_PASSWORD=change-this-password
CMS_SESSION_SECRET=long-random-secret
```

## Turso Side

1. Open the Turso dashboard or CLI for the `toylandia` database.
2. Create an auth token for the database.
3. Add the token to the deployment environment as `TURSO_AUTH_TOKEN`.
4. The app creates the `cms_posts` table automatically on first CMS/API use.
5. Log in to `/cms`, then use `Settings > Reset seeds` to import the current built-in articles into Turso.

## Optional Manual Table Schema

```sql
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
);
```
