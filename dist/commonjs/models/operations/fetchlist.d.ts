import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type FetchListRequest = {
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
export declare const FetchListRequest$inboundSchema: z.ZodType<FetchListRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type FetchListRequest$Outbound = {
    Organization?: string | undefined;
    "Stability-Client-ID"?: string | undefined;
    "Stability-Client-Version"?: string | undefined;
};
/** @internal */
export declare const FetchListRequest$outboundSchema: z.ZodType<FetchListRequest$Outbound, z.ZodTypeDef, FetchListRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FetchListRequest$ {
    /** @deprecated use `FetchListRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FetchListRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `FetchListRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FetchListRequest$Outbound, z.ZodTypeDef, FetchListRequest>;
    /** @deprecated use `FetchListRequest$Outbound` instead. */
    type Outbound = FetchListRequest$Outbound;
}
export declare function fetchListRequestToJSON(fetchListRequest: FetchListRequest): string;
export declare function fetchListRequestFromJSON(jsonString: string): SafeParseResult<FetchListRequest, SDKValidationError>;
//# sourceMappingURL=fetchlist.d.ts.map