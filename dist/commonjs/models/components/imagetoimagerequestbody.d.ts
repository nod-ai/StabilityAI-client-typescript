import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ClipGuidancePreset } from "./clipguidancepreset.js";
import { Extras, Extras$Outbound } from "./extras.js";
import { InitImage, InitImage$Outbound } from "./initimage.js";
import { InitImageMode } from "./initimagemode.js";
import { Sampler } from "./sampler.js";
import { StylePreset } from "./stylepreset.js";
import { TextPrompt, TextPrompt$Outbound } from "./textprompt.js";
export type ImageToImageRequestBody = {
    /**
     * Image used to initialize the diffusion process, in lieu of random noise.
     */
    initImage: InitImage | Blob;
    /**
     * An array of text prompts to use for generation.
     *
     * @remarks
     *
     * Due to how arrays are represented in `multipart/form-data` requests, prompts must adhere to the format `text_prompts[index][text|weight]`,
     * where `index` is some integer used to tie the text and weight together.  While `index` does not have to be sequential, duplicate entries
     * will override previous entries, so it is recommended to use sequential indices.
     *
     * Given a text prompt with the text `A lighthouse on a cliff` and a weight of `0.5`, it would be represented as:
     * ```
     * text_prompts[0][text]: "A lighthouse on a cliff"
     * text_prompts[0][weight]: 0.5
     * ```
     *
     * To add another prompt to that request simply provide the values under a new `index`:
     *
     * ```
     * text_prompts[0][text]: "A lighthouse on a cliff"
     * text_prompts[0][weight]: 0.5
     * text_prompts[1][text]: "land, ground, dirt, grass"
     * text_prompts[1][weight]: -0.9
     * ```
     */
    textPrompts: Array<TextPrompt>;
    /**
     * How strictly the diffusion process adheres to the prompt text (higher values keep your image closer to your prompt)
     */
    cfgScale?: number | undefined;
    clipGuidancePreset?: ClipGuidancePreset | undefined;
    /**
     * Extra parameters passed to the engine.
     *
     * @remarks
     * These parameters are used for in-development or experimental features and may change
     * without warning, so please use with caution.
     */
    extras?: Extras | undefined;
    /**
     * How much influence the `init_image` has on the diffusion process. Values close to `1` will yield images very similar to the `init_image` while values close to `0` will yield images wildly different than the `init_image`. The behavior of this is meant to mirror DreamStudio's "Image Strength" slider.  <br/> <br/> This parameter is just an alternate way to set `step_schedule_start`, which is done via the calculation `1 - image_strength`. For example, passing in an Image Strength of 35% (`0.35`) would result in a `step_schedule_start` of `0.65`.
     *
     * @remarks
     */
    imageStrength?: number | undefined;
    /**
     * Whether to use `image_strength` or `step_schedule_*` to control how much influence the `init_image` has on the result.
     */
    initImageMode?: InitImageMode | undefined;
    /**
     * Which sampler to use for the diffusion process. If this value is omitted we'll automatically select an appropriate sampler for you.
     */
    sampler?: Sampler | undefined;
    /**
     * Number of images to generate
     */
    samples?: number | undefined;
    /**
     * Random noise seed (omit this option or use `0` for a random seed)
     */
    seed?: number | undefined;
    /**
     * Skips a proportion of the end of the diffusion steps, allowing the init_image to influence the final generated image.  Lower values will result in more influence from the init_image, while higher values will result in more influence from the diffusion steps.
     */
    stepScheduleEnd?: number | undefined;
    /**
     * Skips a proportion of the start of the diffusion steps, allowing the init_image to influence the final generated image.  Lower values will result in more influence from the init_image, while higher values will result in more influence from the diffusion steps.  (e.g. a value of `0` would simply return you the init_image, where a value of `1` would return you a completely different image.)
     */
    stepScheduleStart?: number | undefined;
    /**
     * Number of diffusion steps to run.
     */
    steps?: number | undefined;
    /**
     * Pass in a style preset to guide the image model towards a particular style.
     *
     * @remarks
     * This list of style presets is subject to change.
     */
    stylePreset?: StylePreset | undefined;
};
/** @internal */
export declare const ImageToImageRequestBody$inboundSchema: z.ZodType<ImageToImageRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type ImageToImageRequestBody$Outbound = {
    init_image: InitImage$Outbound | Blob;
    text_prompts: Array<TextPrompt$Outbound>;
    cfg_scale: number;
    clip_guidance_preset: string;
    extras?: Extras$Outbound | undefined;
    image_strength: number;
    init_image_mode: string;
    sampler?: string | undefined;
    samples: number;
    seed: number;
    step_schedule_end?: number | undefined;
    step_schedule_start: number;
    steps: number;
    style_preset?: string | undefined;
};
/** @internal */
export declare const ImageToImageRequestBody$outboundSchema: z.ZodType<ImageToImageRequestBody$Outbound, z.ZodTypeDef, ImageToImageRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ImageToImageRequestBody$ {
    /** @deprecated use `ImageToImageRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ImageToImageRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `ImageToImageRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ImageToImageRequestBody$Outbound, z.ZodTypeDef, ImageToImageRequestBody>;
    /** @deprecated use `ImageToImageRequestBody$Outbound` instead. */
    type Outbound = ImageToImageRequestBody$Outbound;
}
export declare function imageToImageRequestBodyToJSON(imageToImageRequestBody: ImageToImageRequestBody): string;
export declare function imageToImageRequestBodyFromJSON(jsonString: string): SafeParseResult<ImageToImageRequestBody, SDKValidationError>;
//# sourceMappingURL=imagetoimagerequestbody.d.ts.map