/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Wed Mar 19 2025
 *   file: index.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Personality Component
 *
 */

import { useStyle } from "@/src/theme";
import React from "react";
import { useCallback } from "react";
import {
    Alert,
    Image,
    Linking,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { styles as stylesheet } from "./styles";
import type { PersonalityProps } from "./types";

export const Personality = (props: PersonalityProps) => {
    const styles = useStyle(stylesheet, props.appearance);
    const { link, description, name, photo } = props.data;

    const handleClick = useCallback(
        async (link: string) => {
            let _link = link;
            if (props.modifyURL) {
                _link = props.modifyURL(_link);
            }
            if (!_link) {
                Alert.alert("Missing link");
                return;
            }
            try {
                if (props.onClick) {
                    await props.onClick(_link);
                } else {
                    await Linking.openURL(_link);
                }
            } catch {
                Alert.alert(`Unable to open this URL: ${_link}`);
            }
        },
        [props.modifyURL, props.onClick],
    );

    return (
        <TouchableOpacity
            accessible
            accessibilityRole="link"
            accessibilityLabel="Link"
            accessibilityHint="Click to open the link"
            activeOpacity={0.2}
            style={[styles.container, props.style?.container]}
            onPress={() => handleClick(link)}
            {...props.properties?.container}
        >
            <View
                style={[styles.dataContainer, props.style?.dataContainer]}
                {...props.properties?.dataContainer}
            >
                {name && (
                    <Text
                        style={[styles.title, props.style?.title]}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        {...props.properties?.title}
                    >
                        {name}
                    </Text>
                )}

                {description && (
                    <Text
                        style={[styles.description, props.style?.description]}
                        numberOfLines={2}
                        ellipsizeMode="tail"
                        {...props.properties?.description}
                    >
                        {description}
                    </Text>
                )}

                {link && (
                    <Text
                        style={[styles.link, props.style?.link]}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        {...props.properties?.link}
                    >
                        {link}
                    </Text>
                )}
            </View>

            {photo && (
                <Image
                    source={{ uri: photo }}
                    style={[styles.image, props.style?.image]}
                    {...props.properties?.image}
                />
            )}
        </TouchableOpacity>
    );
};

// A wise son brings joy to his father, but a foolish son brings grief to his mother.
// - Proverbs 10:1
