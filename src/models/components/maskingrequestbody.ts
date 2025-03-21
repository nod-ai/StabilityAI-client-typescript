/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { blobLikeSchema } from "../../types/blobs.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ClipGuidancePreset,
  ClipGuidancePreset$inboundSchema,
  ClipGuidancePreset$outboundSchema,
} from "./clipguidancepreset.js";
import {
  Extras,
  Extras$inboundSchema,
  Extras$Outbound,
  Extras$outboundSchema,
} from "./extras.js";
import {
  InitImage,
  InitImage$inboundSchema,
  InitImage$Outbound,
  InitImage$outboundSchema,
} from "./initimage.js";
import {
  MaskImage,
  MaskImage$inboundSchema,
  MaskImage$Outbound,
  MaskImage$outboundSchema,
} from "./maskimage.js";
import {
  Sampler,
  Sampler$inboundSchema,
  Sampler$outboundSchema,
} from "./sampler.js";
import {
  StylePreset,
  StylePreset$inboundSchema,
  StylePreset$outboundSchema,
} from "./stylepreset.js";
import {
  TextPrompt,
  TextPrompt$inboundSchema,
  TextPrompt$Outbound,
  TextPrompt$outboundSchema,
} from "./textprompt.js";

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
export const MaskingRequestBody$inboundSchema: z.ZodType<
  MaskingRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  init_image: InitImage$inboundSchema,
  mask_source: z.string(),
  text_prompts: z.array(TextPrompt$inboundSchema),
  cfg_scale: z.number().default(7),
  clip_guidance_preset: ClipGuidancePreset$inboundSchema.default("NONE"),
  extras: Extras$inboundSchema.optional(),
  mask_image: MaskImage$inboundSchema.optional(),
  sampler: Sampler$inboundSchema.optional(),
  samples: z.number().int().default(1),
  seed: z.number().int().default(0),
  steps: z.number().int().default(30),
  style_preset: StylePreset$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "init_image": "initImage",
    "mask_source": "maskSource",
    "text_prompts": "textPrompts",
    "cfg_scale": "cfgScale",
    "clip_guidance_preset": "clipGuidancePreset",
    "mask_image": "maskImage",
    "style_preset": "stylePreset",
  });
});

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
export const MaskingRequestBody$outboundSchema: z.ZodType<
  MaskingRequestBody$Outbound,
  z.ZodTypeDef,
  MaskingRequestBody
> = z.object({
  initImage: InitImage$outboundSchema.or(blobLikeSchema),
  maskSource: z.string(),
  textPrompts: z.array(TextPrompt$outboundSchema),
  cfgScale: z.number().default(7),
  clipGuidancePreset: ClipGuidancePreset$outboundSchema.default("NONE"),
  extras: Extras$outboundSchema.optional(),
  maskImage: MaskImage$outboundSchema.or(blobLikeSchema).optional(),
  sampler: Sampler$outboundSchema.optional(),
  samples: z.number().int().default(1),
  seed: z.number().int().default(0),
  steps: z.number().int().default(30),
  stylePreset: StylePreset$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    initImage: "init_image",
    maskSource: "mask_source",
    textPrompts: "text_prompts",
    cfgScale: "cfg_scale",
    clipGuidancePreset: "clip_guidance_preset",
    maskImage: "mask_image",
    stylePreset: "style_preset",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MaskingRequestBody$ {
  /** @deprecated use `MaskingRequestBody$inboundSchema` instead. */
  export const inboundSchema = MaskingRequestBody$inboundSchema;
  /** @deprecated use `MaskingRequestBody$outboundSchema` instead. */
  export const outboundSchema = MaskingRequestBody$outboundSchema;
  /** @deprecated use `MaskingRequestBody$Outbound` instead. */
  export type Outbound = MaskingRequestBody$Outbound;
}

export function maskingRequestBodyToJSON(
  maskingRequestBody: MaskingRequestBody,
): string {
  return JSON.stringify(
    MaskingRequestBody$outboundSchema.parse(maskingRequestBody),
  );
}

export function maskingRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<MaskingRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MaskingRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MaskingRequestBody' from JSON`,
  );
}
