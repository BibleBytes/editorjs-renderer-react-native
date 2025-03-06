import type { EditorJSData } from "./editorjs/types";

export enum RendererAppearance {
    light = "light",
    dark = "dark",
}

type Component = React.ComponentType<any>;
export type RendererConfig = Partial<RendererConfigFull>;
export type RendererConfigFull = {
    components: {
        [key: string]: Component | undefined;
        header?: Component;
        bold?: Component;
        italic?: Component;
        mark?: Component;
        underline?: Component;
        paragraph?: Component;
        delimiter?: Component;
        linkTool?: Component;
        personality?: Component;
        quote?: Component;
        image?: Component;
        list?: Component;
        code?: Component;
    };
    enableFallback: boolean;
};

export type RendererProps = {
    data: EditorJSData;
    appearance?: RendererAppearance;
    config?: RendererConfig;
};

export type RendererComponentProps = {
    appearance: RendererAppearance;
    config: RendererConfigFull;
};
