import { useRouter } from "next/navigation";
import { logout } from "../actions/logout";
import { ROUTES } from "@/src/shared/config";

export const useLogout = () => {
  const router = useRouter();

  return async () => {
    await logout();
    router.push(ROUTES.LOGIN);
    router.refresh();
  };
};
