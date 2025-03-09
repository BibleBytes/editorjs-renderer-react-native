import { LinkTool, Renderer } from "@/src";
import { DEFAULT_THEME_STYLE } from "@/src/theme/style";
import { RendererAppearance, type RendererConfig } from "@/src/types";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { EDITOR_DATA } from "./data";
import { Navigation } from "./navigation";

const RENDERER_CONFIG: RendererConfig = {
    enableFallback: true,
    components: {
        linkTool: LinkTool,
    },
};

export default () => {
    const [appearance, setAppearence] = useState(RendererAppearance.light);
    return (
        <SafeAreaView
            style={{
                height: "100%",
                backgroundColor:
                    DEFAULT_THEME_STYLE[appearance].backgroundPrimary,
            }}
        >
            <Navigation appearance={appearance} setAppearence={setAppearence} />
            <ScrollView style={{ paddingHorizontal: 10 }}>
                <Renderer
                    data={EDITOR_DATA}
                    config={RENDERER_CONFIG}
                    appearance={appearance}
                />
                <View style={{ height: 20 }} />
            </ScrollView>
        </SafeAreaView>
    );
};
