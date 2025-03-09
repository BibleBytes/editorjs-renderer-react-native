import { createStyle, useStyle } from "@/src/theme";
import type { ThemeStyle } from "@/src/theme/types";
import { RendererAppearance } from "@/src/types";
import React from "react";
import { type Dispatch, type SetStateAction, useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

export const Navigation = (props: {
    appearance: RendererAppearance;
    setAppearence: Dispatch<SetStateAction<RendererAppearance>>;
}) => {
    const styles = useStyle(stylesheet, props.appearance);
    const toggleSwitch = () => {
        if (props.appearance === RendererAppearance.light) {
            props.setAppearence(RendererAppearance.dark);
        } else {
            props.setAppearence(RendererAppearance.light);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>
                    EditorJS Renderer{"\n"}React Native
                </Text>
            </View>
            <Text style={styles.darkModeText}>Dark Mode</Text>
            <Switch
                onValueChange={toggleSwitch}
                value={props.appearance === RendererAppearance.dark}
            />
        </View>
    );
};

const stylesheet = createStyle((theme: ThemeStyle) => {
    return StyleSheet.create({
        container: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            padding: 10,
            borderBottomColor: "grey",
            borderBottomWidth: 1,
            backgroundColor: theme.backgroundPrimary,
        },
        title: {
            flexGrow: 1,
        },
        titleText: {
            fontWeight: "700",
            fontSize: 18,
            color: theme.textPrimary,
        },
        darkModeText: {
            fontWeight: "300",
            opacity: 0.5,
            color: theme.textPrimary,
        },
    });
});
