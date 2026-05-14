import { betterAuth } from "better-auth";
import { createClient } from "@libsql/client";

const db = createClient({
    url: process.env.TURSO_DATABASE_URL || "file:sqlite.db",
    authToken: process.env.TURSO_AUTH_TOKEN,
});

const getBaseUrl = () => {
  const url = process.env.BETTER_AUTH_URL || process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  return url.endsWith("/") ? url.slice(0, -1) : url;
};

export const auth = betterAuth({
    database: {
        db,
        type: "libsql"
    },
    baseURL: getBaseUrl(),
    emailAndPassword: {
        enabled: true,
    },
    advanced: {
        // @ts-expect-error - useCamelCase is required for the current DB schema but missing from types
        useCamelCase: true
    }
});
