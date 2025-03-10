import { useStyle } from "@/src/theme";
import React from "react";
import { Text } from "react-native";
import { styles as stylesheet } from "./styles";
import type { UnderlineProps } from "./types";

export const Underline = (props: UnderlineProps) => {
    const styles = useStyle(stylesheet, props.appearance);
    return (
        <Text
            allowFontScaling={true}
            style={[styles.underline, props.style]}
            {...props.properties}
        >
            {props.children}
        </Text>
    );
};
