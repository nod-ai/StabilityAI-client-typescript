"use strict";
/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image$ = exports.Image$outboundSchema = exports.Image$inboundSchema = exports.FinishReason$ = exports.FinishReason$outboundSchema = exports.FinishReason$inboundSchema = exports.FinishReason = void 0;
exports.imageToJSON = imageToJSON;
exports.imageFromJSON = imageFromJSON;
const z = __importStar(require("zod"));
const schemas_js_1 = require("../../lib/schemas.js");
exports.FinishReason = {
    Success: "SUCCESS",
    Error: "ERROR",
    ContentFiltered: "CONTENT_FILTERED",
};
/** @internal */
exports.FinishReason$inboundSchema = z.nativeEnum(exports.FinishReason);
/** @internal */
exports.FinishReason$outboundSchema = exports.FinishReason$inboundSchema;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var FinishReason$;
(function (FinishReason$) {
    /** @deprecated use `FinishReason$inboundSchema` instead. */
    FinishReason$.inboundSchema = exports.FinishReason$inboundSchema;
    /** @deprecated use `FinishReason$outboundSchema` instead. */
    FinishReason$.outboundSchema = exports.FinishReason$outboundSchema;
})(FinishReason$ || (exports.FinishReason$ = FinishReason$ = {}));
/** @internal */
exports.Image$inboundSchema = z
    .object({
    base64: z.string().optional(),
    finishReason: exports.FinishReason$inboundSchema.optional(),
    seed: z.number().optional(),
});
/** @internal */
exports.Image$outboundSchema = z.object({
    base64: z.string().optional(),
    finishReason: exports.FinishReason$outboundSchema.optional(),
    seed: z.number().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var Image$;
(function (Image$) {
    /** @deprecated use `Image$inboundSchema` instead. */
    Image$.inboundSchema = exports.Image$inboundSchema;
    /** @deprecated use `Image$outboundSchema` instead. */
    Image$.outboundSchema = exports.Image$outboundSchema;
})(Image$ || (exports.Image$ = Image$ = {}));
function imageToJSON(image) {
    return JSON.stringify(exports.Image$outboundSchema.parse(image));
}
function imageFromJSON(jsonString) {
    return (0, schemas_js_1.safeParse)(jsonString, (x) => exports.Image$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'Image' from JSON`);
}
//# sourceMappingURL=image.js.map