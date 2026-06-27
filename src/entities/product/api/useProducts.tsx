"use client";

import type { ProductsQuery } from "@/src/shared/api/api-client";
import { getProducts } from "@/src/shared/api/api-client";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { PRODUCTS_PER_PAGE } from "../config/constants";
import { DEFAULT_STALE_TIME } from "@/src/shared/config";
export const useProducts = (options: ProductsQuery) =>
  useQuery({
    queryKey: ["products", options],
    queryFn: ({ signal }) => getProducts({ query: options, signal }),
    staleTime: DEFAULT_STALE_TIME,
  });

export const useProductsInfinite = (options: ProductsQuery) =>
  useInfiniteQuery({
    queryKey: ["products", options],
    initialPageParam: 0,
    queryFn: async ({ pageParam, signal }) =>
      getProducts({
        query: {
          ...options,
          offset: pageParam * (options.limit ?? PRODUCTS_PER_PAGE),
        },
        signal,
      }),
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.data?.data.hasNext) {
        return pages.length;
      }
      return undefined;
    },
    staleTime: DEFAULT_STALE_TIME,
  });
