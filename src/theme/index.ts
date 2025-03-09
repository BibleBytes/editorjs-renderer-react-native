import { useMemo } from "react";
import type { RendererAppearance } from "../types";
import { DEFAULT_THEME_STYLE } from "./style";
import type { ThemeStyle } from "./types";

export type CreateStyleCallback<T> = (
    style: ThemeStyle,
    appearance: RendererAppearance,
) => T;

export function useStyle<Styles>(
    stylesheet: CreateStyleCallback<Styles>,
    appearance: RendererAppearance,
): Styles {
    return useMemo(() => {
        const themeStyle = DEFAULT_THEME_STYLE[appearance];
        return stylesheet(themeStyle, appearance);
    }, [appearance, stylesheet]);
}

export function createStyle<T>(
    callback: CreateStyleCallback<T>,
): CreateStyleCallback<T> {
    return callback;
}
