import { removeFromCart } from "@/src/shared/api/bff/cart";

export const POST = async (request: Request) => removeFromCart(request);
