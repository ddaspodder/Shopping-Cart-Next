import { getAuthHeaders } from "@/src/shared/api/server/getAuthHeaders";

import { getOrders as getOrdersApi } from "@/src/shared/api/api-client";
import { ORDER_STALE_TIME } from "@/src/shared/config/constants";

export const getOrders = async () => {
  const authHeaders = await getAuthHeaders();
  const response = await getOrdersApi({
    headers: { ...authHeaders },
    next: { revalidate: ORDER_STALE_TIME, tags: ["orders"] },
  });

  if (response.error) {
    throw response.error;
  }

  return response.data;
};
