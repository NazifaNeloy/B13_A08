import { createAuthClient } from "better-auth/react";

const getBaseUrl = () => {
  const url = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  return url.endsWith("/") ? url.slice(0, -1) : url;
};

export const authClient = createAuthClient({
    baseURL: getBaseUrl()
});
