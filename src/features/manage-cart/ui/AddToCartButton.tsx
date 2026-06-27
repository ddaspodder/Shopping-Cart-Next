"use client";

import { useAddToCart } from "../api/useAddToCart";

import styles from "./AddToCartButton.module.css";

type AddToCartButtonProps = {
  productId: number;
  quantity?: number;
  label?: string;
};

export const AddToCartButton = ({
  productId,
  quantity = 1,
  label = "Add to cart",
}: AddToCartButtonProps) => {
  const { mutate, isPending } = useAddToCart();

  const handleAddToCart = () => {
    mutate({ productId, quantity });
  };

  return (
    <button
      className={styles.button}
      type="button"
      onClick={handleAddToCart}
      disabled={isPending}
      aria-busy={isPending}
    >
      {isPending ? "Adding..." : label}
    </button>
  );
};
