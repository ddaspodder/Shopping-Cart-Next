import { NextResponse } from "next/server";
import { ApiError } from "./api-error";

export function withErrorHandler(
  handler: (request: Request) => Promise<NextResponse>,
) {
  return async (request: Request) => {
    try {
      return await handler(request);
    } catch (error) {
      console.error(error);

      if (error instanceof ApiError) {
        return NextResponse.json(
          {
            success: false,
            message: error.message,
          },
          {
            status: error.status,
          },
        );
      }

      return NextResponse.json(
        {
          success: false,
          message: "Internal Server Error",
        },
        {
          status: 500,
        },
      );
    }
  };
}
