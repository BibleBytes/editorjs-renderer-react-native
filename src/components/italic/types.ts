import type { RendererComponentProps } from "@/src/types";
import type { TextProps, TextStyle } from "react-native";

export type ItalicProps = RendererComponentProps & {
    children?: React.ReactNode | undefined;
    style?: TextStyle;
    properties?: TextProps;
};
