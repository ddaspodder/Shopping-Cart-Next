"use client";

import { useState } from "react";

import {
  ProductFilter,
  ProductSearch,
  useProductSearch,
} from "@/src/features/product-search";
import { ProductCard } from "@/src/entitities/products/ui/ProductCard";
import styles from "./product-list.module.css";
import type { ProductsQuery } from "@/src/shared/api/api-client";

type SortField = "name" | "price";
type SortDirection = "asc" | "desc";

const buildQuery = (
  search: string,
  sortField: SortField,
  sortDirection: SortDirection,
  priceMin: string,
  priceMax: string,
): ProductsQuery => ({
  search: search.trim() || undefined,
  sort: `${sortField}:${sortDirection}`,
  price_min: priceMin ? Number(priceMin) : undefined,
  price_max: priceMax ? Number(priceMax) : undefined,
  limit: 12,
});

export const ProductList = () => {
  const [searchDraft, setSearchDraft] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<SortField>("name");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  const query = buildQuery(
    searchTerm,
    sortField,
    sortDirection,
    priceMin,
    priceMax,
  );
  const { data, error, isLoading } = useProductSearch(query);
  const products = data?.data?.data?.products ?? [];

  const handleReset = () => {
    setSearchDraft("");
    setSearchTerm("");
    setSortField("name");
    setSortDirection("asc");
    setPriceMin("");
    setPriceMax("");
  };

  return (
    <section className={styles.shell} aria-label="Product search">
      <ProductSearch
        query={query}
        value={searchDraft}
        onChange={setSearchDraft}
        onSubmit={setSearchTerm}
      />

      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <ProductFilter
            query={query}
            sortField={sortField}
            sortDirection={sortDirection}
            onSortFieldChange={setSortField}
            onSortDirectionChange={setSortDirection}
            priceMin={priceMin}
            priceMax={priceMax}
            onPriceMinChange={setPriceMin}
            onPriceMaxChange={setPriceMax}
            onReset={handleReset}
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
            <span className={styles.badge}>{products.length} shown</span>
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
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className={styles.state}>
              No products matched the current filters.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
