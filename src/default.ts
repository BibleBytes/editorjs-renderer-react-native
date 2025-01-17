import { Bold } from "./components/bold";
import { Header } from "./components/header";
import { Italic } from "./components/italic";
import { Mark } from "./components/mark";
import { Paragraph } from "./components/paragraph";
import { Underline } from "./components/underline";
import { RendererAppearance, type RendererConfigFull } from "./types";

export const DEFAULT_RENDERER_CONFIG: RendererConfigFull = {
    tools: {
        header: Header,
        bold: Bold,
        italic: Italic,
        mark: Mark,
        underline: Underline,
        paragraph: Paragraph,
    },
    appearance: RendererAppearance.light,
    enableFallback: true,
};
