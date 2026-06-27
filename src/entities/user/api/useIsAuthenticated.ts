"use client";
import { useQuery } from "@tanstack/react-query";
import type {
  GetCurrentUserResponse,
  GetCurrentUserError,
} from "@/src/shared/api/api-client";

export const useIsAuthenticated = () =>
  useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const response = await fetch("/api/user/session");
      if (!response.ok) {
        return false;
      }
      const data = (await response.json()) as
        | GetCurrentUserResponse
        | GetCurrentUserError;

      if (data.status === "failure") {
        return false;
      }
      return true;
    },
  });
