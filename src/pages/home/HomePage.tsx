import Link from "next/link";

import styles from "./home.module.css";

function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`${styles.panel} ${styles.intro}`}>
          <span className={styles.eyebrow}>New arrivals</span>
          <h1 className={styles.title}>
            Everything you need, already in view.
          </h1>
          <p className={styles.text}>
            Track products, check orders, and jump back into your cart without
            losing momentum. This storefront shell keeps the shopping flow calm,
            clear, and easy to scan.
          </p>

          <div className={styles.actions}>
            <Link className={styles.action} href="/products-search">
              Browse products
            </Link>
            <Link className={styles.secondaryAction} href="/orders">
              View orders
            </Link>
          </div>
        </div>

        <aside className={`${styles.panel} ${styles.sidebar}`}>
          <div>
            <h2 className={styles.cardTitle}>Today&apos;s snapshot</h2>
            <p className={styles.cardText}>
              A quick summary of the store state, designed to help shoppers get
              to the right place faster.
            </p>
          </div>

          <div className={styles.stack}>
            <div className={styles.stat}>
              <span className={styles.statValue}>120+</span>
              <span className={styles.statLabel}>
                Products ready to explore
              </span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>24h</span>
              <span className={styles.statLabel}>Typical dispatch window</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>4.9/5</span>
              <span className={styles.statLabel}>Average customer rating</span>
            </div>
          </div>
        </aside>
      </section>

      <section className={styles.grid} aria-label="Store highlights">
        <article className={styles.feature}>
          <span className={styles.featureMeta}>01</span>
          <h2>Quick product discovery</h2>
          <p>
            Search, filter, and compare products from one clean entry point so
            the user can find the right item in fewer clicks.
          </p>
        </article>

        <article className={styles.feature}>
          <span className={styles.featureMeta}>02</span>
          <h2>Order visibility</h2>
          <p>
            Surface order history in a layout that feels organized, readable,
            and easy to revisit when something needs a quick check.
          </p>
        </article>

        <article className={styles.feature}>
          <span className={styles.featureMeta}>03</span>
          <h2>Cart-first flow</h2>
          <p>
            Keep the cart accessible from the header and reinforce it with a
            strong call to action wherever the shopper lands.
          </p>
        </article>
      </section>
    </>
  );
}

export { HomePage };

export default HomePage;
