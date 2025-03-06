import { useStyle } from "@/src/theme";
import React from "react";
import { Text } from "react-native";
import { styles as stylesheet } from "./styles";
import type { ItalicProps } from "./types";

export const Italic = (props: ItalicProps) => {
    const styles = useStyle(stylesheet, props.appearance);
    return (
        <Text
            allowFontScaling={true}
            style={[styles.italic, props.style]}
            {...props.properties}
        >
            {props.children}
        </Text>
    );
};
