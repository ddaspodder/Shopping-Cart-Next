import { getSession } from "@/src/shared/api/bff/session";

export const GET = async (request: Request) => getSession(request);
