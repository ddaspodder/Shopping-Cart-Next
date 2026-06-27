"use client";

import { ErrorPage } from "@/src/pages/error";

type AppErrorProps = {
  error: Error & { digest?: string };
  unstable_retry?: () => void;
  reset?: () => void;
};

export default function Error({ error, unstable_retry, reset }: AppErrorProps) {
  return (
    <ErrorPage
      error={error}
      onRetry={unstable_retry ?? reset ?? (() => window.location.reload())}
      scopeLabel="route"
    />
  );
}
