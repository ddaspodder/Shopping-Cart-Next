import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  AddToCartResponse,
  AddToCartError,
  UpdateCartInput,
} from "@/src/shared/api/api-client";

export const useAddToCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: UpdateCartInput) => {
      const response = await fetch("/api/cart/add-to-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const error = (await response.json()) as AddToCartError;
        throw error;
      }
      return response.json() as Promise<AddToCartResponse>;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["cart"], data);
      //queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};
