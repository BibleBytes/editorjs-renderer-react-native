import { Text } from "react-native";
import { styles } from "./styles";
import type { BoldProps } from "./types";

const Bold = ({ style, properties, children }: BoldProps) => {
    return (
        <Text
            allowFontScaling={true}
            style={[styles.bold, style]}
            {...properties}
        >
            {children}
        </Text>
    );
};

export { Bold };
