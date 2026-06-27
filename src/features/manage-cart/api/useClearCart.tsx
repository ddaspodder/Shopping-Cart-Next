import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ClearCartResponse, ClearCartError } from "@/src/shared/api/api-client";

export const useClearCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const response = await fetch("/api/cart/clear-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        const error = (await response.json()) as ClearCartError;
        throw error;
      }
      return response.json() as Promise<ClearCartResponse>;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["cart"], data);
      // queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};
