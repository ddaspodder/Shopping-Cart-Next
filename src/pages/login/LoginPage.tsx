"use client";
import { LoginForm } from "@/src/features/login";
import styles from "./login-page.module.css";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/src/shared/config";

function LoginPage() {
  const router = useRouter();
  return (
    <section className={styles.page}>
      <LoginForm
        onSuccess={() => {
          router.push(ROUTES.HOME);
          router.refresh();
        }}
      />
    </section>
  );
}

export { LoginPage };

export default LoginPage;
