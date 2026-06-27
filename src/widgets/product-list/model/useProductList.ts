"use client";

import { useMemo, useState } from "react";

import {
  buildProductsQuery,
  type SortDirection,
  type SortField,
} from "../lib/buildProductsQuery";
import { debounce } from "@/src/shared/lib/debounce";
import { DEFAULT_DEBOUNCE_DELAY } from "@/src/shared/config";

export const useProductList = () => {
  const [searchDraft, setSearchDraft] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<SortField>("name");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  const query = useMemo(
    () =>
      buildProductsQuery({
        search: searchTerm,
        sortField,
        sortDirection,
        priceMin,
        priceMax,
      }),
    [searchTerm, sortField, sortDirection, priceMin, priceMax],
  );

  const loadMoreButton = {
    label: "Load More",
    ariaLabel: "Load more products",
  };

  const reset = () => {
    setSearchDraft("");
    setSearchTerm("");
    setSortField("name");
    setSortDirection("asc");
    setPriceMin("");
    setPriceMax("");
  };

  return {
    searchDraft,
    searchTerm,
    setSearchDraft,
    setSearchTerm: debounce(setSearchTerm, DEFAULT_DEBOUNCE_DELAY),
    sortField,
    setSortField: debounce(setSortField, DEFAULT_DEBOUNCE_DELAY),
    sortDirection,
    setSortDirection: debounce(setSortDirection, DEFAULT_DEBOUNCE_DELAY),
    priceMin,
    setPriceMin: debounce(setPriceMin, DEFAULT_DEBOUNCE_DELAY),
    priceMax,
    setPriceMax: debounce(setPriceMax, DEFAULT_DEBOUNCE_DELAY),
    query,
    reset,
    loadMoreButton,
  };
};
