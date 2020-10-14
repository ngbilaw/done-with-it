import React from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageBackground,
} from "react-native";

const bgImage = require("./assets/background.jpg");
const logoRed = require("./assets/logo-red.png");

export default function App() {
  return (
    <View style={styles.container}>
    <ImageBackground source={bgImage} style={styles.bgImage}>
      <View style={{ flex: 9, justifyContent: "center", alignItems: "center" }}>
        <Image source={ logoRed } style={styles.logoImage} />
      </View>
      <View style={{ flex: 1, backgroundColor: "salmon" }}></View>
      <View style={{ flex: 1, backgroundColor: "paleturquoise" }}></View>
    </ImageBackground>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    zIndex: 1
  },
  logoImage: {
    justifyContent: "center",
    width: 80,
    height: 80,
    bottom: 130
  }
});
