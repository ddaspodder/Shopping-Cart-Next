import { addToCart } from "@/src/shared/api/bff/cart";

export const POST = async (request: Request) => addToCart(request);
