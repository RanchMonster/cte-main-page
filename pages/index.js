import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from "../components/Header"
import { useState } from 'react';
import { useColorScheme } from 'react-native';
import Loading from '../assets/Loading';
import loadAssets from '../logics/Assetsloader';
import HomeScreen from './Home';
import Footer from '../components/footer';
export default function App() {
    const assets = loadAssets();
    const courses = Array.from({ length: 10 }, (_, i) => ({
        name: `Course ${i + 1}`,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum erat vel pretium consectetur. Nullam auctor nec leo a ornare. Sed quis pulvinar tellus. Nulla posuere augue a scelerisque vehicula. Phasellus euismod sollicitudin lorem, accumsan molestie erat. In hac habitasse platea dictumst. Morbi nulla sem, aliquet sit amet quam a, malesuada porttitor sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum erat vel pretium consectetur. Nullam auctor nec leo a ornare. Sed quis pulvinar tellus. Nulla posuere augue a scelerisque vehicula. Phasellus euismod sollicitudin lorem, accumsan molestie erat. In hac habitasse platea dictumst. Morbi nulla sem, aliquet sit amet quam a, malesuada porttitor sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum erat vel pretium consectetur. Nullam auctor nec leo a ornare. Sed quis pulvinar tellus. Nulla posuere augue a scelerisque vehicula. Phasellus euismod sollicitudin lorem, accumsan molestie erat. In hac habitasse platea dictumst. Morbi nulla sem, aliquet sit amet quam a, malesuada porttitor sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum erat vel pretium consectetur. Nullam auctor nec leo a ornare. Sed quis pulvinar tellus. Nulla posuere augue a scelerisque vehicula. Phasellus euismod sollicitudin lorem, accumsan molestie erat. In hac habitasse platea dictumst. Morbi nulla sem, aliquet sit amet quam a, malesuada porttitor sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum erat vel pretium consectetur. Nullam auctor nec leo a ornare. Sed quis pulvinar tellus. Nulla posuere augue a scelerisque vehicula. Phasellus euismod sollicitudin lorem, accumsan molestie erat. In hac habitasse platea dictumst. Morbi nulla sem, aliquet sit amet quam a, malesuada porttitor sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum erat vel pretium consectetur. Nullam auctor nec leo a ornare. Sed quis pulvinar tellus. Nulla posuere augue a scelerisque vehicula. Phasellus euismod sollicitudin lorem, accumsan molestie erat. In hac habitasse platea dictumst. Morbi nulla sem, aliquet sit amet quam a, malesuada porttitor sapien.",
    }));

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.main}>
                <View style={[{ backgroundColor: assets.surface }, styles.coursesHeader]}>
                    <Text style={[styles.coursesHeaderText, { fontFamily: assets.boldFont, color: assets.text }]}>Welcome to CTE</Text>
                </View>
                {/* Scrollable Large Text */}
                <ScrollView style={[styles.largeTextContainer, { backgroundColor: assets.surface }]} showsVerticalScrollIndicator={false}>
                    <Text style={[styles.largeText, { fontFamily: assets.normFont, color: assets.text }]}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in mauris quis sapien
                        maximus scelerisque vel ut urna. Nunc convallis libero in velit posuere, eget posuere
                        lacus pretium. Proin pulvinar et ante in laoreet. Nullam eros enim, pretium nec massa
                        non, sollicitudin pellentesque dolor...
                    </Text>
                </ScrollView>

                {/* Course List */}
                {/* <View style={[{ backgroundColor: assets.surface }, styles.coursesHeader]}>
                    <Text style={[styles.coursesHeaderText, { fontFamily: assets.boldFont, color: assets.text }]}>Courses</Text>
                </View> */}
                {/* <FlatList
                    style={styles.courseList}
                    data={courses}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item }) => (
                        (<CourseButton name={item.name} description={item.description} onClick={() => { }} />)
                    )}
                    showsVerticalScrollIndicator={false}
                /> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    }
});
