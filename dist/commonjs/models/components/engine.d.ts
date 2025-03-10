import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The type of content this engine produces
 */
export declare const Type: {
    readonly Audio: "AUDIO";
    readonly Classification: "CLASSIFICATION";
    readonly Picture: "PICTURE";
    readonly Storage: "STORAGE";
    readonly Text: "TEXT";
    readonly Video: "VIDEO";
};
/**
 * The type of content this engine produces
 */
export type Type = ClosedEnum<typeof Type>;
export type Engine = {
    description: string;
    /**
     * Unique identifier for the engine
     */
    id: string;
    /**
     * Name of the engine
     */
    name: string;
    /**
     * The type of content this engine produces
     */
    type: Type;
};
/** @internal */
export declare const Type$inboundSchema: z.ZodNativeEnum<typeof Type>;
/** @internal */
export declare const Type$outboundSchema: z.ZodNativeEnum<typeof Type>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Type$ {
    /** @deprecated use `Type$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Audio: "AUDIO";
        readonly Classification: "CLASSIFICATION";
        readonly Picture: "PICTURE";
        readonly Storage: "STORAGE";
        readonly Text: "TEXT";
        readonly Video: "VIDEO";
    }>;
    /** @deprecated use `Type$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Audio: "AUDIO";
        readonly Classification: "CLASSIFICATION";
        readonly Picture: "PICTURE";
        readonly Storage: "STORAGE";
        readonly Text: "TEXT";
        readonly Video: "VIDEO";
    }>;
}
/** @internal */
export declare const Engine$inboundSchema: z.ZodType<Engine, z.ZodTypeDef, unknown>;
/** @internal */
export type Engine$Outbound = {
    description: string;
    id: string;
    name: string;
    type: string;
};
/** @internal */
export declare const Engine$outboundSchema: z.ZodType<Engine$Outbound, z.ZodTypeDef, Engine>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Engine$ {
    /** @deprecated use `Engine$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Engine, z.ZodTypeDef, unknown>;
    /** @deprecated use `Engine$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Engine$Outbound, z.ZodTypeDef, Engine>;
    /** @deprecated use `Engine$Outbound` instead. */
    type Outbound = Engine$Outbound;
}
export declare function engineToJSON(engine: Engine): string;
export declare function engineFromJSON(jsonString: string): SafeParseResult<Engine, SDKValidationError>;
//# sourceMappingURL=engine.d.ts.map