import { useStyle } from "@/src/theme";
import React from "react";
import { useMemo } from "react";
import { Text } from "react-native";
import { styles as stylesheet } from "./styles";
import type { HeaderProps } from "./types";

export const Header = (props: HeaderProps) => {
    const styles = useStyle(stylesheet, props.appearance);
    const headingStyle = useMemo(
        () => styles[`h${props.data.level}`],
        [props.data.level, styles],
    );
    return (
        <Text
            accessible={true}
            accessibilityRole="header"
            allowFontScaling={true}
            style={[styles.text, headingStyle, props.style]}
            {...props.properties}
        >
            {props.data.text}
        </Text>
    );
};
