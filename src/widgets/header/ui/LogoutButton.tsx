"use client";

import { useLogout } from "@/src/features/logout";

interface LogoutButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export const LogoutButton = ({ className, children }: LogoutButtonProps) => {
  const logout = useLogout();
  return (
    <button className={className} type="button" onClick={logout}>
      {children}
    </button>
  );
};
