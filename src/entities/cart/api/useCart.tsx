import { useQuery } from "@tanstack/react-query";
import { CART_STALE_TIME } from "@/src/shared/config/constants";
import type {
  GetCartResponse,
  GetCartError,
} from "@/src/shared/api/api-client";

export const useCart = () => {
  return useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const response = await fetch("/api/cart/get-cart", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        const error = (await response.json()) as GetCartError;
        throw error;
      }
      return response.json() as Promise<GetCartResponse>;
    },
    staleTime: CART_STALE_TIME,
  });
};
