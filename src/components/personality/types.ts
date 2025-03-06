import type { RendererComponentProps } from "@/src/types";
import type {
    ImageProps,
    ImageStyle,
    TextProps,
    TextStyle,
    TouchableOpacityProps,
    ViewProps,
    ViewStyle,
} from "react-native";

export type PersonalityProps = RendererComponentProps & {
    data: {
        name?: string;
        description?: string;
        link: string;
        photo?: string;
    };
    modifyURL?: (url: string) => string;
    onClick?: (url: string) => void | Promise<void>;
    style?: {
        container?: ViewStyle;
        dataContainer?: ViewStyle;
        title?: TextStyle;
        description?: TextStyle;
        link?: TextStyle;
        image?: ImageStyle;
    };
    properties?: {
        container?: TouchableOpacityProps;
        dataContainer?: ViewProps;
        title?: TextProps;
        description?: TextProps;
        link?: TextProps;
        image?: ImageProps;
    };
};
