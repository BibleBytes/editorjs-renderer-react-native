/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Sun Mar 16 2025
 *   file: style.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Theme Style
 *
 */

import { RendererAppearance } from "../types";
import type { ThemeStyle } from "./types";

export const DEFAULT_THEME_STYLE: { [key in RendererAppearance]: ThemeStyle } =
    {
        [RendererAppearance.light]: {
            backgroundPrimary: "#FFFFFF",
            backgroundSecondary: "#EEF1F5",
            textPrimary: "#0C0E16",
            textSecondary: "#667086",
        },
        [RendererAppearance.dark]: {
            backgroundPrimary: "#151515",
            backgroundSecondary: "#202531",
            textPrimary: "#FFFFFF",
            textSecondary: "#C0C6D4",
        },
    };

// Let us not become weary in doing good, for at the proper time we will reap
// a harvest if we do not give up.
// - Galatians 6:9
