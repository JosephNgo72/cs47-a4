import { View, Text, Image, Button, StyleSheet, Pressable } from "react-native";
import { colors } from "../assets/Themes/colors";
import SpotifyLogo from "../assets/Images/images";

const SpotifyButton = ({ getSpotifyAuth }) => {
  return (
    <Pressable onPress={getSpotifyAuth} style={styles.button}>
      <Image source={SpotifyLogo.spotify} style={styles.image} />
      <Text style={styles.buttonText}>CONNECT WITH SPOTIFY</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 99999,
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.spotify,
  },
  image: {
    height: 20,
    width: 20,
    marginRight: 5,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
  },
});

export default SpotifyButton;
