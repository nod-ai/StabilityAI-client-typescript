import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GenerateFromImageWithTextRequest = {
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
    imageToImageRequestBody: components.ImageToImageRequestBody;
};
/**
 * An array of results from the generation request, where each image is a base64 encoded PNG.
 */
export type GenerateFromImageWithTextResponseBody = {
    artifacts?: Array<components.Image> | undefined;
};
export type GenerateFromImageWithTextResponseResult = GenerateFromImageWithTextResponseBody | ReadableStream<Uint8Array>;
export type GenerateFromImageWithTextResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: GenerateFromImageWithTextResponseBody | ReadableStream<Uint8Array>;
};
/** @internal */
export declare const GenerateFromImageWithTextRequest$inboundSchema: z.ZodType<GenerateFromImageWithTextRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GenerateFromImageWithTextRequest$Outbound = {
    engine_id: string;
    Organization?: string | undefined;
    "Stability-Client-ID"?: string | undefined;
    "Stability-Client-Version"?: string | undefined;
    ImageToImageRequestBody: components.ImageToImageRequestBody$Outbound;
};
/** @internal */
export declare const GenerateFromImageWithTextRequest$outboundSchema: z.ZodType<GenerateFromImageWithTextRequest$Outbound, z.ZodTypeDef, GenerateFromImageWithTextRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GenerateFromImageWithTextRequest$ {
    /** @deprecated use `GenerateFromImageWithTextRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GenerateFromImageWithTextRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GenerateFromImageWithTextRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GenerateFromImageWithTextRequest$Outbound, z.ZodTypeDef, GenerateFromImageWithTextRequest>;
    /** @deprecated use `GenerateFromImageWithTextRequest$Outbound` instead. */
    type Outbound = GenerateFromImageWithTextRequest$Outbound;
}
export declare function generateFromImageWithTextRequestToJSON(generateFromImageWithTextRequest: GenerateFromImageWithTextRequest): string;
export declare function generateFromImageWithTextRequestFromJSON(jsonString: string): SafeParseResult<GenerateFromImageWithTextRequest, SDKValidationError>;
/** @internal */
export declare const GenerateFromImageWithTextResponseBody$inboundSchema: z.ZodType<GenerateFromImageWithTextResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GenerateFromImageWithTextResponseBody$Outbound = {
    artifacts?: Array<components.Image$Outbound> | undefined;
};
/** @internal */
export declare const GenerateFromImageWithTextResponseBody$outboundSchema: z.ZodType<GenerateFromImageWithTextResponseBody$Outbound, z.ZodTypeDef, GenerateFromImageWithTextResponseBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GenerateFromImageWithTextResponseBody$ {
    /** @deprecated use `GenerateFromImageWithTextResponseBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GenerateFromImageWithTextResponseBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `GenerateFromImageWithTextResponseBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GenerateFromImageWithTextResponseBody$Outbound, z.ZodTypeDef, GenerateFromImageWithTextResponseBody>;
    /** @deprecated use `GenerateFromImageWithTextResponseBody$Outbound` instead. */
    type Outbound = GenerateFromImageWithTextResponseBody$Outbound;
}
export declare function generateFromImageWithTextResponseBodyToJSON(generateFromImageWithTextResponseBody: GenerateFromImageWithTextResponseBody): string;
export declare function generateFromImageWithTextResponseBodyFromJSON(jsonString: string): SafeParseResult<GenerateFromImageWithTextResponseBody, SDKValidationError>;
/** @internal */
export declare const GenerateFromImageWithTextResponseResult$inboundSchema: z.ZodType<GenerateFromImageWithTextResponseResult, z.ZodTypeDef, unknown>;
/** @internal */
export type GenerateFromImageWithTextResponseResult$Outbound = GenerateFromImageWithTextResponseBody$Outbound | ReadableStream<Uint8Array>;
/** @internal */
export declare const GenerateFromImageWithTextResponseResult$outboundSchema: z.ZodType<GenerateFromImageWithTextResponseResult$Outbound, z.ZodTypeDef, GenerateFromImageWithTextResponseResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GenerateFromImageWithTextResponseResult$ {
    /** @deprecated use `GenerateFromImageWithTextResponseResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GenerateFromImageWithTextResponseResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `GenerateFromImageWithTextResponseResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GenerateFromImageWithTextResponseResult$Outbound, z.ZodTypeDef, GenerateFromImageWithTextResponseResult>;
    /** @deprecated use `GenerateFromImageWithTextResponseResult$Outbound` instead. */
    type Outbound = GenerateFromImageWithTextResponseResult$Outbound;
}
export declare function generateFromImageWithTextResponseResultToJSON(generateFromImageWithTextResponseResult: GenerateFromImageWithTextResponseResult): string;
export declare function generateFromImageWithTextResponseResultFromJSON(jsonString: string): SafeParseResult<GenerateFromImageWithTextResponseResult, SDKValidationError>;
/** @internal */
export declare const GenerateFromImageWithTextResponse$inboundSchema: z.ZodType<GenerateFromImageWithTextResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GenerateFromImageWithTextResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: GenerateFromImageWithTextResponseBody$Outbound | ReadableStream<Uint8Array>;
};
/** @internal */
export declare const GenerateFromImageWithTextResponse$outboundSchema: z.ZodType<GenerateFromImageWithTextResponse$Outbound, z.ZodTypeDef, GenerateFromImageWithTextResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GenerateFromImageWithTextResponse$ {
    /** @deprecated use `GenerateFromImageWithTextResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GenerateFromImageWithTextResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GenerateFromImageWithTextResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GenerateFromImageWithTextResponse$Outbound, z.ZodTypeDef, GenerateFromImageWithTextResponse>;
    /** @deprecated use `GenerateFromImageWithTextResponse$Outbound` instead. */
    type Outbound = GenerateFromImageWithTextResponse$Outbound;
}
export declare function generateFromImageWithTextResponseToJSON(generateFromImageWithTextResponse: GenerateFromImageWithTextResponse): string;
export declare function generateFromImageWithTextResponseFromJSON(jsonString: string): SafeParseResult<GenerateFromImageWithTextResponse, SDKValidationError>;
//# sourceMappingURL=generatefromimagewithtext.d.ts.map