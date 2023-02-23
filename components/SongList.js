import {
  StyleSheet,
  FlatList,
  Text,
  View,
  SafeAreaView,
  Image,
} from "react-native";
import { colors } from "../assets/Themes/colors";
import { Themes } from "../assets/Themes";
import SongItem from "./SongItem";
import SpotifyLogo from "../assets/Images/images";

const SongList = ({ tracks, navigation }) => {
  let index = 0;

  const renderSongItem = (item) => {
    console.log(item);
    index += 1;
    return (
      <SongItem
        navigation={navigation}
        externalUrl={item.externalUrl}
        previewUrl={item.previewUrl}
        image={item.imageUrl}
        songTitle={item.songTitle}
        artist={item.songArtists[0]["name"]}
        songAlbum={item.albumName}
        songDuration={item.duration}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={SpotifyLogo.spotify} style={styles.image} />

        <Text style={styles.title}>My Top Tracks</Text>
      </View>
      <FlatList
        style={styles.list}
        data={tracks}
        renderItem={({ item }) => renderSongItem(item)}
        keyExtractor={(item) => item.songTitle}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: "center",
    height: "20%",
  },
  title: {
    color: Themes.colors.spotify,
    fontSize: 32,
    fontWeight: "bold",
  },
  list: {
    height: "80%",
  },
  image: {
    height: 20,
    width: 20,
    marginRight: 5,
  },
});

export default SongList;
