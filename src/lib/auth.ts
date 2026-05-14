import { betterAuth } from "better-auth";
import Database from "better-sqlite3";

const db = new Database("sqlite.db");

export const auth = betterAuth({
    database: db,
    baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
    emailAndPassword: {
        enabled: true,
    },
    advanced: {
        useCamelCase: true
    }
});
