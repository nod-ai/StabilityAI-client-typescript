import * as z from "zod";
/**
 * bad_request: one or more parameters were invalid.
 */
export type ErrorTData = {
    /**
     * A unique identifier for this particular occurrence of the problem.
     */
    id: string;
    /**
     * The short-name of this class of errors e.g. `bad_request`.
     */
    name: string;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     */
    message: string;
};
/**
 * bad_request: one or more parameters were invalid.
 */
export declare class ErrorT extends Error {
    /**
     * A unique identifier for this particular occurrence of the problem.
     */
    id: string;
    /** The original data that was passed to this error instance. */
    data$: ErrorTData;
    constructor(err: ErrorTData);
}
/** @internal */
export declare const ErrorT$inboundSchema: z.ZodType<ErrorT, z.ZodTypeDef, unknown>;
/** @internal */
export type ErrorT$Outbound = {
    id: string;
    name: string;
    message: string;
};
/** @internal */
export declare const ErrorT$outboundSchema: z.ZodType<ErrorT$Outbound, z.ZodTypeDef, ErrorT>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ErrorT$ {
    /** @deprecated use `ErrorT$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ErrorT, z.ZodTypeDef, unknown>;
    /** @deprecated use `ErrorT$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ErrorT$Outbound, z.ZodTypeDef, ErrorT>;
    /** @deprecated use `ErrorT$Outbound` instead. */
    type Outbound = ErrorT$Outbound;
}
//# sourceMappingURL=error.d.ts.map