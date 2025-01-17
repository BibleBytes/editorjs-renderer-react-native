import { useMemo } from "react";
import { Text } from "react-native";
import { styles } from "./styles";
import type { HeaderProps } from "./types";

export const Header = ({
    appearance,
    data,
    style,
    properties,
}: HeaderProps) => {
    const headingStyle = useMemo(() => styles[`h${data.level}`], [data.level]);
    const appearanceStyle = useMemo(() => styles[appearance], [appearance]);
    return (
        <Text
            accessible={true}
            accessibilityRole="header"
            allowFontScaling={true}
            style={[styles.container, headingStyle, appearanceStyle, style]}
            {...properties}
        >
            {data.text}
        </Text>
    );
};
