import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import SpotifyButton from "./components/SpotifyButton";
import SongList from "./components/SongList";

export default function App() {
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();
  let contentDisplayed = null;

  if (token) {
    contentDisplayed = <SongList tracks={tracks} />;
  } else {
    contentDisplayed = <SpotifyButton getSpotifyAuth={getSpotifyAuth} />;
  }

  return <View style={styles.container}>{contentDisplayed}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
