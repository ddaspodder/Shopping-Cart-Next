import Link from "next/link";
import { ROUTES } from "@/src/shared/config/";
import styles from "./footer.module.css";

const shopLinks = [
  { href: ROUTES.PRODUCTS_SEARCH, label: "Products" },
  { href: ROUTES.ORDERS, label: "Orders" },
  { href: ROUTES.CART, label: "Cart" },
];

const supportLinks = [
  { href: "#help", label: "Help center" },
  { href: "#shipping", label: "Shipping" },
  { href: "#returns", label: "Returns" },
];

const companyLinks = [
  { href: "#about", label: "About" },
  { href: "#careers", label: "Careers" },
  { href: ROUTES.LOGIN, label: "Sign in" },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brandBlock}>
            <h2 className={styles.title}>Shopping Cart</h2>
            <p className={styles.text}>
              A simple storefront shell for browsing products, checking orders,
              and keeping the cart front and center.
            </p>
          </div>

          <nav className={styles.column} aria-label="Shop links">
            <h3 className={styles.columnTitle}>Shop</h3>
            <ul className={styles.list}>
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link className={styles.link} href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.column} aria-label="Support links">
            <h3 className={styles.columnTitle}>Support</h3>
            <ul className={styles.list}>
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a className={styles.link} href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.column} aria-label="Company links">
            <h3 className={styles.columnTitle}>Company</h3>
            <ul className={styles.list}>
              {companyLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link className={styles.link} href={link.href}>
                      {link.label}
                    </Link>
                  ) : (
                    <a className={styles.link} href={link.href}>
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p>&copy; 2026 Shopping Cart. All rights reserved.</p>
          <div className={styles.meta}>
            <span>Built for smooth shopping flows</span>
            <span>Fast checkout ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
