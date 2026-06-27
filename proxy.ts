import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { hasAuthToken } from "@/src/shared/api/server/hasAuthToken";
import { PROTECTED_ROUTES, ROUTES } from "@/src/shared/config";

export async function proxy(request: NextRequest) {
  const isProtected = PROTECTED_ROUTES.some((route) =>
    request.nextUrl.pathname.startsWith(route),
  );

  if (isProtected && !hasAuthToken(request)) {
    return NextResponse.redirect(new URL(ROUTES.LOGIN, request.url));
  }
  return NextResponse.next();
}
