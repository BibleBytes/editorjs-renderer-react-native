import { Bold } from "./components/bold";
import { Code } from "./components/code";
import { Delimiter } from "./components/delimiter";
import { Header } from "./components/header";
import { Image } from "./components/image";
import { Italic } from "./components/italic";
import { LinkTool } from "./components/link-tool";
import { List } from "./components/list";
import { Mark } from "./components/mark";
import { Paragraph } from "./components/paragraph";
import { Personality } from "./components/personality";
import { Quote } from "./components/quote";
import { Underline } from "./components/underline";
import type { RendererConfigFull } from "./types";

export const DEFAULT_RENDERER_CONFIG: RendererConfigFull = {
    components: {
        header: Header,
        bold: Bold,
        italic: Italic,
        mark: Mark,
        underline: Underline,
        paragraph: Paragraph,
        delimiter: Delimiter,
        linkTool: LinkTool,
        personality: Personality,
        quote: Quote,
        image: Image,
        list: List,
        code: Code,
    },
    enableFallback: true,
};
