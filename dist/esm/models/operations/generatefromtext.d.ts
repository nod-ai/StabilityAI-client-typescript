import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GenerateFromTextRequest = {
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
    textToImageRequestBody: components.TextToImageRequestBody;
};
/**
 * An array of results from the generation request, where each image is a base64 encoded PNG.
 */
export type GenerateFromTextResponseBody = {
    artifacts?: Array<components.Image> | undefined;
};
export type GenerateFromTextResponseResult = GenerateFromTextResponseBody | ReadableStream<Uint8Array>;
export type GenerateFromTextResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: GenerateFromTextResponseBody | ReadableStream<Uint8Array>;
};
/** @internal */
export declare const GenerateFromTextRequest$inboundSchema: z.ZodType<GenerateFromTextRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GenerateFromTextRequest$Outbound = {
    engine_id: string;
    Organization?: string | undefined;
    "Stability-Client-ID"?: string | undefined;
    "Stability-Client-Version"?: string | undefined;
    TextToImageRequestBody: components.TextToImageRequestBody$Outbound;
};
/** @internal */
export declare const GenerateFromTextRequest$outboundSchema: z.ZodType<GenerateFromTextRequest$Outbound, z.ZodTypeDef, GenerateFromTextRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GenerateFromTextRequest$ {
    /** @deprecated use `GenerateFromTextRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GenerateFromTextRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GenerateFromTextRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GenerateFromTextRequest$Outbound, z.ZodTypeDef, GenerateFromTextRequest>;
    /** @deprecated use `GenerateFromTextRequest$Outbound` instead. */
    type Outbound = GenerateFromTextRequest$Outbound;
}
export declare function generateFromTextRequestToJSON(generateFromTextRequest: GenerateFromTextRequest): string;
export declare function generateFromTextRequestFromJSON(jsonString: string): SafeParseResult<GenerateFromTextRequest, SDKValidationError>;
/** @internal */
export declare const GenerateFromTextResponseBody$inboundSchema: z.ZodType<GenerateFromTextResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GenerateFromTextResponseBody$Outbound = {
    artifacts?: Array<components.Image$Outbound> | undefined;
};
/** @internal */
export declare const GenerateFromTextResponseBody$outboundSchema: z.ZodType<GenerateFromTextResponseBody$Outbound, z.ZodTypeDef, GenerateFromTextResponseBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GenerateFromTextResponseBody$ {
    /** @deprecated use `GenerateFromTextResponseBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GenerateFromTextResponseBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `GenerateFromTextResponseBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GenerateFromTextResponseBody$Outbound, z.ZodTypeDef, GenerateFromTextResponseBody>;
    /** @deprecated use `GenerateFromTextResponseBody$Outbound` instead. */
    type Outbound = GenerateFromTextResponseBody$Outbound;
}
export declare function generateFromTextResponseBodyToJSON(generateFromTextResponseBody: GenerateFromTextResponseBody): string;
export declare function generateFromTextResponseBodyFromJSON(jsonString: string): SafeParseResult<GenerateFromTextResponseBody, SDKValidationError>;
/** @internal */
export declare const GenerateFromTextResponseResult$inboundSchema: z.ZodType<GenerateFromTextResponseResult, z.ZodTypeDef, unknown>;
/** @internal */
export type GenerateFromTextResponseResult$Outbound = GenerateFromTextResponseBody$Outbound | ReadableStream<Uint8Array>;
/** @internal */
export declare const GenerateFromTextResponseResult$outboundSchema: z.ZodType<GenerateFromTextResponseResult$Outbound, z.ZodTypeDef, GenerateFromTextResponseResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GenerateFromTextResponseResult$ {
    /** @deprecated use `GenerateFromTextResponseResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GenerateFromTextResponseResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `GenerateFromTextResponseResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GenerateFromTextResponseResult$Outbound, z.ZodTypeDef, GenerateFromTextResponseResult>;
    /** @deprecated use `GenerateFromTextResponseResult$Outbound` instead. */
    type Outbound = GenerateFromTextResponseResult$Outbound;
}
export declare function generateFromTextResponseResultToJSON(generateFromTextResponseResult: GenerateFromTextResponseResult): string;
export declare function generateFromTextResponseResultFromJSON(jsonString: string): SafeParseResult<GenerateFromTextResponseResult, SDKValidationError>;
/** @internal */
export declare const GenerateFromTextResponse$inboundSchema: z.ZodType<GenerateFromTextResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GenerateFromTextResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: GenerateFromTextResponseBody$Outbound | ReadableStream<Uint8Array>;
};
/** @internal */
export declare const GenerateFromTextResponse$outboundSchema: z.ZodType<GenerateFromTextResponse$Outbound, z.ZodTypeDef, GenerateFromTextResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GenerateFromTextResponse$ {
    /** @deprecated use `GenerateFromTextResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GenerateFromTextResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GenerateFromTextResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GenerateFromTextResponse$Outbound, z.ZodTypeDef, GenerateFromTextResponse>;
    /** @deprecated use `GenerateFromTextResponse$Outbound` instead. */
    type Outbound = GenerateFromTextResponse$Outbound;
}
export declare function generateFromTextResponseToJSON(generateFromTextResponse: GenerateFromTextResponse): string;
export declare function generateFromTextResponseFromJSON(jsonString: string): SafeParseResult<GenerateFromTextResponse, SDKValidationError>;
//# sourceMappingURL=generatefromtext.d.ts.map