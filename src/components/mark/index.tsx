import { useStyle } from "@/src/theme";
import React from "react";
import { Text } from "react-native";
import { styles as stylesheet } from "./styles";
import type { MarkProps } from "./types";

export const Mark = (props: MarkProps) => {
    const styles = useStyle(stylesheet, props.appearance);
    return (
        <Text
            allowFontScaling={true}
            style={[styles.mark, props.style]}
            {...props.properties}
        >
            {props.children}
        </Text>
    );
};
