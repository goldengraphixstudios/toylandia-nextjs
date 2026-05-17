import { NextResponse, type NextRequest } from "next/server";
import { isAuthorizedRequest } from "@/lib/cmsAuth";
import { isTursoConfigured, seedCmsPosts } from "@/lib/cmsDb";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  if (!isAuthorizedRequest(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  if (!isTursoConfigured()) {
    return NextResponse.json({ error: "Turso is not configured. Add TURSO_AUTH_TOKEN first." }, { status: 503 });
  }

  return NextResponse.json(await seedCmsPosts());
}
