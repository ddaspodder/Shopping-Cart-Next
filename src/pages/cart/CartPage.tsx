import { CreateOrderButton } from "@/src/features/manage-order/ui/CreateOrderButton";
import { CartList } from "@/src/widgets/cart-list";

import styles from "./cart-page.module.css";

function CartPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Shopping Cart</p>
        <h1 className={styles.title}>Review the items you want to keep.</h1>
        <p className={styles.text}>
          Adjust quantities, remove products, or clear the cart when you want a
          fresh start.
        </p>
      </header>

      <CartList />

      <section className={styles.actions} aria-label="Cart actions">
        <div className={styles.actionCopy}>
          <h2 className={styles.actionTitle}>Ready to place the order?</h2>
          <p className={styles.actionText}>
            Submit the current cart and move those items into your order
            history.
          </p>
        </div>

        <CreateOrderButton />
      </section>
    </main>
  );
}

export { CartPage };

export default CartPage;
