/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
import * as z from "zod";
import { encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as components from "../models/components/index.js";
import * as errors from "../models/errors/index.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
/**
 * List engines
 *
 * @remarks
 * List all engines available to your organization/user
 */
export function version1EnginesFetchList(client, request, options) {
    return new APIPromise($do(client, request, options));
}
async function $do(client, request, options) {
    const parsed = safeParse(request, (value) => operations.FetchListRequest$outboundSchema.parse(value), "Input validation failed");
    if (!parsed.ok) {
        return [parsed, { status: "invalid" }];
    }
    const payload = parsed.value;
    const body = null;
    const path = pathToFunc("/v1/engines/list")();
    const headers = new Headers(compactMap({
        Accept: "application/json",
        "Organization": encodeSimple("Organization", payload.Organization, {
            explode: false,
            charEncoding: "none",
        }),
        "Stability-Client-ID": encodeSimple("Stability-Client-ID", payload["Stability-Client-ID"], { explode: false, charEncoding: "none" }),
        "Stability-Client-Version": encodeSimple("Stability-Client-Version", payload["Stability-Client-Version"], { explode: false, charEncoding: "none" }),
    }));
    const secConfig = await extractSecurity(client._options.stabilityApiKey);
    const securityInput = secConfig == null ? {} : { stabilityApiKey: secConfig };
    const requestSecurity = resolveGlobalSecurity(securityInput);
    const context = {
        baseURL: options?.serverURL ?? client._baseURL ?? "",
        operationID: "fetchList",
        oAuth2Scopes: [],
        resolvedSecurity: requestSecurity,
        securitySource: client._options.stabilityApiKey,
        retryConfig: options?.retries
            || client._options.retryConfig
            || { strategy: "none" },
        retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
    };
    const requestRes = client._createRequest(context, {
        security: requestSecurity,
        method: "GET",
        baseURL: options?.serverURL,
        path: path,
        headers: headers,
        body: body,
        timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
    }, options);
    if (!requestRes.ok) {
        return [requestRes, { status: "invalid" }];
    }
    const req = requestRes.value;
    const doResult = await client._do(req, {
        context,
        errorCodes: ["401", "4XX", "500", "5XX"],
        retryConfig: context.retryConfig,
        retryCodes: context.retryCodes,
    });
    if (!doResult.ok) {
        return [doResult, { status: "request-error", request: req }];
    }
    const response = doResult.value;
    const responseFields = {
        HttpMeta: { Response: response, Request: req },
    };
    const [result] = await M.match(M.json(200, z.array(components.Engine$inboundSchema)), M.jsonErr(401, errors.ErrorT$inboundSchema), M.jsonErr(500, errors.ErrorT$inboundSchema), M.fail("4XX"), M.fail("5XX"))(response, { extraFields: responseFields });
    if (!result.ok) {
        return [result, { status: "complete", request: req, response }];
    }
    return [result, { status: "complete", request: req, response }];
}
//# sourceMappingURL=version1EnginesFetchList.js.map