import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
export declare const ClipGuidancePreset: {
    readonly FastBlue: "FAST_BLUE";
    readonly FastGreen: "FAST_GREEN";
    readonly None: "NONE";
    readonly Simple: "SIMPLE";
    readonly Slow: "SLOW";
    readonly Slower: "SLOWER";
    readonly Slowest: "SLOWEST";
};
export type ClipGuidancePreset = ClosedEnum<typeof ClipGuidancePreset>;
/** @internal */
export declare const ClipGuidancePreset$inboundSchema: z.ZodNativeEnum<typeof ClipGuidancePreset>;
/** @internal */
export declare const ClipGuidancePreset$outboundSchema: z.ZodNativeEnum<typeof ClipGuidancePreset>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ClipGuidancePreset$ {
    /** @deprecated use `ClipGuidancePreset$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly FastBlue: "FAST_BLUE";
        readonly FastGreen: "FAST_GREEN";
        readonly None: "NONE";
        readonly Simple: "SIMPLE";
        readonly Slow: "SLOW";
        readonly Slower: "SLOWER";
        readonly Slowest: "SLOWEST";
    }>;
    /** @deprecated use `ClipGuidancePreset$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly FastBlue: "FAST_BLUE";
        readonly FastGreen: "FAST_GREEN";
        readonly None: "NONE";
        readonly Simple: "SIMPLE";
        readonly Slow: "SLOW";
        readonly Slower: "SLOWER";
        readonly Slowest: "SLOWEST";
    }>;
}
//# sourceMappingURL=clipguidancepreset.d.ts.map