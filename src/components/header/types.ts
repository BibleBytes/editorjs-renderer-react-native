import type { RendererComponentProps } from "@/src/types";
import type { TextProps, TextStyle } from "react-native";

export type HeaderProps = RendererComponentProps & {
    data: {
        level: 1 | 2 | 3 | 4 | 5 | 6;
        text: string;
    };
    style?: TextStyle;
    properties?: TextProps;
};
