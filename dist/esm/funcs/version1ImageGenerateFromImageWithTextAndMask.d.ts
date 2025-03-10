import { StabilityAIClientCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
export declare enum GenerateFromImageWithTextAndMaskAcceptEnum {
    applicationJson = "application/json",
    imagePng = "image/png"
}
/**
 * Image-to-image with a mask
 *
 * @remarks
 * Selectively modify portions of an image using a mask. The `mask` must be the same shape and size as the init image. This endpoint also supports `image` parameters with alpha channels.  See below for more details.
 *
 * > NOTE: Only **Version 1** engines will work with this endpoint.
 */
export declare function version1ImageGenerateFromImageWithTextAndMask(client: StabilityAIClientCore, request: operations.GenerateFromImageWithTextAndMaskRequest, options?: RequestOptions & {
    acceptHeaderOverride?: GenerateFromImageWithTextAndMaskAcceptEnum;
}): APIPromise<Result<operations.GenerateFromImageWithTextAndMaskResponse, errors.ErrorT | errors.ErrorT | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=version1ImageGenerateFromImageWithTextAndMask.d.ts.map