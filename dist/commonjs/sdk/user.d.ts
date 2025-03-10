import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class User extends ClientSDK {
    /**
     * Account details
     *
     * @remarks
     * Get information about the account associated with the provided API key
     */
    fetchAccount(options?: RequestOptions): Promise<components.AccountResponseBody>;
    /**
     * Account balance
     *
     * @remarks
     * Get the credit balance of the account/organization associated with the API key
     */
    fetchBalance(request: operations.FetchBalanceRequest, options?: RequestOptions): Promise<components.BalanceResponseBody>;
}
//# sourceMappingURL=user.d.ts.map