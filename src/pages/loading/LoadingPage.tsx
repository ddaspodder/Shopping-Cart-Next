import styles from "./loading-page.module.css";

function LoadingPage() {
  return (
    <main className={styles.page} aria-busy="true" aria-live="polite">
      <section className={styles.card}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>Loading storefront</span>
          <h1 className={styles.title}>Preparing your shopping view.</h1>
          <p className={styles.text}>
            We&apos;re fetching the latest products, cart state, and order data
            so the app can slide in with the right content.
          </p>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.media} />
          <div className={styles.lines}>
            <span className={styles.line} />
            <span className={styles.lineShort} />
            <span className={styles.line} />
          </div>
          <div className={styles.grid}>
            <div className={styles.tile} />
            <div className={styles.tile} />
            <div className={styles.tile} />
          </div>
        </div>
      </section>
    </main>
  );
}

export { LoadingPage };

export default LoadingPage;
