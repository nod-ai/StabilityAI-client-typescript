/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import * as components from "../components/index.js";
/** @internal */
export const GenerateFromImageWithTextRequest$inboundSchema = z.object({
    engine_id: z.string(),
    Organization: z.string().optional(),
    "Stability-Client-ID": z.string().optional(),
    "Stability-Client-Version": z.string().optional(),
    ImageToImageRequestBody: components.ImageToImageRequestBody$inboundSchema,
}).transform((v) => {
    return remap$(v, {
        "engine_id": "engineId",
        "Organization": "organization",
        "Stability-Client-ID": "stabilityClientID",
        "Stability-Client-Version": "stabilityClientVersion",
        "ImageToImageRequestBody": "imageToImageRequestBody",
    });
});
/** @internal */
export const GenerateFromImageWithTextRequest$outboundSchema = z.object({
    engineId: z.string(),
    organization: z.string().optional(),
    stabilityClientID: z.string().optional(),
    stabilityClientVersion: z.string().optional(),
    imageToImageRequestBody: components.ImageToImageRequestBody$outboundSchema,
}).transform((v) => {
    return remap$(v, {
        engineId: "engine_id",
        organization: "Organization",
        stabilityClientID: "Stability-Client-ID",
        stabilityClientVersion: "Stability-Client-Version",
        imageToImageRequestBody: "ImageToImageRequestBody",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export var GenerateFromImageWithTextRequest$;
(function (GenerateFromImageWithTextRequest$) {
    /** @deprecated use `GenerateFromImageWithTextRequest$inboundSchema` instead. */
    GenerateFromImageWithTextRequest$.inboundSchema = GenerateFromImageWithTextRequest$inboundSchema;
    /** @deprecated use `GenerateFromImageWithTextRequest$outboundSchema` instead. */
    GenerateFromImageWithTextRequest$.outboundSchema = GenerateFromImageWithTextRequest$outboundSchema;
})(GenerateFromImageWithTextRequest$ || (GenerateFromImageWithTextRequest$ = {}));
export function generateFromImageWithTextRequestToJSON(generateFromImageWithTextRequest) {
    return JSON.stringify(GenerateFromImageWithTextRequest$outboundSchema.parse(generateFromImageWithTextRequest));
}
export function generateFromImageWithTextRequestFromJSON(jsonString) {
    return safeParse(jsonString, (x) => GenerateFromImageWithTextRequest$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'GenerateFromImageWithTextRequest' from JSON`);
}
/** @internal */
export const GenerateFromImageWithTextResponseBody$inboundSchema = z.object({
    artifacts: z.array(components.Image$inboundSchema).optional(),
});
/** @internal */
export const GenerateFromImageWithTextResponseBody$outboundSchema = z.object({
    artifacts: z.array(components.Image$outboundSchema).optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export var GenerateFromImageWithTextResponseBody$;
(function (GenerateFromImageWithTextResponseBody$) {
    /** @deprecated use `GenerateFromImageWithTextResponseBody$inboundSchema` instead. */
    GenerateFromImageWithTextResponseBody$.inboundSchema = GenerateFromImageWithTextResponseBody$inboundSchema;
    /** @deprecated use `GenerateFromImageWithTextResponseBody$outboundSchema` instead. */
    GenerateFromImageWithTextResponseBody$.outboundSchema = GenerateFromImageWithTextResponseBody$outboundSchema;
})(GenerateFromImageWithTextResponseBody$ || (GenerateFromImageWithTextResponseBody$ = {}));
export function generateFromImageWithTextResponseBodyToJSON(generateFromImageWithTextResponseBody) {
    return JSON.stringify(GenerateFromImageWithTextResponseBody$outboundSchema.parse(generateFromImageWithTextResponseBody));
}
export function generateFromImageWithTextResponseBodyFromJSON(jsonString) {
    return safeParse(jsonString, (x) => GenerateFromImageWithTextResponseBody$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'GenerateFromImageWithTextResponseBody' from JSON`);
}
/** @internal */
export const GenerateFromImageWithTextResponseResult$inboundSchema = z.union([
    z.lazy(() => GenerateFromImageWithTextResponseBody$inboundSchema),
    z.instanceof((ReadableStream)),
]);
/** @internal */
export const GenerateFromImageWithTextResponseResult$outboundSchema = z.union([
    z.lazy(() => GenerateFromImageWithTextResponseBody$outboundSchema),
    z.instanceof((ReadableStream)),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export var GenerateFromImageWithTextResponseResult$;
(function (GenerateFromImageWithTextResponseResult$) {
    /** @deprecated use `GenerateFromImageWithTextResponseResult$inboundSchema` instead. */
    GenerateFromImageWithTextResponseResult$.inboundSchema = GenerateFromImageWithTextResponseResult$inboundSchema;
    /** @deprecated use `GenerateFromImageWithTextResponseResult$outboundSchema` instead. */
    GenerateFromImageWithTextResponseResult$.outboundSchema = GenerateFromImageWithTextResponseResult$outboundSchema;
})(GenerateFromImageWithTextResponseResult$ || (GenerateFromImageWithTextResponseResult$ = {}));
export function generateFromImageWithTextResponseResultToJSON(generateFromImageWithTextResponseResult) {
    return JSON.stringify(GenerateFromImageWithTextResponseResult$outboundSchema.parse(generateFromImageWithTextResponseResult));
}
export function generateFromImageWithTextResponseResultFromJSON(jsonString) {
    return safeParse(jsonString, (x) => GenerateFromImageWithTextResponseResult$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'GenerateFromImageWithTextResponseResult' from JSON`);
}
/** @internal */
export const GenerateFromImageWithTextResponse$inboundSchema = z.object({
    Headers: z.record(z.array(z.string())),
    Result: z.union([
        z.lazy(() => GenerateFromImageWithTextResponseBody$inboundSchema),
        z.instanceof((ReadableStream)),
    ]),
}).transform((v) => {
    return remap$(v, {
        "Headers": "headers",
        "Result": "result",
    });
});
/** @internal */
export const GenerateFromImageWithTextResponse$outboundSchema = z.object({
    headers: z.record(z.array(z.string())),
    result: z.union([
        z.lazy(() => GenerateFromImageWithTextResponseBody$outboundSchema),
        z.instanceof((ReadableStream)),
    ]),
}).transform((v) => {
    return remap$(v, {
        headers: "Headers",
        result: "Result",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export var GenerateFromImageWithTextResponse$;
(function (GenerateFromImageWithTextResponse$) {
    /** @deprecated use `GenerateFromImageWithTextResponse$inboundSchema` instead. */
    GenerateFromImageWithTextResponse$.inboundSchema = GenerateFromImageWithTextResponse$inboundSchema;
    /** @deprecated use `GenerateFromImageWithTextResponse$outboundSchema` instead. */
    GenerateFromImageWithTextResponse$.outboundSchema = GenerateFromImageWithTextResponse$outboundSchema;
})(GenerateFromImageWithTextResponse$ || (GenerateFromImageWithTextResponse$ = {}));
export function generateFromImageWithTextResponseToJSON(generateFromImageWithTextResponse) {
    return JSON.stringify(GenerateFromImageWithTextResponse$outboundSchema.parse(generateFromImageWithTextResponse));
}
export function generateFromImageWithTextResponseFromJSON(jsonString) {
    return safeParse(jsonString, (x) => GenerateFromImageWithTextResponse$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'GenerateFromImageWithTextResponse' from JSON`);
}
//# sourceMappingURL=generatefromimagewithtext.js.map