import { NextResponse, type NextRequest } from "next/server";
import seedPosts from "@/content/blog-posts.json";
import { isAuthorizedRequest } from "@/lib/cmsAuth";
import { getCmsPosts, isTursoConfigured, normalizePost, upsertCmsPost } from "@/lib/cmsDb";
import type { BlogPost } from "@/lib/blogPosts";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  if (!isAuthorizedRequest(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  if (!isTursoConfigured()) {
    return NextResponse.json({
      posts: seedPosts as BlogPost[],
      source: "seed",
      warning: "Turso is not configured. Add TURSO_AUTH_TOKEN to enable database writes.",
    });
  }

  const posts = await getCmsPosts();
  return NextResponse.json({ posts: posts.length ? posts : (seedPosts as BlogPost[]), source: posts.length ? "turso" : "seed" });
}

export async function POST(request: NextRequest) {
  if (!isAuthorizedRequest(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  if (!isTursoConfigured()) {
    return NextResponse.json({ error: "Turso is not configured. Add TURSO_AUTH_TOKEN first." }, { status: 503 });
  }

  const body = (await request.json().catch(() => null)) as { post?: Partial<BlogPost>; status?: string } | null;
  if (!body?.post) {
    return NextResponse.json({ error: "Missing post payload." }, { status: 400 });
  }

  const post = await upsertCmsPost(normalizePost(body.post), body.status || "published");
  return NextResponse.json({ post, source: "turso" });
}
