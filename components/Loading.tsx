import { View, ActivityIndicator, StyleSheet, useColorScheme } from 'react-native';
// import { Colors } from '../assets/Styles';

export default function Loading(): JSX.Element {
    const color = useColorScheme() === 'light' ? 'white' : 'dark';
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="blue" />
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