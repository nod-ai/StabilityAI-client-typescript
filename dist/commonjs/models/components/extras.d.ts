import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Extra parameters passed to the engine.
 *
 * @remarks
 * These parameters are used for in-development or experimental features and may change
 * without warning, so please use with caution.
 */
export type Extras = {};
/** @internal */
export declare const Extras$inboundSchema: z.ZodType<Extras, z.ZodTypeDef, unknown>;
/** @internal */
export type Extras$Outbound = {};
/** @internal */
export declare const Extras$outboundSchema: z.ZodType<Extras$Outbound, z.ZodTypeDef, Extras>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Extras$ {
    /** @deprecated use `Extras$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Extras, z.ZodTypeDef, unknown>;
    /** @deprecated use `Extras$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Extras$Outbound, z.ZodTypeDef, Extras>;
    /** @deprecated use `Extras$Outbound` instead. */
    type Outbound = Extras$Outbound;
}
export declare function extrasToJSON(extras: Extras): string;
export declare function extrasFromJSON(jsonString: string): SafeParseResult<Extras, SDKValidationError>;
//# sourceMappingURL=extras.d.ts.map