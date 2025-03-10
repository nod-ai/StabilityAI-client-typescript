import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ClipGuidancePreset } from "./clipguidancepreset.js";
import { Extras, Extras$Outbound } from "./extras.js";
import { InitImage, InitImage$Outbound } from "./initimage.js";
import { MaskImage, MaskImage$Outbound } from "./maskimage.js";
import { Sampler } from "./sampler.js";
import { StylePreset } from "./stylepreset.js";
import { TextPrompt, TextPrompt$Outbound } from "./textprompt.js";
export type MaskingRequestBody = {
    /**
     * Image used to initialize the diffusion process, in lieu of random noise.
     */
    initImage: InitImage | Blob;
    /**
     * For any given pixel, the mask determines the strength of generation on a linear scale.  This parameter determines where to source the mask from:
     *
     * @remarks
     * - `MASK_IMAGE_WHITE` will use the white pixels of the mask_image as the mask, where white pixels are completely replaced and black pixels are unchanged
     * - `MASK_IMAGE_BLACK` will use the black pixels of the mask_image as the mask, where black pixels are completely replaced and white pixels are unchanged
     * - `INIT_IMAGE_ALPHA` will use the alpha channel of the init_image as the mask, where fully transparent pixels are completely replaced and fully opaque pixels are unchanged
     */
    maskSource: string;
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
     * Optional grayscale mask that allows for influence over which pixels are eligible for diffusion and at what strength. Must be the same dimensions as the `init_image`. Use the `mask_source` option to specify whether the white or black pixels should be inpainted.
     */
    maskImage?: MaskImage | Blob | undefined;
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
export declare const MaskingRequestBody$inboundSchema: z.ZodType<MaskingRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type MaskingRequestBody$Outbound = {
    init_image: InitImage$Outbound | Blob;
    mask_source: string;
    text_prompts: Array<TextPrompt$Outbound>;
    cfg_scale: number;
    clip_guidance_preset: string;
    extras?: Extras$Outbound | undefined;
    mask_image?: MaskImage$Outbound | Blob | undefined;
    sampler?: string | undefined;
    samples: number;
    seed: number;
    steps: number;
    style_preset?: string | undefined;
};
/** @internal */
export declare const MaskingRequestBody$outboundSchema: z.ZodType<MaskingRequestBody$Outbound, z.ZodTypeDef, MaskingRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MaskingRequestBody$ {
    /** @deprecated use `MaskingRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MaskingRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `MaskingRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MaskingRequestBody$Outbound, z.ZodTypeDef, MaskingRequestBody>;
    /** @deprecated use `MaskingRequestBody$Outbound` instead. */
    type Outbound = MaskingRequestBody$Outbound;
}
export declare function maskingRequestBodyToJSON(maskingRequestBody: MaskingRequestBody): string;
export declare function maskingRequestBodyFromJSON(jsonString: string): SafeParseResult<MaskingRequestBody, SDKValidationError>;
//# sourceMappingURL=maskingrequestbody.d.ts.map