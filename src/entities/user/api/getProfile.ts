"use server";

import { LOGIN_TOKEN_KEY } from "@/src/shared/config";
import { getCurrentUser } from "@/src/shared/api/api-client";
import { cookies } from "next/headers";

export const getProfile = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get(LOGIN_TOKEN_KEY);
  if (!token) {
    throw { message: "No user found", status: "failure" };
  }

  const response = await getCurrentUser({
    headers: { Authorization: `Bearer ${token.value}` },
    cache: "no-store",
  });

  if (response.error) {
    throw response.error;
  }

  return response.data;
};
