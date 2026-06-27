import { clearCart } from "@/src/shared/api/bff/cart";

export const POST = async (request: Request) => clearCart(request);
