/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type MaskImage = {
  fileName: string;
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};

/** @internal */
export const MaskImage$inboundSchema: z.ZodType<
  MaskImage,
  z.ZodTypeDef,
  unknown
> = z.object({
  fileName: z.string(),
  content: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]),
});

/** @internal */
export type MaskImage$Outbound = {
  fileName: string;
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};

/** @internal */
export const MaskImage$outboundSchema: z.ZodType<
  MaskImage$Outbound,
  z.ZodTypeDef,
  MaskImage
> = z.object({
  fileName: z.string(),
  content: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MaskImage$ {
  /** @deprecated use `MaskImage$inboundSchema` instead. */
  export const inboundSchema = MaskImage$inboundSchema;
  /** @deprecated use `MaskImage$outboundSchema` instead. */
  export const outboundSchema = MaskImage$outboundSchema;
  /** @deprecated use `MaskImage$Outbound` instead. */
  export type Outbound = MaskImage$Outbound;
}

export function maskImageToJSON(maskImage: MaskImage): string {
  return JSON.stringify(MaskImage$outboundSchema.parse(maskImage));
}

export function maskImageFromJSON(
  jsonString: string,
): SafeParseResult<MaskImage, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MaskImage$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MaskImage' from JSON`,
  );
}
