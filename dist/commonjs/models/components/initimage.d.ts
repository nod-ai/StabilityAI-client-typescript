import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type InitImage = {
    fileName: string;
    content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};
/** @internal */
export declare const InitImage$inboundSchema: z.ZodType<InitImage, z.ZodTypeDef, unknown>;
/** @internal */
export type InitImage$Outbound = {
    fileName: string;
    content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};
/** @internal */
export declare const InitImage$outboundSchema: z.ZodType<InitImage$Outbound, z.ZodTypeDef, InitImage>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InitImage$ {
    /** @deprecated use `InitImage$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InitImage, z.ZodTypeDef, unknown>;
    /** @deprecated use `InitImage$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InitImage$Outbound, z.ZodTypeDef, InitImage>;
    /** @deprecated use `InitImage$Outbound` instead. */
    type Outbound = InitImage$Outbound;
}
export declare function initImageToJSON(initImage: InitImage): string;
export declare function initImageFromJSON(jsonString: string): SafeParseResult<InitImage, SDKValidationError>;
//# sourceMappingURL=initimage.d.ts.map