"use client";

import { CartItem, ClearCartButton, useCart } from "@/src/entities/cart";

import styles from "./CartList.module.css";

export const CartList = () => {
  const { data, isLoading, isError } = useCart();
  const cartItems = data?.data.cartItems ?? [];

  return (
    <section className={styles.shell} aria-label="Cart items">
      <div className={styles.header}>
        <div className={styles.titleWrap}>
          <p className={styles.eyebrow}>Your cart</p>
          <h2 className={styles.title}>Shopping Cart</h2>
        </div>
        <ClearCartButton />
      </div>

      {isLoading ? (
        <div className={styles.state}>Loading cart...</div>
      ) : isError ? (
        <div className={styles.state}>
          We could not load your cart right now. Please try again.
        </div>
      ) : cartItems.length > 0 ? (
        <div className={styles.list}>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className={styles.state}>
          <p className={styles.emptyTitle}>Your cart is empty.</p>
          <p className={styles.emptyText}>
            Add a few products and they will show up here.
          </p>
        </div>
      )}
    </section>
  );
};
