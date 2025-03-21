/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Pass in a style preset to guide the image model towards a particular style.
 *
 * @remarks
 * This list of style presets is subject to change.
 */
export const StylePreset = {
  Enhance: "enhance",
  Anime: "anime",
  Photographic: "photographic",
  DigitalArt: "digital-art",
  ComicBook: "comic-book",
  FantasyArt: "fantasy-art",
  LineArt: "line-art",
  AnalogFilm: "analog-film",
  NeonPunk: "neon-punk",
  Isometric: "isometric",
  LowPoly: "low-poly",
  Origami: "origami",
  ModelingCompound: "modeling-compound",
  Cinematic: "cinematic",
  ThreedModel: "3d-model",
  PixelArt: "pixel-art",
  TileTexture: "tile-texture",
} as const;
/**
 * Pass in a style preset to guide the image model towards a particular style.
 *
 * @remarks
 * This list of style presets is subject to change.
 */
export type StylePreset = ClosedEnum<typeof StylePreset>;

/** @internal */
export const StylePreset$inboundSchema: z.ZodNativeEnum<typeof StylePreset> = z
  .nativeEnum(StylePreset);

/** @internal */
export const StylePreset$outboundSchema: z.ZodNativeEnum<typeof StylePreset> =
  StylePreset$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StylePreset$ {
  /** @deprecated use `StylePreset$inboundSchema` instead. */
  export const inboundSchema = StylePreset$inboundSchema;
  /** @deprecated use `StylePreset$outboundSchema` instead. */
  export const outboundSchema = StylePreset$outboundSchema;
}
