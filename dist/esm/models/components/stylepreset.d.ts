import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
/**
 * Pass in a style preset to guide the image model towards a particular style.
 *
 * @remarks
 * This list of style presets is subject to change.
 */
export declare const StylePreset: {
    readonly Enhance: "enhance";
    readonly Anime: "anime";
    readonly Photographic: "photographic";
    readonly DigitalArt: "digital-art";
    readonly ComicBook: "comic-book";
    readonly FantasyArt: "fantasy-art";
    readonly LineArt: "line-art";
    readonly AnalogFilm: "analog-film";
    readonly NeonPunk: "neon-punk";
    readonly Isometric: "isometric";
    readonly LowPoly: "low-poly";
    readonly Origami: "origami";
    readonly ModelingCompound: "modeling-compound";
    readonly Cinematic: "cinematic";
    readonly ThreedModel: "3d-model";
    readonly PixelArt: "pixel-art";
    readonly TileTexture: "tile-texture";
};
/**
 * Pass in a style preset to guide the image model towards a particular style.
 *
 * @remarks
 * This list of style presets is subject to change.
 */
export type StylePreset = ClosedEnum<typeof StylePreset>;
/** @internal */
export declare const StylePreset$inboundSchema: z.ZodNativeEnum<typeof StylePreset>;
/** @internal */
export declare const StylePreset$outboundSchema: z.ZodNativeEnum<typeof StylePreset>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace StylePreset$ {
    /** @deprecated use `StylePreset$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Enhance: "enhance";
        readonly Anime: "anime";
        readonly Photographic: "photographic";
        readonly DigitalArt: "digital-art";
        readonly ComicBook: "comic-book";
        readonly FantasyArt: "fantasy-art";
        readonly LineArt: "line-art";
        readonly AnalogFilm: "analog-film";
        readonly NeonPunk: "neon-punk";
        readonly Isometric: "isometric";
        readonly LowPoly: "low-poly";
        readonly Origami: "origami";
        readonly ModelingCompound: "modeling-compound";
        readonly Cinematic: "cinematic";
        readonly ThreedModel: "3d-model";
        readonly PixelArt: "pixel-art";
        readonly TileTexture: "tile-texture";
    }>;
    /** @deprecated use `StylePreset$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Enhance: "enhance";
        readonly Anime: "anime";
        readonly Photographic: "photographic";
        readonly DigitalArt: "digital-art";
        readonly ComicBook: "comic-book";
        readonly FantasyArt: "fantasy-art";
        readonly LineArt: "line-art";
        readonly AnalogFilm: "analog-film";
        readonly NeonPunk: "neon-punk";
        readonly Isometric: "isometric";
        readonly LowPoly: "low-poly";
        readonly Origami: "origami";
        readonly ModelingCompound: "modeling-compound";
        readonly Cinematic: "cinematic";
        readonly ThreedModel: "3d-model";
        readonly PixelArt: "pixel-art";
        readonly TileTexture: "tile-texture";
    }>;
}
//# sourceMappingURL=stylepreset.d.ts.map