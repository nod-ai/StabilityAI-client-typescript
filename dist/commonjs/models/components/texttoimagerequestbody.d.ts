import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ClipGuidancePreset } from "./clipguidancepreset.js";
import { Extras, Extras$Outbound } from "./extras.js";
import { Sampler } from "./sampler.js";
import { StylePreset } from "./stylepreset.js";
import { TextPrompt, TextPrompt$Outbound } from "./textprompt.js";
/**
 * Represents the optional parameters that can be passed to any generation request.
 */
export type TextToImageRequestBody = {
    /**
     * Height of the image to generate, in pixels, in an increment divisible by 64.
     */
    height?: number | undefined;
    /**
     * Width of the image to generate, in pixels, in an increment divisible by 64.
     */
    width?: number | undefined;
    /**
     * An array of text prompts to use for generation.
     *
     * @remarks
     *
     * Given a text prompt with the text `A lighthouse on a cliff` and a weight of `0.5`, it would be represented as:
     *
     * ```
     * "text_prompts": [
     *   {
     *     "text": "A lighthouse on a cliff",
     *     "weight": 0.5
     *   }
     * ]
     * ```
     */
    textPrompts: Array<TextPrompt>;
    /**
     * How strictly the diffusion process adheres to the prompt text (higher values keep your image closer to your prompt)
     */
    cfgScale?: number | undefined;
    clipGuidancePreset?: ClipGuidancePreset | undefined;
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
    /**
     * Extra parameters passed to the engine.
     *
     * @remarks
     * These parameters are used for in-development or experimental features and may change
     * without warning, so please use with caution.
     */
    extras?: Extras | undefined;
};
/** @internal */
export declare const TextToImageRequestBody$inboundSchema: z.ZodType<TextToImageRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type TextToImageRequestBody$Outbound = {
    height: number;
    width: number;
    text_prompts: Array<TextPrompt$Outbound>;
    cfg_scale: number;
    clip_guidance_preset: string;
    sampler?: string | undefined;
    samples: number;
    seed: number;
    steps: number;
    style_preset?: string | undefined;
    extras?: Extras$Outbound | undefined;
};
/** @internal */
export declare const TextToImageRequestBody$outboundSchema: z.ZodType<TextToImageRequestBody$Outbound, z.ZodTypeDef, TextToImageRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TextToImageRequestBody$ {
    /** @deprecated use `TextToImageRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TextToImageRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `TextToImageRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TextToImageRequestBody$Outbound, z.ZodTypeDef, TextToImageRequestBody>;
    /** @deprecated use `TextToImageRequestBody$Outbound` instead. */
    type Outbound = TextToImageRequestBody$Outbound;
}
export declare function textToImageRequestBodyToJSON(textToImageRequestBody: TextToImageRequestBody): string;
export declare function textToImageRequestBodyFromJSON(jsonString: string): SafeParseResult<TextToImageRequestBody, SDKValidationError>;
//# sourceMappingURL=texttoimagerequestbody.d.ts.map