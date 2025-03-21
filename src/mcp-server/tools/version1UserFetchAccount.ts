/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { version1UserFetchAccount } from "../../funcs/version1UserFetchAccount.js";
import { formatResult, ToolDefinition } from "../tools.js";

export const tool$version1UserFetchAccount: ToolDefinition = {
  name: "version1-user_fetch-account",
  description: `Account details

Get information about the account associated with the provided API key`,
  tool: async (client, ctx) => {
    const [result, apiCall] = await version1UserFetchAccount(
      client,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
