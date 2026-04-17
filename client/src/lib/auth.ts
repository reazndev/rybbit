import { adminClient, organizationClient, emailOTPClient, genericOAuthClient } from "better-auth/client/plugins";
import { apiKeyClient } from "@better-auth/api-key/client"
import { createAuthClient } from "better-auth/react";

//TODO: Load socialProviders from configs, but we can't use hooks here
export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  plugins: [adminClient(), organizationClient({
    teams: {
      enabled: true,
    },
  }), emailOTPClient(), apiKeyClient(), genericOAuthClient()],
  fetchOptions: {
    credentials: "include",
  },
  socialProviders: ["google", "github", "twitter"],
});