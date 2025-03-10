import { StabilityAIClientCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
export declare enum GenerateFromTextAcceptEnum {
    applicationJson = "application/json",
    imagePng = "image/png"
}
/**
 * Text-to-image
 *
 * @remarks
 * Generate an image from a text prompt.
 * ### Using SDXL 1.0
 * Use `stable-diffusion-xl-1024-v1-0` as the `engine_id` of your request and pass in `height` & `width` as one of the following combinations:
 * - 1024x1024 (default)
 * - 1152x896
 * - 896x1152
 * - 1216x832
 * - 1344x768
 * - 768x1344
 * - 1536x640
 * - 640x1536
 *
 * ### SDXL 1.0 Pricing
 * When specifying 30 steps or fewer, generation costs 0.9 credits.
 *
 * When specifying above 30 steps, generation cost is determined using the following formula:
 *
 *  `cost = 0.9 * (steps / 30)`
 *
 * ### Using SD 1.6
 * SD1.6 is a flexible-resolution base model allowing you to generate non-standard aspect ratios. The model is optimized for a resolution of 512 x 512 pixels. To generate 1 megapixel outputs, we recommend using SDXL 1.0, which is available at the same price.
 *
 * Pass in `stable-diffusion-v1-6` as the `engine_id` of your request and ensure the `height` & `width` you pass in adhere to the following restrictions:
 * - No dimension can be less than 320 pixels
 * - No dimension can be greater than 1536 pixels
 * - Height and width must be specified in increments of 64
 * - The default resolution is 512 x 512
 */
export declare function version1ImageGenerateFromText(client: StabilityAIClientCore, request: operations.GenerateFromTextRequest, options?: RequestOptions & {
    acceptHeaderOverride?: GenerateFromTextAcceptEnum;
}): APIPromise<Result<operations.GenerateFromTextResponse, errors.ErrorT | errors.ErrorT | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=version1ImageGenerateFromText.d.ts.map