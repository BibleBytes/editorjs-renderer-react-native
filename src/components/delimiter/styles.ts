import { createStyle } from "@/src/theme";
import { StyleSheet } from "react-native";

export const styles = createStyle((theme) => {
    return StyleSheet.create({
        container: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginVertical: 8,
            paddingVertical: 16,
        },
        delimiter: {
            marginHorizontal: 6,
            fontSize: 24,
            color: theme.textPrimary,
        },
    });
});
