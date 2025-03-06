import { createStyle } from "@/src/theme";
import { RendererAppearance } from "@/src/types";
import { StyleSheet } from "react-native";

export const styles = createStyle((_, appearence) => {
    const isDarkMode = appearence === RendererAppearance.dark;
    return StyleSheet.create({
        mark: {
            backgroundColor: isDarkMode ? "#E5C441" : "#F3DF84",
        },
    });
});
