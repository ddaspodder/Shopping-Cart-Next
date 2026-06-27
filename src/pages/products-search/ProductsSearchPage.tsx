import { ProductList } from "@/src/widgets/product-list";
import styles from "./products-search.module.css";

function ProductsSearchPage() {
  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Catalog</p>
        <h1 className={styles.title}>
          Search products, filter by price, and sort your picks.
        </h1>
        <p className={styles.text}>
          Use the search bar for quick lookups, the filters to narrow the
          catalog, and the product grid to compare items in one familiar
          shopping layout.
        </p>
      </div>
      <ProductList />
    </section>
  );
}

export { ProductsSearchPage };
