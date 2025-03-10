import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Text prompt for image generation
 */
export type TextPrompt = {
    /**
     * The prompt itself
     */
    text: string;
    /**
     * Weight of the prompt (use negative numbers for negative prompts)
     */
    weight?: number | undefined;
};
/** @internal */
export declare const TextPrompt$inboundSchema: z.ZodType<TextPrompt, z.ZodTypeDef, unknown>;
/** @internal */
export type TextPrompt$Outbound = {
    text: string;
    weight?: number | undefined;
};
/** @internal */
export declare const TextPrompt$outboundSchema: z.ZodType<TextPrompt$Outbound, z.ZodTypeDef, TextPrompt>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TextPrompt$ {
    /** @deprecated use `TextPrompt$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TextPrompt, z.ZodTypeDef, unknown>;
    /** @deprecated use `TextPrompt$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TextPrompt$Outbound, z.ZodTypeDef, TextPrompt>;
    /** @deprecated use `TextPrompt$Outbound` instead. */
    type Outbound = TextPrompt$Outbound;
}
export declare function textPromptToJSON(textPrompt: TextPrompt): string;
export declare function textPromptFromJSON(jsonString: string): SafeParseResult<TextPrompt, SDKValidationError>;
//# sourceMappingURL=textprompt.d.ts.map