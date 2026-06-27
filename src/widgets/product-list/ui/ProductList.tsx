"use client";

import { useProductsInfinite } from "@/src/entities/product";
import { ProductCard } from "@/src/entities/product";
import { ProductFilter, ProductSearch } from "@/src/features/product-search";
import { useProductList } from "../model/useProductList";
import { useIsAuthenticated } from "@/src/entities/user/api/useIsAuthenticated";
import styles from "./product-list.module.css";

export const ProductList = () => {
  const {
    searchDraft,
    setSearchDraft,
    setSearchTerm,
    sortField,
    setSortField,
    sortDirection,
    setSortDirection,
    priceMin,
    setPriceMin,
    priceMax,
    setPriceMax,
    query,
    reset,
    loadMoreButton,
  } = useProductList();

  const {
    data,
    error,
    isLoading,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useProductsInfinite(query);
  const pages = data?.pages ?? [];
  const products = pages.flatMap((page) => page.data?.data.products ?? []);
  const totalCount = products.length;

  const { data: isAuthenticated } = useIsAuthenticated();

  return (
    <section className={styles.shell} aria-label="Product search">
      <ProductSearch
        value={searchDraft}
        onChange={setSearchDraft}
        onSubmit={setSearchTerm}
        count={totalCount}
        isFetching={isFetching}
      />

      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <ProductFilter
            sortField={sortField}
            sortDirection={sortDirection}
            onSortFieldChange={setSortField}
            onSortDirectionChange={setSortDirection}
            priceMin={priceMin}
            priceMax={priceMax}
            onPriceMinChange={setPriceMin}
            onPriceMaxChange={setPriceMax}
            onReset={reset}
            count={totalCount}
            isFetching={isFetching}
          />
        </aside>

        <div className={styles.main}>
          <div className={styles.summary}>
            <div>
              <h2 className={styles.title}>Products</h2>
              <p className={styles.text}>
                Browse the current catalog and add the items you want to keep in
                your cart.
              </p>
            </div>
            <span className={styles.badge}>{totalCount} shown</span>
          </div>

          {isLoading ? (
            <div className={styles.state}>Loading products...</div>
          ) : error ? (
            <div className={styles.state}>
              We could not load products right now. Please try again.
            </div>
          ) : products.length > 0 ? (
            <div className={styles.grid}>
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  showAddToCartButton={isAuthenticated}
                />
              ))}
            </div>
          ) : (
            <div className={styles.state}>
              No products matched the current filters.
            </div>
          )}
          {hasNextPage && (
            <button
              className={styles.loadMore}
              type="button"
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              aria-label={loadMoreButton.ariaLabel}
            >
              {isFetchingNextPage ? "Loading..." : loadMoreButton.label}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
