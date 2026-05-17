import { NextResponse, type NextRequest } from "next/server";
import { isAuthorizedRequest } from "@/lib/cmsAuth";
import { deleteCmsPost, isTursoConfigured } from "@/lib/cmsDb";

export const dynamic = "force-dynamic";

type RouteContext = {
  params: {
    slug: string;
  };
};

export async function DELETE(request: NextRequest, { params }: RouteContext) {
  if (!isAuthorizedRequest(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  if (!isTursoConfigured()) {
    return NextResponse.json({ error: "Turso is not configured. Add TURSO_AUTH_TOKEN first." }, { status: 503 });
  }

  await deleteCmsPost(params.slug);
  return NextResponse.json({ deleted: true });
}
