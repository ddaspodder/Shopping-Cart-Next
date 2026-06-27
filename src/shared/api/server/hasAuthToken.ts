import { LOGIN_TOKEN_KEY } from "@/src/shared/config";
import type { NextRequest } from "next/server";

export function hasAuthToken(request: NextRequest) {
  return request.cookies.get(LOGIN_TOKEN_KEY)?.value !== undefined;
}
