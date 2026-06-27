import { useMutation, useQueryClient } from "@tanstack/react-query";
import type {
  SignInInput,
  SignInResponse,
  SignInUserError,
} from "@/src/shared/api/api-client";

export interface LoginOptions {
  onSuccess?: () => void;
}

export const useLogin = ({ onSuccess }: LoginOptions) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: SignInInput) => {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const error = (await response.json()) as Promise<SignInUserError>;
        throw error;
      }
      return response.json() as Promise<SignInResponse>;
    },
    onSuccess: () => {
      onSuccess?.();
      queryClient.invalidateQueries({
        queryKey: ["profile"],
      });
    },
  });
};
