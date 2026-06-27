import { withErrorHandler } from "@/src/shared/api/with-error-handler";
import { NextResponse } from "next/server";
import {
  getCart as getCartApi,
  addToCart as addToCartApi,
  clearCart as clearCartApi,
  removeFromCart as removeFromCartApi,
} from "@/src/shared/api/api-client";
import { getAuthHeaders } from "@/src/shared/api/server/getAuthHeaders";
import { ApiError } from "@/src/shared/api/api-error";
import { CART_STALE_TIME } from "@/src/shared/config/constants";
import { revalidateTag } from "next/cache";

export const getCart = withErrorHandler(async () => {
  const authHeaders = await getAuthHeaders();

  const response = await getCartApi({
    headers: { ...authHeaders },
    next: { revalidate: CART_STALE_TIME, tags: ["cart"] },
  });

  if (response.error) {
    throw new ApiError(response.error.message, response.response?.status);
  }

  return NextResponse.json(response.data);
});

export const addToCart = withErrorHandler(async (request: Request) => {
  const body = await request.json();

  const authHeaders = await getAuthHeaders();

  const response = await addToCartApi({
    body,
    headers: { ...authHeaders, ContentType: "application/json" },
  });

  if (response.error) {
    throw new ApiError(response.error.message, response.response?.status);
  }

  revalidateTag("cart", { expire: 0 });

  return NextResponse.json(response.data);
});

export const removeFromCart = withErrorHandler(async (request: Request) => {
  const body = await request.json();

  const authHeaders = await getAuthHeaders();

  const response = await removeFromCartApi({
    body,
    headers: { ...authHeaders, ContentType: "application/json" },
  });

  if (response.error) {
    throw new ApiError(response.error.message, response.response?.status);
  }

  revalidateTag("cart", { expire: 0 });
  return NextResponse.json(response.data);
});

export const clearCart = withErrorHandler(async () => {
  const authHeaders = await getAuthHeaders();

  const response = await clearCartApi({
    headers: { ...authHeaders },
  });

  if (response.error) {
    throw new ApiError(response.error.message, response.response?.status);
  }

  revalidateTag("cart", { expire: 0 });
  return NextResponse.json(response.data);
});
