import { signIn } from "@/src/shared/api/bff/login";

export const POST = async (request: Request) => signIn(request);
