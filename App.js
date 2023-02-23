import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import SpotifyButton from "./components/SpotifyButton";
import SongList from "./components/SongList";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { Component } from "react";
import { WebView } from "react-native-webview";

const Stack = createStackNavigator();

const MainPage = ({ navigation }) => {
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();
  let contentDisplayed = null;

  if (token) {
    contentDisplayed = <SongList tracks={tracks} navigation={navigation} />;
  } else {
    contentDisplayed = <SpotifyButton getSpotifyAuth={getSpotifyAuth} />;
  }

  return <View style={styles.container}>{contentDisplayed}</View>;
};

const DetailsPage = ({ navigation, route }) => {
  const { URL } = route.params;

  return <WebView source={{ uri: URL }} />;
};

const PreviewPage = ({ navigation }) => {
  return <Text>Details</Text>;
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="DetailsPage" component={DetailsPage} />
        <Stack.Screen name="PreviewPage" component={PreviewPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
