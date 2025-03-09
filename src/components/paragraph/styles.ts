import { createStyle } from "@/src/theme";
import { StyleSheet } from "react-native";

export const styles = createStyle((theme) => {
    return StyleSheet.create({
        paragraph: {
            marginVertical: 8,
            fontSize: 16,
            color: theme.textPrimary,
        },
    });
});
