import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  RemoveFromCartResponse,
  RemoveFromCartError,
  UpdateCartInput,
} from "@/src/shared/api/api-client";

export const useRemoveFromCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: UpdateCartInput) => {
      const response = await fetch("/api/cart/remove-from-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const error = (await response.json()) as RemoveFromCartError;
        throw error;
      }
      return response.json() as Promise<RemoveFromCartResponse>;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["cart"], data);
      // queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};
