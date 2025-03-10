import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
/**
 * Whether to use `image_strength` or `step_schedule_*` to control how much influence the `init_image` has on the result.
 */
export declare const InitImageMode: {
    readonly ImageStrength: "IMAGE_STRENGTH";
    readonly StepSchedule: "STEP_SCHEDULE";
};
/**
 * Whether to use `image_strength` or `step_schedule_*` to control how much influence the `init_image` has on the result.
 */
export type InitImageMode = ClosedEnum<typeof InitImageMode>;
/** @internal */
export declare const InitImageMode$inboundSchema: z.ZodNativeEnum<typeof InitImageMode>;
/** @internal */
export declare const InitImageMode$outboundSchema: z.ZodNativeEnum<typeof InitImageMode>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InitImageMode$ {
    /** @deprecated use `InitImageMode$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly ImageStrength: "IMAGE_STRENGTH";
        readonly StepSchedule: "STEP_SCHEDULE";
    }>;
    /** @deprecated use `InitImageMode$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly ImageStrength: "IMAGE_STRENGTH";
        readonly StepSchedule: "STEP_SCHEDULE";
    }>;
}
//# sourceMappingURL=initimagemode.d.ts.map