import "server-only";

import { cookies } from "next/headers";
import { ApiError } from "../api-error";
import { LOGIN_TOKEN_KEY } from "@/src/shared/config";

export async function getAuthHeaders() {
  const token = (await cookies()).get(LOGIN_TOKEN_KEY)?.value;

  if (!token) {
    throw new ApiError("Unauthorized", 401);
  }

  return {
    Authorization: `Bearer ${token}`,
  };
}
