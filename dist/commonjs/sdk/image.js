"use strict";
/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = exports.GenerateFromImageWithTextAndMaskAcceptEnum = exports.GenerateFromImageWithTextAcceptEnum = exports.GenerateFromTextAcceptEnum = void 0;
const version1ImageGenerateFromImageWithText_js_1 = require("../funcs/version1ImageGenerateFromImageWithText.js");
const version1ImageGenerateFromImageWithTextAndMask_js_1 = require("../funcs/version1ImageGenerateFromImageWithTextAndMask.js");
const version1ImageGenerateFromText_js_1 = require("../funcs/version1ImageGenerateFromText.js");
const sdks_js_1 = require("../lib/sdks.js");
const fp_js_1 = require("../types/fp.js");
var version1ImageGenerateFromText_js_2 = require("../funcs/version1ImageGenerateFromText.js");
Object.defineProperty(exports, "GenerateFromTextAcceptEnum", { enumerable: true, get: function () { return version1ImageGenerateFromText_js_2.GenerateFromTextAcceptEnum; } });
var version1ImageGenerateFromImageWithText_js_2 = require("../funcs/version1ImageGenerateFromImageWithText.js");
Object.defineProperty(exports, "GenerateFromImageWithTextAcceptEnum", { enumerable: true, get: function () { return version1ImageGenerateFromImageWithText_js_2.GenerateFromImageWithTextAcceptEnum; } });
var version1ImageGenerateFromImageWithTextAndMask_js_2 = require("../funcs/version1ImageGenerateFromImageWithTextAndMask.js");
Object.defineProperty(exports, "GenerateFromImageWithTextAndMaskAcceptEnum", { enumerable: true, get: function () { return version1ImageGenerateFromImageWithTextAndMask_js_2.GenerateFromImageWithTextAndMaskAcceptEnum; } });
class Image extends sdks_js_1.ClientSDK {
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
    async generateFromText(request, options) {
        return (0, fp_js_1.unwrapAsync)((0, version1ImageGenerateFromText_js_1.version1ImageGenerateFromText)(this, request, options));
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
    async generateFromImageWithText(request, options) {
        return (0, fp_js_1.unwrapAsync)((0, version1ImageGenerateFromImageWithText_js_1.version1ImageGenerateFromImageWithText)(this, request, options));
    }
    /**
     * Image-to-image with a mask
     *
     * @remarks
     * Selectively modify portions of an image using a mask. The `mask` must be the same shape and size as the init image. This endpoint also supports `image` parameters with alpha channels.  See below for more details.
     *
     * > NOTE: Only **Version 1** engines will work with this endpoint.
     */
    async generateFromImageWithTextAndMask(request, options) {
        return (0, fp_js_1.unwrapAsync)((0, version1ImageGenerateFromImageWithTextAndMask_js_1.version1ImageGenerateFromImageWithTextAndMask)(this, request, options));
    }
}
exports.Image = Image;
//# sourceMappingURL=image.js.map