"use client";

import { getProducts } from "@/src/shared/api/api-client";
import { useQuery } from "@tanstack/react-query";
import type { ProductsQuery } from "@/src/shared/api/api-client";

export const useProductSearch = (options: ProductsQuery) =>
  useQuery({
    queryKey: ["products-search", options],
    queryFn: () => getProducts({ query: options }),
    staleTime: 60 * 60 * 1000,
  });

export const useProductsSearch = useProductSearch;
