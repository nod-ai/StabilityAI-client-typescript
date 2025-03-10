/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
export const consoleLoggerLevels = [
    "debug",
    "warning",
    "info",
    "error",
];
export function createConsoleLogger(level) {
    const min = consoleLoggerLevels.indexOf(level);
    const noop = () => { };
    const logger = {
        debug: noop,
        warning: noop,
        info: noop,
        error: noop,
    };
    return consoleLoggerLevels.reduce((logger, level, i) => {
        if (i < min) {
            return logger;
        }
        logger[level] = log.bind(null, level);
        return logger;
    }, logger);
}
function log(level, message, data) {
    let line = "";
    const allData = [{ msg: message, l: level }, data];
    for (const ctx of allData) {
        for (const [key, value] of Object.entries(ctx || {})) {
            if (value == null) {
                line += ` ${key}=<${value}>`;
            }
            else if (typeof value === "function") {
                line += ` ${key}=<function>`;
            }
            else if (typeof value === "symbol") {
                line += ` ${key}=${value.toString()}`;
            }
            else if (typeof value === "string") {
                const v = value.search(/\s/g) >= 0 ? JSON.stringify(value) : value;
                line += ` ${key}=${v}`;
            }
            else if (typeof value !== "object") {
                line += ` ${key}=${value}`;
            }
            else {
                line += ` ${key}="${JSON.stringify(value)}"`;
            }
        }
    }
    console.error(line);
}
//# sourceMappingURL=console-logger.js.map