"use client";

import type { ProductsQuery } from "@/src/shared/api/api-client";

import { useProductSearch } from "../api/useProductSearch";
import styles from "./product-filter.module.css";

type ProductFilterProps = {
  query: ProductsQuery;
  sortField: "name" | "price";
  sortDirection: "asc" | "desc";
  onSortFieldChange: (value: "name" | "price") => void;
  onSortDirectionChange: (value: "asc" | "desc") => void;
  priceMin: string;
  priceMax: string;
  onPriceMinChange: (value: string) => void;
  onPriceMaxChange: (value: string) => void;
  onReset: () => void;
};

export const ProductFilter = ({
  query,
  sortField,
  sortDirection,
  onSortFieldChange,
  onSortDirectionChange,
  priceMin,
  priceMax,
  onPriceMinChange,
  onPriceMaxChange,
  onReset,
}: ProductFilterProps) => {
  const { data, isFetching } = useProductSearch(query);
  const count = data?.data?.data?.totalCount ?? 0;

  return (
    <section className={styles.filter}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Filters</h2>
          <p className={styles.text}>
            Narrow the catalog with price and sort options.
          </p>
        </div>
        <span className={styles.count}>{isFetching ? "..." : count}</span>
      </div>

      <div className={styles.sortGroup}>
        <label className={styles.field}>
          <span className={styles.label}>Sort field</span>
          <select
            className={styles.select}
            value={sortField}
            onChange={(event) =>
              onSortFieldChange(event.target.value as "name" | "price")
            }
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Direction</span>
          <select
            className={styles.select}
            value={sortDirection}
            onChange={(event) =>
              onSortDirectionChange(event.target.value as "asc" | "desc")
            }
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </div>

      <div className={styles.rangeGroup}>
        <label className={styles.field}>
          <span className={styles.label}>Min price</span>
          <input
            className={styles.input}
            type="number"
            min="0"
            step="1"
            placeholder="0"
            value={priceMin}
            onChange={(event) => onPriceMinChange(event.target.value)}
          />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Max price</span>
          <input
            className={styles.input}
            type="number"
            min="0"
            step="1"
            placeholder="1000"
            value={priceMax}
            onChange={(event) => onPriceMaxChange(event.target.value)}
          />
        </label>
      </div>

      <button className={styles.reset} type="button" onClick={onReset}>
        Reset filters
      </button>
    </section>
  );
};
