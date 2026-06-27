"use client";

import Image from "next/image";

import { QuantityButton } from "@/src/features/manage-cart/ui/QuantityButton";
import type { GetCartResponse } from "@/src/shared/api/api-client";

import styles from "./CartItem.module.css";

type CartItemData = GetCartResponse["data"]["cartItems"][number];

type CartItemProps = {
  item: CartItemData;
};

export const CartItem = ({ item }: CartItemProps) => {
  return (
    <article className={styles.item}>
      <div className={styles.imageWrap}>
        <Image
          src="/product-placeholder.svg"
          alt=""
          width={84}
          height={84}
          className={styles.image}
        />
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{item.products.name}</h3>
        <p className={styles.price}>${Number(item.products.price).toFixed(2)}</p>
      </div>

      <div className={styles.actions}>
        <QuantityButton productId={item.productId} quantity={item.quantity} />
      </div>
    </article>
  );
};
