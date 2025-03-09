import { createStyle } from "@/src/theme";
import { StyleSheet } from "react-native";

const MAX_IMAGE_HEIGHT = 100;

export const styles = createStyle((theme) => {
    return StyleSheet.create({
        container: {
            width: "100%",
            marginVertical: 8,
            alignItems: "center",
        },
        defaultImage: {
            height: MAX_IMAGE_HEIGHT,
            width: "100%",
            resizeMode: "contain",
        },
        caption: {
            width: "100%",
            marginTop: 4,
            fontSize: 12,
            color: theme.textSecondary,
            textAlign: "center",
        },
    });
});
