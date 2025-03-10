import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type MaskImage = {
    fileName: string;
    content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};
/** @internal */
export declare const MaskImage$inboundSchema: z.ZodType<MaskImage, z.ZodTypeDef, unknown>;
/** @internal */
export type MaskImage$Outbound = {
    fileName: string;
    content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};
/** @internal */
export declare const MaskImage$outboundSchema: z.ZodType<MaskImage$Outbound, z.ZodTypeDef, MaskImage>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MaskImage$ {
    /** @deprecated use `MaskImage$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MaskImage, z.ZodTypeDef, unknown>;
    /** @deprecated use `MaskImage$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MaskImage$Outbound, z.ZodTypeDef, MaskImage>;
    /** @deprecated use `MaskImage$Outbound` instead. */
    type Outbound = MaskImage$Outbound;
}
export declare function maskImageToJSON(maskImage: MaskImage): string;
export declare function maskImageFromJSON(jsonString: string): SafeParseResult<MaskImage, SDKValidationError>;
//# sourceMappingURL=maskimage.d.ts.map