import { useParser } from "@/src/parser";
import { useStyle } from "@/src/theme";
import React from "react";
import { useMemo } from "react";
import { Text } from "react-native";
import { styles as stylesheet } from "./styles";
import type { ParagraphProps } from "./types";

export const Paragraph = (props: ParagraphProps) => {
    const { parser } = useParser();
    const parsedText = useMemo(
        () => parser(props.config, props.appearance, props.data.text),
        [parser, props.config, props.appearance, props.data.text],
    );
    const styles = useStyle(stylesheet, props.appearance);
    return (
        <Text
            accessible
            accessibilityRole="text"
            allowFontScaling={true}
            style={[styles.paragraph, props.style]}
            {...props.properties}
        >
            {parsedText}
        </Text>
    );
};
