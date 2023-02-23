import { StyleSheet, FlatList, Text } from "react-native";
import { colors } from "../assets/Themes/colors";
import { Themes } from "../assets/Themes";
import SongItem from "./SongItem";

const SongList = ({ tracks }) => {
  let index = 0;

  const renderSongItem = (item) => {
    console.log(item);
    index += 1;
    return (
      <SongItem
        index={index}
        image={item.imageUrl}
        songTitle={item.songTitle}
        artist={item.songArtists[0]["name"]}
        songAlbum={item.albumName}
        songDuration={item.duration}
      />
    );
  };

  return (
    <FlatList
      data={tracks}
      renderItem={({ item }) => renderSongItem(item)}
      keyExtractor={(item) => item.songTitle}
    />
  );
};

const styles = StyleSheet.create({});

export default SongList;
