import { createStyle } from "@/src/theme";
import { StyleSheet } from "react-native";

export const styles = createStyle(() => {
    return StyleSheet.create({
        underline: {
            textDecorationLine: "underline",
        },
    });
});
