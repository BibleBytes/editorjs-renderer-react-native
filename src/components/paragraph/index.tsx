import { useParser } from "@/src/parser";
import { useMemo } from "react";
import { Text } from "react-native";
import { styles } from "./styles";
import type { ParagraphProps } from "./types";

const Paragraph = ({ config, data, style, properties }: ParagraphProps) => {
    const { parser } = useParser();
    const parsedText = useMemo(
        () => parser(config, data.text),
        [parser, config, data.text],
    );

    return (
        <Text
            accessible
            accessibilityRole="text"
            allowFontScaling={true}
            style={[styles.paragraph, style]}
            {...properties}
        >
            {parsedText}
        </Text>
    );
};

export { Paragraph };
