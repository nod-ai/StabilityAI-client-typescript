import { StabilityAIClientCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Account balance
 *
 * @remarks
 * Get the credit balance of the account/organization associated with the API key
 */
export declare function version1UserFetchBalance(client: StabilityAIClientCore, request: operations.FetchBalanceRequest, options?: RequestOptions): APIPromise<Result<components.BalanceResponseBody, errors.ErrorT | errors.ErrorT | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=version1UserFetchBalance.d.ts.map