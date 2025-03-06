import { useStyle } from "@/src/theme";
import { decode } from "html-entities";
import React from "react";
import { Text, View } from "react-native";
import { styles as stylesheet } from "./styles";
import type { DelimiterProps } from "./types";

export const Delimiter = (props: DelimiterProps) => {
    const styles = useStyle(stylesheet, props.appearance);

    function Asterisk() {
        return (
            <Text
                style={[styles.delimiter, props.style?.delimiter]}
                {...props.properties?.delimiter}
            >
                {decode("&ast;")}
            </Text>
        );
    }

    return (
        <View
            aria-hidden
            style={[styles.container, props.style?.container]}
            {...props.properties?.container}
        >
            <Asterisk />
            <Asterisk />
            <Asterisk />
        </View>
    );
};
