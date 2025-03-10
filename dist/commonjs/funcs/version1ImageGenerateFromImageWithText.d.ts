import { StabilityAIClientCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
export declare enum GenerateFromImageWithTextAcceptEnum {
    applicationJson = "application/json",
    imagePng = "image/png"
}
/**
 * Image-to-image with prompt
 *
 * @remarks
 * Produce an image from an existing image using a text prompt.
 * ### How to control strength of generation
 * To preserve only roughly 35% of the initial image, pass in either `init_image_mode=IMAGE_STRENGTH` and `image_strength=0.35` or `init_image_mode=STEP_SCHEDULE` and `step_schedule_start=0.65`.  Both of these are equivalent, however `init_image_mode=STEP_SCHEDULE` also lets you pass in `step_schedule_end`, which can provide an extra level of control for those who need it.  For more details, see the specific fields below.
 *
 * > NOTE: Only **Version 1** engines will work with this endpoint.
 */
export declare function version1ImageGenerateFromImageWithText(client: StabilityAIClientCore, request: operations.GenerateFromImageWithTextRequest, options?: RequestOptions & {
    acceptHeaderOverride?: GenerateFromImageWithTextAcceptEnum;
}): APIPromise<Result<operations.GenerateFromImageWithTextResponse, errors.ErrorT | errors.ErrorT | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=version1ImageGenerateFromImageWithText.d.ts.map