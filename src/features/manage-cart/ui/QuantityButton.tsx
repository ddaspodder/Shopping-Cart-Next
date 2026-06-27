"use client";

import { useAddToCart } from "../api/useAddToCart";
import { useRemoveFromCart } from "../api/useRemoveFromCart";

import styles from "./QuantityButton.module.css";

type QuantityButtonProps = {
  productId: number;
  quantity: number;
};

export const QuantityButton = ({
  productId,
  quantity,
}: QuantityButtonProps) => {
  const { mutate: addToCart, isPending: isAdding } = useAddToCart();
  const { mutate: removeFromCart, isPending: isRemoving } =
    useRemoveFromCart();
  const isPending = isAdding || isRemoving;

  const increaseQuantity = () => {
    addToCart({ productId, quantity: 1 });
  };

  const decreaseQuantity = () => {
    removeFromCart({ productId, quantity: 1 });
  };

  return (
    <div className={styles.quantity} aria-label="Quantity controls">
      <button
        className={styles.control}
        type="button"
        onClick={decreaseQuantity}
        disabled={isPending}
        aria-label="Decrease quantity"
      >
        -
      </button>
      <span className={styles.value} aria-label={`Quantity ${quantity}`}>
        {quantity}
      </span>
      <button
        className={styles.control}
        type="button"
        onClick={increaseQuantity}
        disabled={isPending}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};
