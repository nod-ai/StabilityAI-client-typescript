/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Which sampler to use for the diffusion process. If this value is omitted we'll automatically select an appropriate sampler for you.
 */
export const Sampler = {
  Ddim: "DDIM",
  Ddpm: "DDPM",
  KDpmpp2M: "K_DPMPP_2M",
  KDpmpp2SAncestral: "K_DPMPP_2S_ANCESTRAL",
  KDpm2: "K_DPM_2",
  KDpm2Ancestral: "K_DPM_2_ANCESTRAL",
  KEuler: "K_EULER",
  KEulerAncestral: "K_EULER_ANCESTRAL",
  KHeun: "K_HEUN",
  KLms: "K_LMS",
} as const;
/**
 * Which sampler to use for the diffusion process. If this value is omitted we'll automatically select an appropriate sampler for you.
 */
export type Sampler = ClosedEnum<typeof Sampler>;

/** @internal */
export const Sampler$inboundSchema: z.ZodNativeEnum<typeof Sampler> = z
  .nativeEnum(Sampler);

/** @internal */
export const Sampler$outboundSchema: z.ZodNativeEnum<typeof Sampler> =
  Sampler$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Sampler$ {
  /** @deprecated use `Sampler$inboundSchema` instead. */
  export const inboundSchema = Sampler$inboundSchema;
  /** @deprecated use `Sampler$outboundSchema` instead. */
  export const outboundSchema = Sampler$outboundSchema;
}
