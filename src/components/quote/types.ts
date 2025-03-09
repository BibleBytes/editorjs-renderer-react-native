import type { RendererComponentProps } from "@/src/types";
import type { TextProps, TextStyle, ViewProps, ViewStyle } from "react-native";

export type QuoteProps = RendererComponentProps & {
    data: {
        text: string;
        caption?: string;
        alignment?: "left" | "center";
    };
    style?: {
        container?: ViewStyle;
        quote?: TextStyle;
        caption?: TextStyle;
    };
    properties?: {
        container?: ViewProps;
        quote?: TextProps;
        caption?: TextProps;
    };
};
