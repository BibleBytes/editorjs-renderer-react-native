import type { RendererComponentProps } from "@/src/types";
import type {
    ImageProps as NativeImageProps,
    ImageStyle as NativeImageStyle,
    TextProps,
    TextStyle,
    ViewProps,
    ViewStyle,
} from "react-native";

export type ImageProps = RendererComponentProps & {
    data: {
        url?: string;
        file?: {
            url: string;
        };
        caption?: string;
        withBorder?: boolean;
        withBackground?: boolean;
        stretched?: boolean;
    };
    getImageSize?: (url: string) => [number, number];
    style?: {
        container?: ViewStyle;
        image?: NativeImageStyle;
        caption?: TextStyle;
    };
    properties?: {
        container?: ViewProps;
        image?: NativeImageProps;
        caption?: TextProps;
    };
};
