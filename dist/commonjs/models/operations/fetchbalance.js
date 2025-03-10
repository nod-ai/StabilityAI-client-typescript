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
exports.FetchBalanceRequest$ = exports.FetchBalanceRequest$outboundSchema = exports.FetchBalanceRequest$inboundSchema = void 0;
exports.fetchBalanceRequestToJSON = fetchBalanceRequestToJSON;
exports.fetchBalanceRequestFromJSON = fetchBalanceRequestFromJSON;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const schemas_js_1 = require("../../lib/schemas.js");
/** @internal */
exports.FetchBalanceRequest$inboundSchema = z.object({
    Organization: z.string().optional(),
    "Stability-Client-ID": z.string().optional(),
    "Stability-Client-Version": z.string().optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "Organization": "organization",
        "Stability-Client-ID": "stabilityClientID",
        "Stability-Client-Version": "stabilityClientVersion",
    });
});
/** @internal */
exports.FetchBalanceRequest$outboundSchema = z.object({
    organization: z.string().optional(),
    stabilityClientID: z.string().optional(),
    stabilityClientVersion: z.string().optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        organization: "Organization",
        stabilityClientID: "Stability-Client-ID",
        stabilityClientVersion: "Stability-Client-Version",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var FetchBalanceRequest$;
(function (FetchBalanceRequest$) {
    /** @deprecated use `FetchBalanceRequest$inboundSchema` instead. */
    FetchBalanceRequest$.inboundSchema = exports.FetchBalanceRequest$inboundSchema;
    /** @deprecated use `FetchBalanceRequest$outboundSchema` instead. */
    FetchBalanceRequest$.outboundSchema = exports.FetchBalanceRequest$outboundSchema;
})(FetchBalanceRequest$ || (exports.FetchBalanceRequest$ = FetchBalanceRequest$ = {}));
function fetchBalanceRequestToJSON(fetchBalanceRequest) {
    return JSON.stringify(exports.FetchBalanceRequest$outboundSchema.parse(fetchBalanceRequest));
}
function fetchBalanceRequestFromJSON(jsonString) {
    return (0, schemas_js_1.safeParse)(jsonString, (x) => exports.FetchBalanceRequest$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'FetchBalanceRequest' from JSON`);
}
//# sourceMappingURL=fetchbalance.js.map