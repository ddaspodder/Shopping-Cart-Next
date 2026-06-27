"use client";

import { useIsAuthenticated } from "@/src/entities/user/api/useIsAuthenticated";
export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useIsAuthenticated();
  return <>{children}</>;
};
