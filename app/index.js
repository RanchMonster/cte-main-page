import { StatusBar } from "expo-status-bar";
import { ScrollView, FlatList, StyleSheet, Text, View, Dimensions, Image } from "react-native";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Footer from "../components/footer";
import { CourseButton } from "../components/Buttons";
import useAssets from "../logics/Assetsloader";
import { router } from "expo-router";

export default function App() {
  const assets = useAssets();
  if (!assets) {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }}>
        <Loading />
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1, backgroundColor: assets.background }}>
        <Header />
        <ScrollView>
          <View style={styles.main}>
            <View style={[styles.coursesHeader, { backgroundColor: assets.surface }]}>
              <Text style={[styles.coursesHeaderText, { fontFamily: assets.boldFont, color: assets.text }]}>
                Welcome to Moanalua CTE
              </Text>
            </View>
            <View>
              <Image style={{
                width: "100%",
                height: screenHeight * 0.5,
                resizeMode:"contain",
                borderRadius: 10,
              }}
                source={assets.backgroundImage} />
            </View>
            <ScrollView style={[styles.largeTextContainer, { backgroundColor: assets.surface }]} showsVerticalScrollIndicator={false}>

              <Text style={[styles.largeText, { fontFamily: assets.normFont, color: assets.text }]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </Text>

            </ScrollView>
            <View style={[styles.coursesHeader, { backgroundColor: assets.surface }]}>
              <Text style={[styles.coursesHeaderText, { fontFamily: assets.boldFont, color: assets.text }]}>
              Alumni
              </Text>
            </View>
            <View style={[styles.coursesHeader, { backgroundColor: assets.surface }]}>
              <Text style={[styles.coursesHeaderText, { fontFamily: assets.boldFont, color: assets.text }]}>
                Courses
              </Text>
            </View>

            <FlatList
              style={styles.courseList}
              data={Array.from({ length: 10 }, (_, i) => ({ name: `Course ${i + 1}`, description: "Lorem ipsum..." }))}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => (
                <CourseButton name={item.name} description={item.description} onClick={() => {
                  router.navigate({
                    pathname: "./Course", params: { name: item.name, description: item.description }
                  })
                }} />
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </ScrollView>
        <Footer />
      </View>
    );
  }

}

const { height: screenHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
  },
  largeTextContainer: {
    maxHeight: screenHeight * 0.3,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  coursesHeader: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  coursesHeaderText: {
    fontSize: 24,
    lineHeight: 22,
    textAlign: "center",
  },
  largeText: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: "justify",
  },
  courseList: {
    flex: 1,
  },
});
