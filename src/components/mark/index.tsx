import { Text } from "react-native";
import { styles } from "./styles";
import type { MarkProps } from "./types";

const Mark = ({ style, properties, children }: MarkProps) => {
    return (
        <Text
            allowFontScaling={true}
            style={[styles.mark, style]}
            {...properties}
        >
            {children}
        </Text>
    );
};

export { Mark };
