import { StyleSheet, View, Text } from "react-native";
import { useState, useEffect } from "react";
import useAssets from "../logics/Assetsloader";  // ✅ Use the new hook
import Loading from "../components/Loading";
import { useSearchParams } from "expo-router/build/hooks";
import Header from "../components/Header";
import Footer from "../components/footer";

export default function ResultScreen() {
    const assets = useAssets(); // ✅ Now managed properly
    const [loading, setLoading] = useState(true);
    const [found, setFound] = useState(null);
    const search = useSearchParams().get("search");

    useEffect(() => {
        if (!assets) return;  // ✅ Only run if assets are loaded

        setTimeout(() => {
            setLoading(false);
            setFound(search?.length > 0 ? "Nothing found" : "No search term provided");
        }, 2000);
    }, [assets, search]);

    if (!assets) {
        return (
            <View style={styles.main}>
                <Loading />
            </View>
        );
    }

    return (
        <View style={{ flex: 1, backgroundColor: assets.background }}>
            <Header />
            <View style={[styles.main, { backgroundColor: assets.background }]}>

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
            <Footer />
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
