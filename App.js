import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/Header"
import { useState } from 'react';
import { useColorScheme } from 'react-native';
import Loading from './components/Loading';
import loadAssets from './logics/Assetsloader';
import HomeScreen from './pages/Home';
export default function App() {
  const asstes = loadAssets()
  if (!asstes) {
    return <Loading></Loading>
  } else {
    return (
      <View style={[styles.container,{backgroundColor:asstes.background}]}>
        <Header />
        <HomeScreen/>
        <StatusBar hidden={true} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
