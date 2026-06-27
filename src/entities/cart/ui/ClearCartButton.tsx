"use client";

import { useClearCart } from "@/src/features/manage-cart/api/useClearCart";

import styles from "./ClearCartButton.module.css";

export const ClearCartButton = () => {
  const { mutate, isPending } = useClearCart();

  const handleClearCart = () => {
    mutate();
  };

  return (
    <button
      className={styles.button}
      type="button"
      onClick={handleClearCart}
      disabled={isPending}
    >
      {isPending ? "Clearing..." : "Clear cart"}
    </button>
  );
};
