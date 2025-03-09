import { createStyle } from "@/src/theme";
import { StyleSheet } from "react-native";

export const styles = createStyle((theme) => {
    return StyleSheet.create({
        itemContainer: {
            flexDirection: "row",
            alignContent: "center",
            paddingLeft: 16,
        },
        itemContent: {
            fontSize: 16,
            color: theme.textPrimary,
            flexShrink: 1,
        },
        numberPrimary: {
            fontSize: 16,
            color: theme.textPrimary,
            marginRight: 4,
        },
        numberSecondary: {
            fontSize: 16,
            color: theme.textPrimary,
            marginRight: 4,
        },
        bulletPrimary: {
            height: 6,
            width: 6,
            marginTop: 8,
            marginRight: 6,
            borderRadius: 6,
            backgroundColor: theme.textPrimary,
            borderColor: theme.textPrimary,
            borderWidth: 1,
        },
        bulletSecondary: {
            height: 6,
            width: 6,
            marginTop: 8,
            marginRight: 6,
            borderRadius: 6,
            borderColor: theme.textPrimary,
            borderWidth: 1,
        },
    });
});
