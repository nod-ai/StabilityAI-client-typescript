"use strict";
/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.invariant = invariant;
exports.remap = remap;
exports.combineSignals = combineSignals;
exports.abortSignalAny = abortSignalAny;
exports.compactMap = compactMap;
exports.allRequired = allRequired;
class InvariantError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvariantError";
    }
}
function invariant(condition, message) {
    if (!condition) {
        throw new InvariantError(message);
    }
}
/**
 * Converts or omits an object's keys according to a mapping.
 *
 * @param inp An object whose keys will be remapped
 * @param mappings A mapping of original keys to new keys. If a key is not present in the mapping, it will be left as is. If a key is mapped to `null`, it will be removed in the resulting object.
 * @returns A new object with keys remapped or omitted according to the mappings
 */
function remap(inp, mappings) {
    let out = {};
    if (!Object.keys(mappings).length) {
        out = inp;
        return out;
    }
    for (const [k, v] of Object.entries(inp)) {
        const j = mappings[k];
        if (j === null) {
            continue;
        }
        out[j ?? k] = v;
    }
    return out;
}
function combineSignals(...signals) {
    const filtered = [];
    for (const signal of signals) {
        if (signal) {
            filtered.push(signal);
        }
    }
    switch (filtered.length) {
        case 0:
        case 1:
            return filtered[0] || null;
        default:
            if ("any" in AbortSignal && typeof AbortSignal.any === "function") {
                return AbortSignal.any(filtered);
            }
            return abortSignalAny(filtered);
    }
}
function abortSignalAny(signals) {
    const controller = new AbortController();
    const result = controller.signal;
    if (!signals.length) {
        return controller.signal;
    }
    if (signals.length === 1) {
        return signals[0] || controller.signal;
    }
    for (const signal of signals) {
        if (signal.aborted) {
            return signal;
        }
    }
    function abort() {
        controller.abort(this.reason);
        clean();
    }
    const signalRefs = [];
    function clean() {
        for (const signalRef of signalRefs) {
            const signal = signalRef.deref();
            if (signal) {
                signal.removeEventListener("abort", abort);
            }
        }
    }
    for (const signal of signals) {
        signalRefs.push(new WeakRef(signal));
        signal.addEventListener("abort", abort);
    }
    return result;
}
function compactMap(values) {
    const out = {};
    for (const [k, v] of Object.entries(values)) {
        if (typeof v !== "undefined") {
            out[k] = v;
        }
    }
    return out;
}
function allRequired(v) {
    if (Object.values(v).every((x) => x == null)) {
        return void 0;
    }
    return v;
}
//# sourceMappingURL=primitives.js.map