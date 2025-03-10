import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type FetchBalanceRequest = {
    /**
     * Allows for requests to be scoped to an organization other than the user's default.  If not provided, the user's default organization will be used.
     */
    organization?: string | undefined;
    /**
     * Used to identify the source of requests, such as the client application or sub-organization. Optional, but recommended for organizational clarity.
     */
    stabilityClientID?: string | undefined;
    /**
     * Used to identify the version of the application or service making the requests. Optional, but recommended for organizational clarity.
     */
    stabilityClientVersion?: string | undefined;
};
/** @internal */
export declare const FetchBalanceRequest$inboundSchema: z.ZodType<FetchBalanceRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type FetchBalanceRequest$Outbound = {
    Organization?: string | undefined;
    "Stability-Client-ID"?: string | undefined;
    "Stability-Client-Version"?: string | undefined;
};
/** @internal */
export declare const FetchBalanceRequest$outboundSchema: z.ZodType<FetchBalanceRequest$Outbound, z.ZodTypeDef, FetchBalanceRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FetchBalanceRequest$ {
    /** @deprecated use `FetchBalanceRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FetchBalanceRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `FetchBalanceRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FetchBalanceRequest$Outbound, z.ZodTypeDef, FetchBalanceRequest>;
    /** @deprecated use `FetchBalanceRequest$Outbound` instead. */
    type Outbound = FetchBalanceRequest$Outbound;
}
export declare function fetchBalanceRequestToJSON(fetchBalanceRequest: FetchBalanceRequest): string;
export declare function fetchBalanceRequestFromJSON(jsonString: string): SafeParseResult<FetchBalanceRequest, SDKValidationError>;
//# sourceMappingURL=fetchbalance.d.ts.map