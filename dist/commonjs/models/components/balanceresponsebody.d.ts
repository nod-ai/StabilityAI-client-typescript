import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type BalanceResponseBody = {
    /**
     * The balance of the account/organization associated with the API key
     */
    credits: number;
};
/** @internal */
export declare const BalanceResponseBody$inboundSchema: z.ZodType<BalanceResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type BalanceResponseBody$Outbound = {
    credits: number;
};
/** @internal */
export declare const BalanceResponseBody$outboundSchema: z.ZodType<BalanceResponseBody$Outbound, z.ZodTypeDef, BalanceResponseBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BalanceResponseBody$ {
    /** @deprecated use `BalanceResponseBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BalanceResponseBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `BalanceResponseBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BalanceResponseBody$Outbound, z.ZodTypeDef, BalanceResponseBody>;
    /** @deprecated use `BalanceResponseBody$Outbound` instead. */
    type Outbound = BalanceResponseBody$Outbound;
}
export declare function balanceResponseBodyToJSON(balanceResponseBody: BalanceResponseBody): string;
export declare function balanceResponseBodyFromJSON(jsonString: string): SafeParseResult<BalanceResponseBody, SDKValidationError>;
//# sourceMappingURL=balanceresponsebody.d.ts.map