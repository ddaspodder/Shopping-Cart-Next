import { getOrders } from "@/src/entities/order/api/getOrder";
import { OrderList } from "@/src/widgets/order-list/ui/OrderList";

import styles from "./orders-page.module.css";

async function OrdersPage() {
  const response = await getOrders();

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Orders</p>
        <h1 className={styles.title}>Review your full order history.</h1>
        <p className={styles.text}>
          Each order is grouped with its items, updated timestamp, status, and
          total amount so it stays easy to scan.
        </p>
      </header>

      <OrderList orders={response.data} />
    </main>
  );
}

export { OrdersPage };

export default OrdersPage;
