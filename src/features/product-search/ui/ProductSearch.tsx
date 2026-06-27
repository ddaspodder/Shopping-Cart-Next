"use client";

import type { FormEvent } from "react";
import styles from "./product-search.module.css";

type ProductSearchProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
  count?: number;
  isFetching?: boolean;
};

export const ProductSearch = ({
  value,
  onChange,
  onSubmit,
  count = 0,
  isFetching = false,
}: ProductSearchProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(value);
  };

  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="product-search">
        Search products
      </label>
      <div className={styles.row}>
        <input
          id="product-search"
          className={styles.input}
          type="search"
          placeholder="Search by product name"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
        <button className={styles.button} type="submit">
          Search
        </button>
      </div>
      <p className={styles.meta}>
        {isFetching ? "Refreshing results..." : `${count} products found`}
      </p>
    </form>
  );
};
