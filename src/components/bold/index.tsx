import { useStyle } from "@/src/theme";
import React from "react";
import { Text } from "react-native";
import { styles as stylesheet } from "./styles";
import type { BoldProps } from "./types";

export const Bold = (props: BoldProps) => {
    const styles = useStyle(stylesheet, props.appearance);
    return (
        <Text
            allowFontScaling={true}
            style={[styles.bold, props.style]}
            {...props.properties}
        >
            {props.children}
        </Text>
    );
};
