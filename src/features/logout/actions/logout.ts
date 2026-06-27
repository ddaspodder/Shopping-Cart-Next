"use server";

import { cookies } from "next/headers";
import { LOGIN_TOKEN_KEY } from "@/src/shared/config";

export const logout = async () => {
  const cookieStore = await cookies();
  cookieStore.delete(LOGIN_TOKEN_KEY);
};
