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
