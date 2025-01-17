import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

export const Navigation = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>
                    EditorJS Renderer{"\n"}React Native
                </Text>
            </View>
            <Text style={styles.darkModeText}>Dark Mode</Text>
            <Switch onValueChange={toggleSwitch} value={isEnabled} />
        </View>
    );
};

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        padding: 10,
        borderBottomColor: "grey",
        borderBottomWidth: 1,
    },
    title: {
        flexGrow: 1,
    },
    titleText: {
        fontWeight: "700",
        fontSize: 18,
    },
    darkModeText: {
        fontWeight: "300",
        opacity: 0.5,
    },
});
