import { NextResponse, type NextRequest } from "next/server";
import {
  createCmsSession,
  getAdminEmail,
  getAdminPassword,
  getCmsSessionCookieOptions,
  isAuthorizedRequest,
  sessionCookieName,
} from "@/lib/cmsAuth";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  return NextResponse.json({
    authenticated: isAuthorizedRequest(request),
    email: getAdminEmail(),
  });
}

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as { email?: string; password?: string } | null;
  const email = body?.email?.trim().toLowerCase();
  const password = body?.password ?? "";

  if (email !== getAdminEmail() || password !== getAdminPassword()) {
    return NextResponse.json({ error: "Invalid CMS login." }, { status: 401 });
  }

  const response = NextResponse.json({ authenticated: true, email });
  response.cookies.set(sessionCookieName, createCmsSession(email), getCmsSessionCookieOptions());
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ authenticated: false });
  response.cookies.set(sessionCookieName, "", {
    ...getCmsSessionCookieOptions(),
    maxAge: 0,
  });
  return response;
}
