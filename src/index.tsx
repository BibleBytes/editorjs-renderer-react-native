import { useMemo } from "react";
import { Text, View } from "react-native";
import { DEFAULT_RENDERER_CONFIG } from "./default";
import type { EditorJSBlock } from "./editorjs/types";
import type {
    RendererConfig,
    RendererConfigFull,
    RendererProps,
} from "./types";

export const Renderer = (props: RendererProps) => {
    const config = useMemo(() => getConfig(props.config), [props.config]);
    return (
        <View>
            {props.data.blocks.map((block) => (
                <View key={block.id || Date.now()}>
                    {getComponent(config, block)}
                </View>
            ))}
        </View>
    );
};

function getConfig(partialConfig: RendererConfig = {}): RendererConfigFull {
    return {
        ...DEFAULT_RENDERER_CONFIG,
        ...partialConfig,
        tools: {
            ...DEFAULT_RENDERER_CONFIG.tools,
            ...partialConfig.tools,
        },
    };
}

function getComponent(
    config: RendererConfigFull,
    block: EditorJSBlock,
): JSX.Element {
    if (block.type in config.tools) {
        const Component = config.tools[block.type];
        return (
            <Component
                data={block.data}
                config={config}
                appearance={config.appearance}
            />
        );
    }
    if (config.enableFallback) {
        return (
            <View>
                <Text>
                    Error: Unable to find component type "{block.type}".
                </Text>
            </View>
        );
    }
    return <View />;
}
