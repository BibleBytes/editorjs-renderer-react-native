import { createStyle } from "@/src/theme";
import { StyleSheet } from "react-native";

export const styles = createStyle((theme) => {
    return StyleSheet.create({
        text: {
            marginVertical: 8,
            color: theme.textPrimary,
        },
        h1: {
            fontWeight: "700",
            fontSize: 28,
        },
        h2: {
            fontWeight: "700",
            fontSize: 24,
        },
        h3: {
            fontWeight: "600",
            fontSize: 20,
        },
        h4: {
            fontWeight: "600",
            fontSize: 18,
        },
        h5: {
            fontWeight: "600",
            fontSize: 16,
        },
        h6: {
            fontWeight: "500",
            fontSize: 16,
        },
    });
});
