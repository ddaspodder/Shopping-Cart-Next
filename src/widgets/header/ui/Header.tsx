import Image from "next/image";
import Link from "next/link";

import styles from "./header.module.css";
import { getProfile } from "@/src/entities/user";
import { LogoutButton } from "./LogoutButton";
import { ROUTES } from "@/src/shared/config/";

export const Header = async () => {
  let profile: Awaited<ReturnType<typeof getProfile>> | null = null;

  try {
    profile = await getProfile();
  } catch {
    profile = null;
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="Shopping Cart home">
          <Image src="/logo.svg" alt="" width={40} height={40} priority />
          <span className={styles.brandText}>
            <span className={styles.brandName}>Shopping Cart</span>
            <span className={styles.brandTag}>Marketplace dashboard</span>
          </span>
        </Link>

        <nav className={styles.centerNav} aria-label="Primary">
          <ul className={styles.list}>
            <li>
              <Link className={styles.link} href={ROUTES.PRODUCTS_SEARCH}>
                Products
              </Link>
            </li>
            {profile ? (
              <li>
                <Link className={styles.link} href={ROUTES.ORDERS}>
                  Orders
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
        </nav>

        <nav className={styles.actionsNav} aria-label="Account actions">
          <ul className={styles.list}>
            {profile ? (
              <>
                <li>
                  <span className={styles.username}>{profile.data.email}</span>
                </li>
                <li>
                  <LogoutButton className={`${styles.link} ${styles.signOut}`}>
                    Logout
                  </LogoutButton>
                </li>
                <li>
                  <Link
                    className={`${styles.link} ${styles.cart}`}
                    href={ROUTES.CART}
                  >
                    Cart
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link
                  className={`${styles.link} ${styles.signOut}`}
                  href={ROUTES.LOGIN}
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};
