/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Sun Mar 16 2025
 *   file: index.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Theme Utilities
 *
 */

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

// This is how we know that we live in him and he in us: He has given us
// of his Spirit.
// - 1 John 4:13
