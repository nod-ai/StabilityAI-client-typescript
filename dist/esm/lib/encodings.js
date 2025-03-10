/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
import { bytesToBase64 } from "./base64.js";
import { isPlainObject } from "./is-plain-object.js";
export class EncodingError extends Error {
    constructor(message) {
        super(message);
        this.name = "EncodingError";
    }
}
export function encodeMatrix(key, value, options) {
    let out = "";
    const pairs = options?.explode
        ? explode(key, value)
        : [[key, value]];
    if (pairs.every(([_, v]) => v == null)) {
        return;
    }
    const encodeString = (v) => {
        return options?.charEncoding === "percent" ? encodeURIComponent(v) : v;
    };
    const encodeValue = (v) => encodeString(serializeValue(v));
    pairs.forEach(([pk, pv]) => {
        let tmp = "";
        let encValue = null;
        if (pv == null) {
            return;
        }
        else if (Array.isArray(pv)) {
            encValue = mapDefined(pv, (v) => `${encodeValue(v)}`)?.join(",");
        }
        else if (isPlainObject(pv)) {
            const mapped = mapDefinedEntries(Object.entries(pv), ([k, v]) => {
                return `,${encodeString(k)},${encodeValue(v)}`;
            });
            encValue = mapped?.join("").slice(1);
        }
        else {
            encValue = `${encodeValue(pv)}`;
        }
        if (encValue == null) {
            return;
        }
        const keyPrefix = encodeString(pk);
        tmp = `${keyPrefix}=${encValue}`;
        // trim trailing '=' if value was empty
        if (tmp === `${keyPrefix}=`) {
            tmp = tmp.slice(0, -1);
        }
        // If we end up with the nothing then skip forward
        if (!tmp) {
            return;
        }
        out += `;${tmp}`;
    });
    return out;
}
export function encodeLabel(key, value, options) {
    let out = "";
    const pairs = options?.explode
        ? explode(key, value)
        : [[key, value]];
    if (pairs.every(([_, v]) => v == null)) {
        return;
    }
    const encodeString = (v) => {
        return options?.charEncoding === "percent" ? encodeURIComponent(v) : v;
    };
    const encodeValue = (v) => encodeString(serializeValue(v));
    pairs.forEach(([pk, pv]) => {
        let encValue = "";
        if (pv == null) {
            return;
        }
        else if (Array.isArray(pv)) {
            encValue = mapDefined(pv, (v) => `${encodeValue(v)}`)?.join(".");
        }
        else if (isPlainObject(pv)) {
            const mapped = mapDefinedEntries(Object.entries(pv), ([k, v]) => {
                return `.${encodeString(k)}.${encodeValue(v)}`;
            });
            encValue = mapped?.join("").slice(1);
        }
        else {
            const k = options?.explode && isPlainObject(value) ? `${encodeString(pk)}=` : "";
            encValue = `${k}${encodeValue(pv)}`;
        }
        out += encValue == null ? "" : `.${encValue}`;
    });
    return out;
}
function formEncoder(sep) {
    return (key, value, options) => {
        let out = "";
        const pairs = options?.explode
            ? explode(key, value)
            : [[key, value]];
        if (pairs.every(([_, v]) => v == null)) {
            return;
        }
        const encodeString = (v) => {
            return options?.charEncoding === "percent" ? encodeURIComponent(v) : v;
        };
        const encodeValue = (v) => encodeString(serializeValue(v));
        const encodedSep = encodeString(sep);
        pairs.forEach(([pk, pv]) => {
            let tmp = "";
            let encValue = null;
            if (pv == null) {
                return;
            }
            else if (Array.isArray(pv)) {
                encValue = mapDefined(pv, (v) => `${encodeValue(v)}`)?.join(encodedSep);
            }
            else if (isPlainObject(pv)) {
                encValue = mapDefinedEntries(Object.entries(pv), ([k, v]) => {
                    return `${encodeString(k)}${encodedSep}${encodeValue(v)}`;
                })?.join(encodedSep);
            }
            else {
                encValue = `${encodeValue(pv)}`;
            }
            if (encValue == null) {
                return;
            }
            tmp = `${encodeString(pk)}=${encValue}`;
            // If we end up with the nothing then skip forward
            if (!tmp || tmp === "=") {
                return;
            }
            out += `&${tmp}`;
        });
        return out.slice(1);
    };
}
export const encodeForm = formEncoder(",");
export const encodeSpaceDelimited = formEncoder(" ");
export const encodePipeDelimited = formEncoder("|");
export function encodeBodyForm(key, value, options) {
    let out = "";
    const pairs = options?.explode
        ? explode(key, value)
        : [[key, value]];
    const encodeString = (v) => {
        return options?.charEncoding === "percent" ? encodeURIComponent(v) : v;
    };
    const encodeValue = (v) => encodeString(serializeValue(v));
    pairs.forEach(([pk, pv]) => {
        let tmp = "";
        let encValue = "";
        if (pv == null) {
            return;
        }
        else if (Array.isArray(pv)) {
            encValue = JSON.stringify(pv, jsonReplacer);
        }
        else if (isPlainObject(pv)) {
            encValue = JSON.stringify(pv, jsonReplacer);
        }
        else {
            encValue = `${encodeValue(pv)}`;
        }
        tmp = `${encodeString(pk)}=${encValue}`;
        // If we end up with the nothing then skip forward
        if (!tmp || tmp === "=") {
            return;
        }
        out += `&${tmp}`;
    });
    return out.slice(1);
}
export function encodeDeepObject(key, value, options) {
    if (value == null) {
        return;
    }
    if (!isPlainObject(value)) {
        throw new EncodingError(`Value of parameter '${key}' which uses deepObject encoding must be an object or null`);
    }
    return encodeDeepObjectObject(key, value, options);
}
export function encodeDeepObjectObject(key, value, options) {
    if (value == null) {
        return;
    }
    let out = "";
    const encodeString = (v) => {
        return options?.charEncoding === "percent" ? encodeURIComponent(v) : v;
    };
    if (!isPlainObject(value)) {
        throw new EncodingError(`Expected parameter '${key}' to be an object.`);
    }
    Object.entries(value).forEach(([ck, cv]) => {
        if (cv == null) {
            return;
        }
        const pk = `${key}[${ck}]`;
        if (isPlainObject(cv)) {
            const objOut = encodeDeepObjectObject(pk, cv, options);
            out += objOut == null ? "" : `&${objOut}`;
            return;
        }
        const pairs = Array.isArray(cv) ? cv : [cv];
        const encoded = mapDefined(pairs, (v) => {
            return `${encodeString(pk)}=${encodeString(serializeValue(v))}`;
        })?.join("&");
        out += encoded == null ? "" : `&${encoded}`;
    });
    return out.slice(1);
}
export function encodeJSON(key, value, options) {
    if (typeof value === "undefined") {
        return;
    }
    const encodeString = (v) => {
        return options?.charEncoding === "percent" ? encodeURIComponent(v) : v;
    };
    const encVal = encodeString(JSON.stringify(value, jsonReplacer));
    return options?.explode ? encVal : `${encodeString(key)}=${encVal}`;
}
export const encodeSimple = (key, value, options) => {
    let out = "";
    const pairs = options?.explode
        ? explode(key, value)
        : [[key, value]];
    if (pairs.every(([_, v]) => v == null)) {
        return;
    }
    const encodeString = (v) => {
        return options?.charEncoding === "percent" ? encodeURIComponent(v) : v;
    };
    const encodeValue = (v) => encodeString(serializeValue(v));
    pairs.forEach(([pk, pv]) => {
        let tmp = "";
        if (pv == null) {
            return;
        }
        else if (Array.isArray(pv)) {
            tmp = mapDefined(pv, (v) => `${encodeValue(v)}`)?.join(",");
        }
        else if (isPlainObject(pv)) {
            const mapped = mapDefinedEntries(Object.entries(pv), ([k, v]) => {
                return `,${encodeString(k)},${encodeValue(v)}`;
            });
            tmp = mapped?.join("").slice(1);
        }
        else {
            const k = options?.explode && isPlainObject(value) ? `${pk}=` : "";
            tmp = `${k}${encodeValue(pv)}`;
        }
        out += tmp ? `,${tmp}` : "";
    });
    return out.slice(1);
};
function explode(key, value) {
    if (Array.isArray(value)) {
        return value.map((v) => [key, v]);
    }
    else if (isPlainObject(value)) {
        const o = value ?? {};
        return Object.entries(o).map(([k, v]) => [k, v]);
    }
    else {
        return [[key, value]];
    }
}
function serializeValue(value) {
    if (value == null) {
        return "";
    }
    else if (value instanceof Date) {
        return value.toISOString();
    }
    else if (value instanceof Uint8Array) {
        return bytesToBase64(value);
    }
    else if (typeof value === "object") {
        return JSON.stringify(value, jsonReplacer);
    }
    return `${value}`;
}
function jsonReplacer(_, value) {
    if (value instanceof Uint8Array) {
        return bytesToBase64(value);
    }
    else {
        return value;
    }
}
function mapDefined(inp, mapper) {
    const res = inp.reduce((acc, v) => {
        if (v == null) {
            return acc;
        }
        const m = mapper(v);
        if (m == null) {
            return acc;
        }
        acc.push(m);
        return acc;
    }, []);
    return res.length ? res : null;
}
function mapDefinedEntries(inp, mapper) {
    const acc = [];
    for (const [k, v] of inp) {
        if (v == null) {
            continue;
        }
        const m = mapper([k, v]);
        if (m == null) {
            continue;
        }
        acc.push(m);
    }
    return acc.length ? acc : null;
}
export function queryJoin(...args) {
    return args.filter(Boolean).join("&");
}
export function queryEncoder(f) {
    const bulkEncode = function (values, options) {
        const opts = {
            ...options,
            explode: options?.explode ?? true,
            charEncoding: options?.charEncoding ?? "percent",
        };
        const encoded = Object.entries(values).map(([key, value]) => {
            return f(key, value, opts);
        });
        return queryJoin(...encoded);
    };
    return bulkEncode;
}
export const encodeJSONQuery = queryEncoder(encodeJSON);
export const encodeFormQuery = queryEncoder(encodeForm);
export const encodeSpaceDelimitedQuery = queryEncoder(encodeSpaceDelimited);
export const encodePipeDelimitedQuery = queryEncoder(encodePipeDelimited);
export const encodeDeepObjectQuery = queryEncoder(encodeDeepObject);
export function appendForm(fd, key, value, fileName) {
    if (value == null) {
        return;
    }
    else if (value instanceof Blob && fileName) {
        fd.append(key, value, fileName);
    }
    else if (value instanceof Blob) {
        fd.append(key, value);
    }
    else {
        fd.append(key, String(value));
    }
}
//# sourceMappingURL=encodings.js.map