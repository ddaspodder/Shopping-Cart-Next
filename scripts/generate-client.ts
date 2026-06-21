import { createClient } from "@hey-api/openapi-ts";
import nextEnv from "@next/env";

const { loadEnvConfig } = nextEnv;

// Load env files exactly like Next.js
loadEnvConfig(process.cwd());

createClient({
  input: `${process.env.NEXT_PUBLIC_API_BASE_URL}/docs/json`,
  output: "src/shared/api/api-client",
  plugins: [
    {
      name: "@hey-api/client-next",
      runtimeConfigPath: "./src/shared/api/client.ts",
    },
  ],
});
