import { View, Text, StyleSheet } from "react-native"
import loadAssets from "../logics/Assetsloader";

export default function Header() {
    const assets = loadAssets()
    try {
        return (
            <View style={[styles.header, { backgroundColor: assets.primary, borderBottomColor: assets.surface }]}>
                <Text style={[styles.headerText, { color: assets.text, fontFamily: assets.boldFont }]}>CTE</Text>
            </View>
        );
    }catch(e){
        console.log(e)
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 0.05,
        // height: 60,
        // padding: 15,
        // backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        // borderBottomColor: '#ddd',
        justifyContent: 'center',
        // alignItems: 'center',
    },
    headerText: {
        fontSize: 30,
        // fontWeight: 'bold',
        // color: '#333',
    }
});