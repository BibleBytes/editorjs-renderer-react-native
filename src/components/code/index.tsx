import { useStyle } from "@/src/theme";
import React from "react";
import { Text } from "react-native";
import { styles as stylesheet } from "./styles";
import type { CodeProps } from "./types";

export const Code = (props: CodeProps) => {
    const styles = useStyle(stylesheet, props.appearance);
    return (
        <Text
            allowFontScaling={true}
            style={[styles.code, props.style]}
            {...props.properties}
        >
            {props.children}
        </Text>
    );
};
