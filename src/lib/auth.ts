import { betterAuth } from "better-auth";
import Database from "better-sqlite3";

const db = new Database("sqlite.db");

const getBaseUrl = () => {
  const url = process.env.BETTER_AUTH_URL || process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  return url.endsWith("/") ? url.slice(0, -1) : url;
};

export const auth = betterAuth({
    database: db,
    baseURL: getBaseUrl(),
    emailAndPassword: {
        enabled: true,
    },
    advanced: {
        // @ts-expect-error - useCamelCase is required for the current DB schema but missing from types
        useCamelCase: true
    }
});
