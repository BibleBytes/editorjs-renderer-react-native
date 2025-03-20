/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Sun Mar 16 2025
 *   file: types.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: EditorJS Types
 *
 */

export interface EditorJSData {
    version?: string;
    time?: number;
    blocks: EditorJSBlock[];
}

export interface EditorJSBlock<
    Type extends string = string,
    Data extends object = any,
> {
    id: string;
    type: Type;
    data: Data;
}

// My salvation and my honor depend on God; he is my mighty rock, my refuge.
// - Psalm 62:7
