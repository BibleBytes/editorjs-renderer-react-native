import { createStyle } from "@/src/theme";
import { StyleSheet } from "react-native";

export const styles = createStyle((theme) => {
    return StyleSheet.create({
        container: {
            width: "100%",
            marginVertical: 8,
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderLeftWidth: 4,
            borderLeftColor: theme.backgroundSecondary,
            borderStyle: "solid",
        },
        quote: {
            fontSize: 16,
            color: theme.textPrimary,
        },
        caption: {
            marginTop: 12,
            fontSize: 14,
            fontWeight: "300",
            color: theme.textSecondary,
        },
    });
});
