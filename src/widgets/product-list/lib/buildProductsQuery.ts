import type { ProductsQuery } from "@/src/shared/api";

export type SortField = "name" | "price";
export type SortDirection = "asc" | "desc";
import { PRODUCTS_PER_PAGE } from "@/src/entities/product";

export type ProductListFilters = {
  search: string;
  sortField: SortField;
  sortDirection: SortDirection;
  priceMin: string;
  priceMax: string;
};

export const buildProductsQuery = ({
  search,
  sortField,
  sortDirection,
  priceMin,
  priceMax,
}: ProductListFilters): ProductsQuery => {
  const query: Partial<ProductsQuery> = {};
  if (search) {
    query.search = `name:${search.trim() || undefined}`;
  }
  if (sortField && sortDirection) {
    query.sort = `${sortField}:${sortDirection}`;
  }
  if (priceMin) {
    query.price_min = Number(priceMin);
  }
  if (priceMax) {
    query.price_max = Number(priceMax);
  }
  query.limit = PRODUCTS_PER_PAGE;
  return query as ProductsQuery;
};
