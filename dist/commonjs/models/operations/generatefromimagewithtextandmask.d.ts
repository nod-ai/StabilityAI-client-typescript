import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GenerateFromImageWithTextAndMaskRequest = {
    engineId: string;
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
    maskingRequestBody: components.MaskingRequestBody;
};
/**
 * An array of results from the generation request, where each image is a base64 encoded PNG.
 */
export type GenerateFromImageWithTextAndMaskResponseBody = {
    artifacts?: Array<components.Image> | undefined;
};
export type GenerateFromImageWithTextAndMaskResponseResult = GenerateFromImageWithTextAndMaskResponseBody | ReadableStream<Uint8Array>;
export type GenerateFromImageWithTextAndMaskResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: GenerateFromImageWithTextAndMaskResponseBody | ReadableStream<Uint8Array>;
};
/** @internal */
export declare const GenerateFromImageWithTextAndMaskRequest$inboundSchema: z.ZodType<GenerateFromImageWithTextAndMaskRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GenerateFromImageWithTextAndMaskRequest$Outbound = {
    engine_id: string;
    Organization?: string | undefined;
    "Stability-Client-ID"?: string | undefined;
    "Stability-Client-Version"?: string | undefined;
    MaskingRequestBody: components.MaskingRequestBody$Outbound;
};
/** @internal */
export declare const GenerateFromImageWithTextAndMaskRequest$outboundSchema: z.ZodType<GenerateFromImageWithTextAndMaskRequest$Outbound, z.ZodTypeDef, GenerateFromImageWithTextAndMaskRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GenerateFromImageWithTextAndMaskRequest$ {
    /** @deprecated use `GenerateFromImageWithTextAndMaskRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GenerateFromImageWithTextAndMaskRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GenerateFromImageWithTextAndMaskRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GenerateFromImageWithTextAndMaskRequest$Outbound, z.ZodTypeDef, GenerateFromImageWithTextAndMaskRequest>;
    /** @deprecated use `GenerateFromImageWithTextAndMaskRequest$Outbound` instead. */
    type Outbound = GenerateFromImageWithTextAndMaskRequest$Outbound;
}
export declare function generateFromImageWithTextAndMaskRequestToJSON(generateFromImageWithTextAndMaskRequest: GenerateFromImageWithTextAndMaskRequest): string;
export declare function generateFromImageWithTextAndMaskRequestFromJSON(jsonString: string): SafeParseResult<GenerateFromImageWithTextAndMaskRequest, SDKValidationError>;
/** @internal */
export declare const GenerateFromImageWithTextAndMaskResponseBody$inboundSchema: z.ZodType<GenerateFromImageWithTextAndMaskResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GenerateFromImageWithTextAndMaskResponseBody$Outbound = {
    artifacts?: Array<components.Image$Outbound> | undefined;
};
/** @internal */
export declare const GenerateFromImageWithTextAndMaskResponseBody$outboundSchema: z.ZodType<GenerateFromImageWithTextAndMaskResponseBody$Outbound, z.ZodTypeDef, GenerateFromImageWithTextAndMaskResponseBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GenerateFromImageWithTextAndMaskResponseBody$ {
    /** @deprecated use `GenerateFromImageWithTextAndMaskResponseBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GenerateFromImageWithTextAndMaskResponseBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `GenerateFromImageWithTextAndMaskResponseBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GenerateFromImageWithTextAndMaskResponseBody$Outbound, z.ZodTypeDef, GenerateFromImageWithTextAndMaskResponseBody>;
    /** @deprecated use `GenerateFromImageWithTextAndMaskResponseBody$Outbound` instead. */
    type Outbound = GenerateFromImageWithTextAndMaskResponseBody$Outbound;
}
export declare function generateFromImageWithTextAndMaskResponseBodyToJSON(generateFromImageWithTextAndMaskResponseBody: GenerateFromImageWithTextAndMaskResponseBody): string;
export declare function generateFromImageWithTextAndMaskResponseBodyFromJSON(jsonString: string): SafeParseResult<GenerateFromImageWithTextAndMaskResponseBody, SDKValidationError>;
/** @internal */
export declare const GenerateFromImageWithTextAndMaskResponseResult$inboundSchema: z.ZodType<GenerateFromImageWithTextAndMaskResponseResult, z.ZodTypeDef, unknown>;
/** @internal */
export type GenerateFromImageWithTextAndMaskResponseResult$Outbound = GenerateFromImageWithTextAndMaskResponseBody$Outbound | ReadableStream<Uint8Array>;
/** @internal */
export declare const GenerateFromImageWithTextAndMaskResponseResult$outboundSchema: z.ZodType<GenerateFromImageWithTextAndMaskResponseResult$Outbound, z.ZodTypeDef, GenerateFromImageWithTextAndMaskResponseResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GenerateFromImageWithTextAndMaskResponseResult$ {
    /** @deprecated use `GenerateFromImageWithTextAndMaskResponseResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GenerateFromImageWithTextAndMaskResponseResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `GenerateFromImageWithTextAndMaskResponseResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GenerateFromImageWithTextAndMaskResponseResult$Outbound, z.ZodTypeDef, GenerateFromImageWithTextAndMaskResponseResult>;
    /** @deprecated use `GenerateFromImageWithTextAndMaskResponseResult$Outbound` instead. */
    type Outbound = GenerateFromImageWithTextAndMaskResponseResult$Outbound;
}
export declare function generateFromImageWithTextAndMaskResponseResultToJSON(generateFromImageWithTextAndMaskResponseResult: GenerateFromImageWithTextAndMaskResponseResult): string;
export declare function generateFromImageWithTextAndMaskResponseResultFromJSON(jsonString: string): SafeParseResult<GenerateFromImageWithTextAndMaskResponseResult, SDKValidationError>;
/** @internal */
export declare const GenerateFromImageWithTextAndMaskResponse$inboundSchema: z.ZodType<GenerateFromImageWithTextAndMaskResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GenerateFromImageWithTextAndMaskResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: GenerateFromImageWithTextAndMaskResponseBody$Outbound | ReadableStream<Uint8Array>;
};
/** @internal */
export declare const GenerateFromImageWithTextAndMaskResponse$outboundSchema: z.ZodType<GenerateFromImageWithTextAndMaskResponse$Outbound, z.ZodTypeDef, GenerateFromImageWithTextAndMaskResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GenerateFromImageWithTextAndMaskResponse$ {
    /** @deprecated use `GenerateFromImageWithTextAndMaskResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GenerateFromImageWithTextAndMaskResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GenerateFromImageWithTextAndMaskResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GenerateFromImageWithTextAndMaskResponse$Outbound, z.ZodTypeDef, GenerateFromImageWithTextAndMaskResponse>;
    /** @deprecated use `GenerateFromImageWithTextAndMaskResponse$Outbound` instead. */
    type Outbound = GenerateFromImageWithTextAndMaskResponse$Outbound;
}
export declare function generateFromImageWithTextAndMaskResponseToJSON(generateFromImageWithTextAndMaskResponse: GenerateFromImageWithTextAndMaskResponse): string;
export declare function generateFromImageWithTextAndMaskResponseFromJSON(jsonString: string): SafeParseResult<GenerateFromImageWithTextAndMaskResponse, SDKValidationError>;
//# sourceMappingURL=generatefromimagewithtextandmask.d.ts.map