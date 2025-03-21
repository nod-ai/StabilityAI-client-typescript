/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Engines } from "./engines.js";
import { Image } from "./image.js";
import { User } from "./user.js";

export class Version1 extends ClientSDK {
  private _image?: Image;
  get image(): Image {
    return (this._image ??= new Image(this._options));
  }

  private _engines?: Engines;
  get engines(): Engines {
    return (this._engines ??= new Engines(this._options));
  }

  private _user?: User;
  get user(): User {
    return (this._user ??= new User(this._options));
  }
}
