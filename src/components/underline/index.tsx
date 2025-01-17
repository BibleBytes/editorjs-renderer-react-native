import { Text } from "react-native";
import { styles } from "./styles";
import type { UnderlineProps } from "./types";

const Underline = ({ style, properties, children }: UnderlineProps) => {
    return (
        <Text
            allowFontScaling={true}
            style={[styles.underline, style]}
            {...properties}
        >
            {children}
        </Text>
    );
};

export { Underline };
