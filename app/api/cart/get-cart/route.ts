import { getCart } from "@/src/shared/api/bff/cart";

export const GET = async (request: Request) => getCart(request);
