import { useStyle } from "@/src/theme";
import React from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
    type LayoutChangeEvent,
    Image as NativeImage,
    Text,
    View,
} from "react-native";
import { styles as stylesheet } from "./styles";
import type { ImageProps } from "./types";

const FAILED_IMAGE_URL =
    "https://dummyimage.com/600x200/808080/fff&text=Failed+to+Load+Image";

export const Image = (props: ImageProps) => {
    const imageURL = useMemo(
        () => props.data.file?.url || props.data.url || FAILED_IMAGE_URL,
        [props.data],
    );
    const styles = useStyle(stylesheet, props.appearance);
    const [width, setWidth] = useState(100);
    const [height, setHeight] = useState(100);
    const [containerWidth, setContainerWidth] = useState(-1);
    const [hasErrorOnSize, setHasErrorOnSize] = useState(false);

    useEffect(() => {
        if (containerWidth === -1) {
            return;
        }
        if (props.getImageSize) {
            const [_width, _height] = props.getImageSize(imageURL);
            setWidth(containerWidth);
            setHeight((containerWidth * _height) / _height);
        } else {
            NativeImage.getSize(
                imageURL,
                (w, h) => {
                    setWidth(containerWidth);
                    setHeight((containerWidth * h) / w);
                },
                () => {
                    setHasErrorOnSize(true);
                },
            );
        }
    }, [imageURL, containerWidth, props.getImageSize]);

    const onLayout = useCallback((event: LayoutChangeEvent) => {
        setContainerWidth(event.nativeEvent.layout.width);
    }, []);

    return (
        <View
            onLayout={onLayout}
            style={[styles.container, props.style?.container]}
            {...props.style?.container}
        >
            <View>
                {hasErrorOnSize ? (
                    <NativeImage
                        source={{ uri: imageURL }}
                        style={[styles.defaultImage, props.style?.image]}
                        {...props.properties?.image}
                    />
                ) : (
                    <NativeImage
                        source={{ uri: imageURL }}
                        style={[{ width, height }, props.style?.image]}
                        {...props.properties?.image}
                    />
                )}
            </View>

            {props.data.caption && (
                <Text
                    aria-hidden
                    style={[styles.caption, props.style?.caption]}
                    {...props.properties?.caption}
                >
                    {props.data.caption}
                </Text>
            )}
        </View>
    );
};
