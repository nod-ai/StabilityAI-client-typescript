/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { version1UserFetchAccount } from "../funcs/version1UserFetchAccount.js";
import { version1UserFetchBalance } from "../funcs/version1UserFetchBalance.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class User extends ClientSDK {
  /**
   * Account details
   *
   * @remarks
   * Get information about the account associated with the provided API key
   */
  async fetchAccount(
    options?: RequestOptions,
  ): Promise<components.AccountResponseBody> {
    return unwrapAsync(version1UserFetchAccount(
      this,
      options,
    ));
  }

  /**
   * Account balance
   *
   * @remarks
   * Get the credit balance of the account/organization associated with the API key
   */
  async fetchBalance(
    request: operations.FetchBalanceRequest,
    options?: RequestOptions,
  ): Promise<components.BalanceResponseBody> {
    return unwrapAsync(version1UserFetchBalance(
      this,
      request,
      options,
    ));
  }
}
