import { ClientSDK } from "../lib/sdks.js";
import { Engines } from "./engines.js";
import { Image } from "./image.js";
import { User } from "./user.js";
export declare class Version1 extends ClientSDK {
    private _image?;
    get image(): Image;
    private _engines?;
    get engines(): Engines;
    private _user?;
    get user(): User;
}
//# sourceMappingURL=version1.d.ts.map