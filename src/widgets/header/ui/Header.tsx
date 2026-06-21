import Image from "next/image";
import Link from "next/link";

import styles from "./header.module.css";

export const Header = () => {
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
              <Link className={styles.link} href="/products-search">
                Products
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="/orders">
                Orders
              </Link>
            </li>
          </ul>
        </nav>

        <nav className={styles.actionsNav} aria-label="Account actions">
          <ul className={styles.list}>
            <li>
              <span className={styles.username}>username</span>
            </li>
            <li>
              <Link className={`${styles.link} ${styles.signOut}`} href="/login">
                Sign out
              </Link>
            </li>
            <li>
              <Link className={`${styles.link} ${styles.cart}`} href="/cart">
                Cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
