import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const FinishReason: {
    readonly Success: "SUCCESS";
    readonly Error: "ERROR";
    readonly ContentFiltered: "CONTENT_FILTERED";
};
export type FinishReason = ClosedEnum<typeof FinishReason>;
export type Image = {
    /**
     * Image encoded in base64
     */
    base64?: string | undefined;
    finishReason?: FinishReason | undefined;
    /**
     * The seed associated with this image
     */
    seed?: number | undefined;
};
/** @internal */
export declare const FinishReason$inboundSchema: z.ZodNativeEnum<typeof FinishReason>;
/** @internal */
export declare const FinishReason$outboundSchema: z.ZodNativeEnum<typeof FinishReason>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FinishReason$ {
    /** @deprecated use `FinishReason$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Success: "SUCCESS";
        readonly Error: "ERROR";
        readonly ContentFiltered: "CONTENT_FILTERED";
    }>;
    /** @deprecated use `FinishReason$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Success: "SUCCESS";
        readonly Error: "ERROR";
        readonly ContentFiltered: "CONTENT_FILTERED";
    }>;
}
/** @internal */
export declare const Image$inboundSchema: z.ZodType<Image, z.ZodTypeDef, unknown>;
/** @internal */
export type Image$Outbound = {
    base64?: string | undefined;
    finishReason?: string | undefined;
    seed?: number | undefined;
};
/** @internal */
export declare const Image$outboundSchema: z.ZodType<Image$Outbound, z.ZodTypeDef, Image>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Image$ {
    /** @deprecated use `Image$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Image, z.ZodTypeDef, unknown>;
    /** @deprecated use `Image$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Image$Outbound, z.ZodTypeDef, Image>;
    /** @deprecated use `Image$Outbound` instead. */
    type Outbound = Image$Outbound;
}
export declare function imageToJSON(image: Image): string;
export declare function imageFromJSON(jsonString: string): SafeParseResult<Image, SDKValidationError>;
//# sourceMappingURL=image.d.ts.map