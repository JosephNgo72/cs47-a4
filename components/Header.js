import { View, Text, Image, Button, StyleSheet, Pressable } from "react-native";
import { colors } from "../assets/Themes/colors";
import SpotifyLogo from "../assets/Images/images";
import { withSafeAreaInsets } from "react-native-safe-area-context";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image></Image>
      <Text style={styles.text}>My Top Tracks</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 40,
    width: "100%",
    backgroundColor: "red",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 32,
  },
});

export default Header;
