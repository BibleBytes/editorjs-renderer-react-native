import type { EditorJSData } from "./editorjs/types";

export enum RendererAppearance {
    light = "light",
    dark = "dark",
}

type Component = React.ComponentType<any>;
export type RendererConfig = Partial<RendererConfigFull>;
export type RendererConfigFull = {
    tools: {
        [key: string]: Component;
        header: Component;
        bold: Component;
        italic: Component;
        mark: Component;
        underline: Component;
        paragraph: Component;
    };
    appearance: RendererAppearance;
    enableFallback: boolean;
};

export type RendererProps = {
    data: EditorJSData;
    config?: RendererConfig;
};

export type RendererComponentProps = {
    appearance: RendererAppearance;
    config: RendererConfigFull;
};
