import { Renderer } from "@/src";
import type { RendererConfig } from "@/src/types";
import { Dimensions, SafeAreaView, View } from "react-native";
import { EDITOR_DATA } from "./data";
import { Navigation } from "./navigation";

const RENDERER_CONFIG: RendererConfig = {
    enableFallback: true,
};

export default () => {
    const windowHeight = Dimensions.get("window").height;
    return (
        <SafeAreaView
            style={{
                backgroundColor: "white",
                minHeight: windowHeight,
                width: "100%",
            }}
        >
            <Navigation />
            <View style={{ padding: 10 }}>
                <Renderer data={EDITOR_DATA} config={RENDERER_CONFIG} />
            </View>
        </SafeAreaView>
    );
};
