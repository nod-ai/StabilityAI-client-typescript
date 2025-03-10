import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
/**
 * Which sampler to use for the diffusion process. If this value is omitted we'll automatically select an appropriate sampler for you.
 */
export declare const Sampler: {
    readonly Ddim: "DDIM";
    readonly Ddpm: "DDPM";
    readonly KDpmpp2M: "K_DPMPP_2M";
    readonly KDpmpp2SAncestral: "K_DPMPP_2S_ANCESTRAL";
    readonly KDpm2: "K_DPM_2";
    readonly KDpm2Ancestral: "K_DPM_2_ANCESTRAL";
    readonly KEuler: "K_EULER";
    readonly KEulerAncestral: "K_EULER_ANCESTRAL";
    readonly KHeun: "K_HEUN";
    readonly KLms: "K_LMS";
};
/**
 * Which sampler to use for the diffusion process. If this value is omitted we'll automatically select an appropriate sampler for you.
 */
export type Sampler = ClosedEnum<typeof Sampler>;
/** @internal */
export declare const Sampler$inboundSchema: z.ZodNativeEnum<typeof Sampler>;
/** @internal */
export declare const Sampler$outboundSchema: z.ZodNativeEnum<typeof Sampler>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Sampler$ {
    /** @deprecated use `Sampler$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Ddim: "DDIM";
        readonly Ddpm: "DDPM";
        readonly KDpmpp2M: "K_DPMPP_2M";
        readonly KDpmpp2SAncestral: "K_DPMPP_2S_ANCESTRAL";
        readonly KDpm2: "K_DPM_2";
        readonly KDpm2Ancestral: "K_DPM_2_ANCESTRAL";
        readonly KEuler: "K_EULER";
        readonly KEulerAncestral: "K_EULER_ANCESTRAL";
        readonly KHeun: "K_HEUN";
        readonly KLms: "K_LMS";
    }>;
    /** @deprecated use `Sampler$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Ddim: "DDIM";
        readonly Ddpm: "DDPM";
        readonly KDpmpp2M: "K_DPMPP_2M";
        readonly KDpmpp2SAncestral: "K_DPMPP_2S_ANCESTRAL";
        readonly KDpm2: "K_DPM_2";
        readonly KDpm2Ancestral: "K_DPM_2_ANCESTRAL";
        readonly KEuler: "K_EULER";
        readonly KEulerAncestral: "K_EULER_ANCESTRAL";
        readonly KHeun: "K_HEUN";
        readonly KLms: "K_LMS";
    }>;
}
//# sourceMappingURL=sampler.d.ts.map