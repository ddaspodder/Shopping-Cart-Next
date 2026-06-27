import { withErrorHandler } from "@/src/shared/api/with-error-handler";
import { NextResponse } from "next/server";
import { getCurrentUser } from "@/src/shared/api/api-client";

import { getAuthHeaders } from "../server/getAuthHeaders";
import { cookies } from "next/headers";
import { LOGIN_TOKEN_KEY } from "@/src/shared/config";

export const getSession = withErrorHandler(async () => {
  const authHeaders = await getAuthHeaders();
  const response = await getCurrentUser({
    headers: { ...authHeaders },
    cache: "no-store",
  });

  const cookieStore = await cookies();
  if (response.response?.status === 401) {
    cookieStore.delete(LOGIN_TOKEN_KEY);
  }

  if (response.error) {
    return NextResponse.json(response.error);
  }

  return NextResponse.json(response.data);
});
