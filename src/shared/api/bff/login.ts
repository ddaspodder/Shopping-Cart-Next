import { signInUser } from "@/src/shared/api/api-client";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { LOGIN_TOKEN_KEY, LOGIN_TOKEN_EXPIRY } from "@/src/shared/config";
import { withErrorHandler } from "@/src/shared/api/with-error-handler";
import { ApiError } from "@/src/shared/api/api-error";

export const signIn = withErrorHandler(async (request: Request) => {
  const body = await request.json();

  const response = await signInUser({ body });

  if (response.error) {
    throw new ApiError(response.error.message, response.response?.status);
  }

  const { token, ...rest } = response.data.data;

  if (token) {
    const cookieStore = await cookies();
    cookieStore.set(LOGIN_TOKEN_KEY, token, {
      path: "/",
      httpOnly: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: LOGIN_TOKEN_EXPIRY,
    });
  }

  const dataWithoutToken = { ...response.data, data: { ...rest } };

  return NextResponse.json(dataWithoutToken, { status: 200 });
});
