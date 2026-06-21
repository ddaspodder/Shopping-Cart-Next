"use client";

import { useProductsSearch } from "../api/useProductSearch";

export const ProductSearch = () => {
  const { data, error, isLoading } = useProductsSearch({});

  console.log(data, error, isLoading);
  return <div>ProductSearch</div>;
};
