import type { RendererComponentProps } from "@/src/types";
import type { TextProps, TextStyle } from "react-native";

export type ParagraphProps = RendererComponentProps & {
    data: {
        text: string;
    };
    style?: TextStyle;
    properties?: TextProps;
};
