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
exports.Engine$ = exports.Engine$outboundSchema = exports.Engine$inboundSchema = exports.Type$ = exports.Type$outboundSchema = exports.Type$inboundSchema = exports.Type = void 0;
exports.engineToJSON = engineToJSON;
exports.engineFromJSON = engineFromJSON;
const z = __importStar(require("zod"));
const schemas_js_1 = require("../../lib/schemas.js");
/**
 * The type of content this engine produces
 */
exports.Type = {
    Audio: "AUDIO",
    Classification: "CLASSIFICATION",
    Picture: "PICTURE",
    Storage: "STORAGE",
    Text: "TEXT",
    Video: "VIDEO",
};
/** @internal */
exports.Type$inboundSchema = z.nativeEnum(exports.Type);
/** @internal */
exports.Type$outboundSchema = exports.Type$inboundSchema;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var Type$;
(function (Type$) {
    /** @deprecated use `Type$inboundSchema` instead. */
    Type$.inboundSchema = exports.Type$inboundSchema;
    /** @deprecated use `Type$outboundSchema` instead. */
    Type$.outboundSchema = exports.Type$outboundSchema;
})(Type$ || (exports.Type$ = Type$ = {}));
/** @internal */
exports.Engine$inboundSchema = z
    .object({
    description: z.string(),
    id: z.string(),
    name: z.string(),
    type: exports.Type$inboundSchema,
});
/** @internal */
exports.Engine$outboundSchema = z.object({
    description: z.string(),
    id: z.string(),
    name: z.string(),
    type: exports.Type$outboundSchema,
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var Engine$;
(function (Engine$) {
    /** @deprecated use `Engine$inboundSchema` instead. */
    Engine$.inboundSchema = exports.Engine$inboundSchema;
    /** @deprecated use `Engine$outboundSchema` instead. */
    Engine$.outboundSchema = exports.Engine$outboundSchema;
})(Engine$ || (exports.Engine$ = Engine$ = {}));
function engineToJSON(engine) {
    return JSON.stringify(exports.Engine$outboundSchema.parse(engine));
}
function engineFromJSON(jsonString) {
    return (0, schemas_js_1.safeParse)(jsonString, (x) => exports.Engine$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'Engine' from JSON`);
}
//# sourceMappingURL=engine.js.map