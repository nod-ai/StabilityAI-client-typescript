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
exports.BalanceResponseBody$ = exports.BalanceResponseBody$outboundSchema = exports.BalanceResponseBody$inboundSchema = void 0;
exports.balanceResponseBodyToJSON = balanceResponseBodyToJSON;
exports.balanceResponseBodyFromJSON = balanceResponseBodyFromJSON;
const z = __importStar(require("zod"));
const schemas_js_1 = require("../../lib/schemas.js");
/** @internal */
exports.BalanceResponseBody$inboundSchema = z.object({
    credits: z.number(),
});
/** @internal */
exports.BalanceResponseBody$outboundSchema = z.object({
    credits: z.number(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var BalanceResponseBody$;
(function (BalanceResponseBody$) {
    /** @deprecated use `BalanceResponseBody$inboundSchema` instead. */
    BalanceResponseBody$.inboundSchema = exports.BalanceResponseBody$inboundSchema;
    /** @deprecated use `BalanceResponseBody$outboundSchema` instead. */
    BalanceResponseBody$.outboundSchema = exports.BalanceResponseBody$outboundSchema;
})(BalanceResponseBody$ || (exports.BalanceResponseBody$ = BalanceResponseBody$ = {}));
function balanceResponseBodyToJSON(balanceResponseBody) {
    return JSON.stringify(exports.BalanceResponseBody$outboundSchema.parse(balanceResponseBody));
}
function balanceResponseBodyFromJSON(jsonString) {
    return (0, schemas_js_1.safeParse)(jsonString, (x) => exports.BalanceResponseBody$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'BalanceResponseBody' from JSON`);
}
//# sourceMappingURL=balanceresponsebody.js.map