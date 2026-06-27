export const DEFAULT_STALE_TIME = 24 * 60 * 60 * 1000;
export const CART_STALE_TIME = 60 * 60 * 1000;
export const ORDER_STALE_TIME = 60 * 1000;
export const DEFAULT_DEBOUNCE_DELAY = 500;
export const LOGIN_TOKEN_KEY = "login_token";
export const LOGIN_TOKEN_EXPIRY = 60 * 60 * 24 * 7;

export const ROUTES = {
  PRODUCTS_SEARCH: "/products-search",
  LOGIN: "/login",
  REGISTER: "/register",
  CART: "/cart",
  ORDERS: "/orders",
  HOME: "/",
};

export const PROTECTED_ROUTES = [ROUTES.CART, ROUTES.ORDERS];
