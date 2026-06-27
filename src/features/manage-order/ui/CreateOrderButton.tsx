"use client";

import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { createOrder } from "../api/createOrder";
import styles from "./CreateOrderButton.module.css";

type Notice = {
  kind: "success" | "error";
  message: string;
} | null;

const getErrorMessage = (error: unknown) => {
  if (typeof error === "object" && error && "message" in error) {
    return error.message as string;
  }
  return "Unable to create the order right now.";
};

export const CreateOrderButton = () => {
  const queryClient = useQueryClient();
  const [notice, setNotice] = useState<Notice>(null);
  const [isPending, setIsPending] = useState(false);

  const handleCreateOrder = async () => {
    if (isPending) {
      return;
    }

    setIsPending(true);
    setNotice(null);

    try {
      const orderResponse = await createOrder();

      await queryClient.invalidateQueries({ queryKey: ["cart"] });

      setNotice({
        kind: "success",
        message: `Order #${orderResponse.data.id} created.`,
      });
    } catch (error) {
      setNotice({
        kind: "error",
        message: getErrorMessage(error),
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className={styles.shell}>
      <button
        className={styles.button}
        type="button"
        onClick={handleCreateOrder}
        disabled={isPending}
        aria-busy={isPending}
      >
        {isPending ? "Creating order..." : "Create order"}
      </button>

      {notice ? (
        <p
          className={`${styles.notice} ${
            notice.kind === "success" ? styles.success : styles.error
          }`}
          aria-live="polite"
        >
          {notice.message}
        </p>
      ) : null}
    </div>
  );
};
