"use server";

import { getAuthHeaders } from "@/src/shared/api/server/getAuthHeaders";

import { createOrder as createOrderApi } from "@/src/shared/api/api-client";
import { revalidateTag } from "next/cache";

export const createOrder = async () => {
  const authHeaders = await getAuthHeaders();
  const response = await createOrderApi({
    headers: { ...authHeaders },
  });

  if (response.error) {
    throw response.error;
  }

  revalidateTag("orders", { expire: 0 });
  revalidateTag("cart", { expire: 0 });

  return response.data;
};
