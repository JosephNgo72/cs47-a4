import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import millisToMinutesAndSeconds from "../utils/millisToMinutesAndSeconds";
import { Ionicons } from "@expo/vector-icons";

const SongItem = ({ image, songTitle, artist, songAlbum, songDuration }) => {
  return (
    <View style={styles.item}>
      <Pressable>
        <Ionicons name="play-circle-outline" size={32} color="green" />
      </Pressable>
      <Image source={{ uri: image }} style={styles.image} />
      <View style="song">
        <Text numberOfLines={1} style={styles.songTitle}>
          {songTitle}
        </Text>
        <Text style={styles.artist}>{artist}</Text>
      </View>
      <Text numberOfLines={1} style={styles.songAlbum}>
        {songAlbum}
      </Text>
      <Text style={styles.duration}>
        {millisToMinutesAndSeconds(songDuration)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginVertical: 8,
    width: "100%",
  },
  index: { width: "10%", color: "white" },
  image: {
    width: "20%",
    height: 80,
    margin: 5,
    resizeMode: "contain",
  },
  songTitle: { width: 160, color: "white" },
  artist: { color: "white" },
  song: {
    width: "45%",
  },
  songAlbum: { width: "15%", color: "white" },
  duration: { width: "10%", color: "white" },
});

export default SongItem;
