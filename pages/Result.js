import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import loadAssets from "../logics/Assetsloader";
import Loading from "../assets/Loading";

export default function ResultScreen({ search }) {
    const assets = loadAssets();
    const [loading, setLoading] = useState(true);
    const [found, setFound] = useState(null);

    useEffect(() => {
        // Simulate a delay of 2 seconds for search results
        setTimeout(() => {
            setLoading(false);
            // Simulate that we found nothing for the search term
            setFound(search.length > 0 ? "Nothing found" : "No search term provided");
        }, 2000);
    }, [search]);

    return (
        <View style={styles.main}>
            {loading ? (
                <View style={[styles.resultContainer, { backgroundColor: assets.surface }]}>
                    <Loading textStyles={{ color: assets.text }} />
                </View>
            ) : (
                <View style={[styles.resultContainer, { backgroundColor: assets.surface }]}>
                    <Text style={[styles.text, { fontSize: 18, fontFamily: assets.normFont, color: assets.text }]}>
                        {found}: {search}
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
        marginTop: 20,
        borderRadius: 10,
        padding: 15,
        width: "100%",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 3 },
    },
    text: {
        textAlign: "center",
    },
});
