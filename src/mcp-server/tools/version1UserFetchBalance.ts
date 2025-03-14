/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { version1UserFetchBalance } from "../../funcs/version1UserFetchBalance.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.FetchBalanceRequest$inboundSchema,
};

export const tool$version1UserFetchBalance: ToolDefinition<typeof args> = {
  name: "version1-user_fetch-balance",
  description: `Account balance

Get the credit balance of the account/organization associated with the API key`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await version1UserFetchBalance(
      client,
      args.request,
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
