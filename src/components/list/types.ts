import type { RendererComponentProps } from "@/src/types";
import type { TextProps, TextStyle, ViewProps, ViewStyle } from "react-native";

type ListConfig = {
    getLabel?: (index: number, depth: number) => string;
    style?: {
        container?: ViewStyle;
        itemContainer?: ViewStyle;
        itemContent?: TextStyle;
        numberPrimary?: TextStyle;
        numberSecondary?: TextStyle;
        bulletPrimary?: ViewStyle;
        bulletSecondary?: ViewStyle;
    };
    properties?: {
        container?: ViewProps;
        itemContainer?: ViewProps;
        itemContent?: TextProps;
        numberPrimary?: TextProps;
        numberSecondary?: TextProps;
        bulletPrimary?: ViewProps;
        bulletSecondary?: ViewProps;
    };
};

export type ListProps = RendererComponentProps &
    ListConfig & {
        data: {
            style: ListStyle;
            items: ItemData[];
        };
    };

export type ListRenderProps = RendererComponentProps &
    ListConfig & {
        items: ItemData[];
        depth: number;
        listStyle: ListStyle;
    };

export type ItemRenderProps = RendererComponentProps &
    ListConfig & {
        item: ItemData;
        index: number;
        depth: number;
        listStyle: ListStyle;
    };

export type ItemData = {
    content: string;
    items: ItemData[];
};

export type ListStyle = "ordered" | "unordered";
