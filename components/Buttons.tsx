import { View, Text, StyleSheet, Pressable } from "react-native"
import loadAssets from "../logics/Assetsloader";
export type ButtonProps = {
    onClick: () => void
}
export type HeaderButtonProps = ButtonProps & {
    content: String

}
export function HeaderButton(props: HeaderButtonProps): JSX.Element {
    const assets = loadAssets()
    return (
        <View style={{ paddingHorizontal: "2%" }}>
            <Pressable onPress={props.onClick}>
                <View style={[styles.buttonStyle, { shadowColor: assets.background, backgroundColor: assets.surface }]}>
                    <Text style={{ color: assets.text, fontSize: 30, fontFamily: assets.boldFont as string }}>{props.content}</Text>
                </View>
            </Pressable>
        </View>

    );
}
export type CourseButtonProps = ButtonProps & {
    name: String
    description: String
}
export function CourseButton(props: CourseButtonProps): JSX.Element {
    const assets = loadAssets()
    return (
        <Pressable style={[styles.courseCard, { backgroundColor: assets.surface }]} onPress={props.onClick}>
            <Text style={[styles.courseName, { color: assets.text, fontFamily: assets.boldFont.toString() }]}>
                Course: {props.name}
            </Text>
            <Text style={[styles.courseDescription, { color: assets.text, fontFamily: assets.normFont.toString() }]}>
                Description: {props.description}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
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
    courseCard: {
        marginBottom: 10,
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
    },
    courseName: {
        fontSize: 18,
        // fontWeight: "bold",
        marginBottom: 5,
    },
    courseDescription: {
        fontSize: 14,
        lineHeight: 20,
        textAlign: "justify",
    },
})