import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
import loadAssets from "../logics/Assetsloader";

export default function Footer() {
    const assets = loadAssets()
    // Shared value for the height
    const footerHeight = useSharedValue(60);

    // Animated style
    const animatedFooterStyle = useAnimatedStyle(() => ({
        height: withTiming(footerHeight.value, { duration: 200 }),
    }));

    return (
        <Pressable
            onMouseEnter={() => (footerHeight.value = 100)}
            onMouseLeave={() => (footerHeight.value = 60)}
        >
            <Animated.View style={[styles.footer, animatedFooterStyle, { backgroundColor: assets.primary }]}>
                <Text style={[styles.footerText, { color: assets.text, fontFamily: assets.boldFont }]}>Footer: Hover to expand!</Text>
            </Animated.View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    footer: {

        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 10,
        overflow: "hidden",
    },
    footerText: {
        fontSize: 16,
        fontWeight: "bold",
    },
});
