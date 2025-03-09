import { useParser } from "@/src/parser";
import { useStyle } from "@/src/theme";
import React from "react";
import { useMemo } from "react";
import { Text, View } from "react-native";
import { styles as stylesheet } from "./styles";
import type { QuoteProps } from "./types";

export const Quote = (props: QuoteProps) => {
    const styles = useStyle(stylesheet, props.appearance);
    const { parser } = useParser();

    const parsedText = useMemo(
        () => parser(props.config, props.appearance, props.data.text),
        [parser, props.config, props.appearance, props.data.text],
    );

    return (
        <View
            accessible
            style={[styles.container, props.style?.container]}
            {...props.properties?.container}
        >
            <Text
                accessibilityRole="text"
                allowFontScaling={true}
                style={[
                    styles.quote,
                    {
                        textAlign: props.data.alignment ?? "left",
                    },
                    props.style?.quote,
                ]}
                {...props.properties?.quote}
            >
                {parsedText}
            </Text>

            {props.data.caption && (
                <Text
                    style={[
                        styles.caption,
                        {
                            textAlign: props.data.alignment ?? "left",
                        },
                        props.style?.caption,
                    ]}
                    {...props.properties?.caption}
                >
                    -{props.data.caption}
                </Text>
            )}
        </View>
    );
};
