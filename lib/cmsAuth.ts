import { createHmac, timingSafeEqual } from "crypto";
import type { NextRequest } from "next/server";

export const sessionCookieName = "toylandia_cms_session";

function getSecret() {
  return process.env.CMS_SESSION_SECRET || process.env.CMS_ADMIN_PASSWORD || "toylandia-local-session-secret";
}

export function getAdminEmail() {
  return process.env.CMS_ADMIN_EMAIL || "admin@toylandia.com";
}

export function getAdminPassword() {
  return process.env.CMS_ADMIN_PASSWORD || "ToyLandiaCMS!2026";
}

function sign(value: string) {
  return createHmac("sha256", getSecret()).update(value).digest("hex");
}

function safeEqual(a: string, b: string) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && timingSafeEqual(left, right);
}

export function createCmsSession(email: string) {
  const expires = Date.now() + 1000 * 60 * 60 * 24 * 7;
  const payload = `${email}:${expires}`;
  return `${payload}:${sign(payload)}`;
}

export function isValidCmsSession(value?: string) {
  if (!value) {
    return false;
  }

  const parts = value.split(":");
  if (parts.length !== 3) {
    return false;
  }

  const [email, expires, signature] = parts;
  if (email !== getAdminEmail() || Number(expires) < Date.now()) {
    return false;
  }

  return safeEqual(signature, sign(`${email}:${expires}`));
}

export function getCmsSessionCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.CMS_SECURE_COOKIES === "true" || process.env.VERCEL === "1",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  } as const;
}

export function isAuthorizedRequest(request: NextRequest) {
  return isValidCmsSession(request.cookies.get(sessionCookieName)?.value);
}
