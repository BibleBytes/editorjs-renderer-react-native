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
