/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Sun Mar 16 2025
 *   file: types.ts
 *   project: EditorJS Renderer for React Native
 *   purpose: Types
 *
 */

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

// He chose to give us birth through the word of truth, that we might be a
// kind of firstfruits of all he created.
// - James 1:18
