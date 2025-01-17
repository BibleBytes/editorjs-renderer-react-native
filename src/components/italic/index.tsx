import { Text } from "react-native";
import { styles } from "./styles";
import type { ItalicProps } from "./types";

const Italic = ({ style, properties, children }: ItalicProps) => {
    return (
        <Text
            allowFontScaling={true}
            style={[styles.italic, style]}
            {...properties}
        >
            {children}
        </Text>
    );
};

export { Italic };
