import Image from "next/image";

import type { GetOrdersResponse } from "@/src/shared/api/api-client";

import styles from "./orderItems.module.css";

type OrderItem = GetOrdersResponse["data"][number]["orderItems"][number];

type OrderItemsProps = {
  item: OrderItem;
};

export const OrderItems = ({ item }: OrderItemsProps) => {
  return (
    <article className={styles.item}>
      <div className={styles.media}>
        <Image
          src="/product-placeholder.svg"
          alt=""
          width={72}
          height={72}
          className={styles.image}
        />
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{item.products.name}</h3>
      </div>

      <div className={styles.meta}>
        <span className={styles.quantity}>Qty {item.quantity}</span>
        <span className={styles.price}>${Number(item.price).toFixed(2)}</span>
      </div>
    </article>
  );
};
