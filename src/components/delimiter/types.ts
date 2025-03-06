import type { RendererComponentProps } from "@/src/types";
import type { TextProps, TextStyle, ViewProps, ViewStyle } from "react-native";

export type DelimiterProps = RendererComponentProps & {
    data: Record<string, never>;
    style?: {
        delimiter?: TextStyle;
        container?: ViewStyle;
    };
    properties?: {
        delimiter?: TextProps;
        container?: ViewProps;
    };
};
