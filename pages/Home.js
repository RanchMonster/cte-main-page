import React from "react";
import { Text, StyleSheet, View, FlatList, ScrollView, Dimensions } from "react-native";
import loadAssets from "../logics/Assetsloader";

export default function HomeScreen() {
  const assets = loadAssets();
  const courses = Array.from({ length: 10 }, (_, i) => ({
    name: `Course ${i + 1}`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum erat vel pretium consectetur. Nullam auctor nec leo a ornare. Sed quis pulvinar tellus. Nulla posuere augue a scelerisque vehicula. Phasellus euismod sollicitudin lorem, accumsan molestie erat. In hac habitasse platea dictumst. Morbi nulla sem, aliquet sit amet quam a, malesuada porttitor sapien.",
  }));

  return (
    <View style={styles.main}>
      {/* Scrollable Large Text */}
      <ScrollView style={[styles.largeTextContainer,{backgroundColor:assets.surface}]} showsVerticalScrollIndicator={false}>
        <Text style={[styles.largeText, { fontFamily: assets.normFont, color: assets.text }]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in mauris quis sapien
          maximus scelerisque vel ut urna. Nunc convallis libero in velit posuere, eget posuere
          lacus pretium. Proin pulvinar et ante in laoreet. Nullam eros enim, pretium nec massa
          non, sollicitudin pellentesque dolor...
        </Text>
      </ScrollView>

      {/* Course List */}
      <FlatList
        style={styles.courseList}
        data={courses}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={[styles.courseCard, { backgroundColor: assets.surface }]}>
            <Text style={[styles.courseName, { color: assets.text, fontFamily: assets.normFont }]}>
              Course: {item.name}
            </Text>
            <Text style={[styles.courseDescription, { color: assets.text }]}>
              Description: {item.description}
            </Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const { height: screenHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
  },
  largeTextContainer: {
    maxHeight: screenHeight * 0.4, // Limit the height to 40% of the screen
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,

  },
  largeText: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: "justify",
  },
  courseList: {
    flex: 1,
  },
  courseCard: {
    marginBottom: 10,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
  },
  courseName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  courseDescription: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: "justify",
  },
});
