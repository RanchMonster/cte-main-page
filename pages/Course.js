import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import loadAssets from "../logics/Assetsloader";
import Loading from "../assets/Loading";

export default function CourseScreen({ name, description }) {
    const assets = loadAssets();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a delay of 2 seconds for loading course content
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, [name]);

    return (
        <View style={styles.main}>
            {loading ? (
                <View style={[styles.resultContainer, { backgroundColor: assets.surface }]}>
                    <Loading textStyles={{ color: assets.text }} />
                </View>
            ) : (
                <View style={[styles.courseContainer, { backgroundColor: assets.surface }]}>
                    <Text style={[styles.title, { fontFamily: assets.boldFont, color: assets.text }]}>
                        {name}
                    </Text>
                    <Text style={[styles.description, { fontFamily: assets.normFont, color: assets.text }]}>
                        {description || "No description available"}
                    </Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    resultContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    courseContainer: {
        marginTop: 20,
        borderRadius: 10,
        padding: 15,
        width: "100%",
        alignItems: "flex-start",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 3 },
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
    },
});
