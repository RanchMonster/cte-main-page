import { View, Text, StyleSheet, Pressable } from "react-native"
import loadAssets from "../logics/Assetsloader";
type ButtonProps = {
    onClick: () => void
    content: String
}
type HeaderButtonProps = ButtonProps & {

}
export function HeaderButton(props: HeaderButtonProps): JSX.Element {
    const assets = loadAssets()
    return (
        <View style={{ paddingHorizontal: "2%" }}>
            <Pressable onPress={props.onClick}>
                <View style={[headerButtonStyles.buttonStyle, {shadowColor:assets.background, backgroundColor: assets.surface }]}>
                    <Text style={{ color: assets.text, fontSize: 30, fontFamily: assets.boldFont as string }}>{props.content}</Text>
                </View>
            </Pressable>
        </View>

    );
} const headerButtonStyles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        padding: 10,
        borderRadius: 8,
        elevation: 3,
        // backgroundColor:,
        // shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
})