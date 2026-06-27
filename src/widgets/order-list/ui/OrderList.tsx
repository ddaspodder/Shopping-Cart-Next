import type { GetOrdersResponse } from "@/src/shared/api/api-client";

import { OrderItems } from "@/src/entities/order/ui/orderItems";
import styles from "./OrderList.module.css";

type Orders = GetOrdersResponse["data"];

type OrderListProps = {
  orders: Orders;
};

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));

const formatCurrency = (value: string) =>
  `$${Number.parseFloat(value).toFixed(2)}`;

const formatStatus = (status: string) =>
  status.charAt(0).toUpperCase() + status.slice(1);

export const OrderList = ({ orders }: OrderListProps) => {
  return (
    <section className={styles.shell} aria-label="Order history">
      <div className={styles.header}>
        <div className={styles.titleWrap}>
          <p className={styles.eyebrow}>Order history</p>
          <h2 className={styles.title}>All orders</h2>
        </div>
        <span className={styles.count}>{orders.length} orders</span>
      </div>

      {orders.length > 0 ? (
        <div className={styles.list}>
          {orders.map((order) => (
            <article key={order.id} className={styles.order}>
              <header className={styles.orderHeader}>
                <div className={styles.orderInfo}>
                  <p className={styles.orderLabel}>Order #{order.id}</p>
                  <p className={styles.orderMeta}>
                    Updated {formatDate(order.updatedAt)}
                  </p>
                </div>

                <div className={styles.orderStats}>
                  <span className={styles.status}>{formatStatus(order.status)}</span>
                  <span className={styles.amount}>
                    {formatCurrency(order.totalAmount)}
                  </span>
                </div>
              </header>

              <div className={styles.items}>
                {order.orderItems.map((item) => (
                  <OrderItems key={item.id} item={item} />
                ))}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <p className={styles.emptyTitle}>No orders yet.</p>
          <p className={styles.emptyText}>
            Once you place your first order, it will appear here with the item
            breakdown and totals.
          </p>
        </div>
      )}
    </section>
  );
};
