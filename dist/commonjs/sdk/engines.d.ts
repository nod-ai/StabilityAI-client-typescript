import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class Engines extends ClientSDK {
    /**
     * List engines
     *
     * @remarks
     * List all engines available to your organization/user
     */
    fetchList(request: operations.FetchListRequest, options?: RequestOptions): Promise<Array<components.Engine>>;
}
//# sourceMappingURL=engines.d.ts.map