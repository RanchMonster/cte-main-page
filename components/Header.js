import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import loadAssets from "../logics/Assetsloader";
import { HeaderButton } from "./Buttons";
import { useState, useEffect } from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Redirect, router } from "expo-router"
export default function Header() {
    const assets = loadAssets();
    const [search_is_pressed, setPressed] = useState(false);
    const [textInputValue, setTextInputValue] = useState("");

    useEffect(() => {
        let timer;

        if (search_is_pressed) {
            // Set a timeout to reset the state after 5 seconds of inactivity
            timer = setTimeout(() => {
                setPressed(false); // Hide the TextInput and show the button again
            }, 5000); // 5 seconds delay
        }

        return () => clearTimeout(timer); // Cleanup timeout if component unmounts or state changes
    }, [search_is_pressed, textInputValue]); // Watch both search_is_pressed and textInputValue

    return (
        <View
            style={[
                styles.header,
                {
                    backgroundColor: assets.primary,
                    borderBottomColor: assets.surface,
                },
            ]}
        >
            {/* Left Container with Text and Image */}
            <View style={styles.leftContainer}>
                <Text
                    style={[
                        styles.headerText,
                        {
                            color: assets.text,
                            fontFamily: assets.boldFont,
                            textShadowColor: assets.background,
                            textShadowOffset: { width: -1, height: 1 },
                            textShadowRadius: 10,
                        },
                    ]}
                >
                    CTE
                </Text>
                <Image
                    style={styles.logo}
                    source={assets.logo}
                    resizeMode="contain"
                />
            </View>
            {/* Right Container with Buttons */}
            <View style={styles.rightContainer}>
                <HeaderButton content="Home" onClick={()=>router.navigate("./")}/>
                {search_is_pressed ? (
                    <View style={{ alignItems: "center", flexDirection: 'row' }}>
                        <FontAwesome name="search" size={24} color="black" />
                        <TextInput
                            style={[styles.textInput, { fontFamily: assets.normFont }]}
                            value={textInputValue}
                            onChangeText={(newValue) => {
                                setTextInputValue(newValue); // Update the value
                            }}
                            placeholder="Type to search..."
                            onEndEditing={() => setPressed(false)} // Hide TextInput when user stops editing
                            onSubmitEditing={(value) => {
                                router.navigate({ pathname: "./Result", params: { search: textInputValue } })
                                setTextInputValue("")
                                setPressed(false)
                            }}
                        />
                    </View>
                ) : (
                    <HeaderButton onClick={() => setPressed(true)} content="Search" />
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 80, // Adjust height as needed
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    leftContainer: {
        flex: 2.5,
        flexDirection: "row",
        alignItems: "center", // Align items vertically
    },
    rightContainer: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    headerText: {
        fontSize: 40,
        marginRight: 10, // Space between text and logo
    },
    logo: {
        width: 50,
        height: 50, // Adjust the size of the logo as needed
    },
    textInput: {
        height: 40,
        width: 200,
        borderColor: "gray",
        borderWidth: 1,
        paddingLeft: 8,
        fontSize: 16,
    },
});
