import { createStyle } from "@/src/theme";
import { StyleSheet } from "react-native";

export const styles = createStyle((theme) => {
    return StyleSheet.create({
        code: {
            color: theme.textPrimary,
            backgroundColor: theme.backgroundSecondary,
        },
    });
});
