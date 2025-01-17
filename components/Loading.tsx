import { View, ActivityIndicator, StyleSheet, useColorScheme, Text, TextStyle } from 'react-native';
// import { Colors } from '../assets/Styles';
export type LoadingProps = {
    textStyles?: TextStyle
}
export default function Loading(props: LoadingProps): JSX.Element {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="blue" />
            <Text style={props.textStyles}>Loading please wait</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});