import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import millisToMinutesAndSeconds from "../utils/millisToMinutesAndSeconds";
import { Ionicons } from "@expo/vector-icons";

const SongItem = ({
  navigation,
  externalUrl,
  previewUrl,
  image,
  songTitle,
  artist,
  songAlbum,
  songDuration,
}) => {
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("DetailsPage", {
          URL: externalUrl,
        })
      }
    >
      <View style={styles.item}>
        <Pressable
          onPress={() =>
            navigation.navigate("DetailsPage", {
              URL: previewUrl,
            })
          }
          style={styles.icon}
        >
          <Ionicons name="play-circle-outline" size={48} color="green" />
        </Pressable>

        <Image source={{ uri: image }} style={styles.image} />

        <View style={styles.song}>
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
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    marginVertical: 8,
    width: "100%",
  },
  icon: {
    width: "15%",
    alignItems: "center",
  },
  image: {
    width: "15%",
    height: 80,
    resizeMode: "contain",
  },
  songTitle: { color: "white" },
  artist: { color: "white" },
  song: {
    width: "35%",
    padding: 5,
  },
  songAlbum: { width: "25%", color: "white", padding: 5 },
  duration: { width: "10%", color: "white" },
});

export default SongItem;
