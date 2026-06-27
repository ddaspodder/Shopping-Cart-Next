"use client";

import { useEffect } from "react";
import Link from "next/link";

import styles from "./error-page.module.css";

type ErrorPageProps = {
  error: Error & { digest?: string };
  onRetry: () => void;
  scopeLabel?: string;
};

function ErrorPage({
  error,
  onRetry,
  scopeLabel = "storefront",
}: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className={styles.page}>
      <section className={styles.card} role="alert" aria-live="assertive">
        <div className={styles.copy}>
          <span className={styles.eyebrow}>Something went wrong</span>
          <h1 className={styles.title}>
            We couldn&apos;t load this {scopeLabel} view.
          </h1>
          <p className={styles.text}>
            The request failed while the app was rendering. You can retry the
            current route or head back to the homepage and continue from there.
          </p>

          <div className={styles.actions}>
            <button
              className={styles.primaryAction}
              type="button"
              onClick={onRetry}
            >
              Try again
            </button>
            <Link className={styles.secondaryAction} href="/">
              Return home
            </Link>
          </div>
        </div>

        <aside className={styles.meta} aria-hidden="true">
          <div className={styles.signal}>
            <span className={styles.signalDot} />
            <span>Recovery mode</span>
          </div>

          <div className={styles.errorCard}>
            <span className={styles.errorLabel}>Error digest</span>
            <code className={styles.errorCode}>
              {error.digest ?? "unavailable"}
            </code>
          </div>

          <div className={styles.stack}>
            <div className={styles.stackLine} />
            <div className={styles.stackLineShort} />
            <div className={styles.stackLine} />
          </div>
        </aside>
      </section>
    </main>
  );
}

export { ErrorPage };

export default ErrorPage;
