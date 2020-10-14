import React from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageBackground,
} from "react-native";

import AppButton from "../components/AppButton";

const bgImage = require("../assets/background.jpg");
const logoRed = require("../assets/logo-red.png");

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
    <ImageBackground source={bgImage} style={styles.bgImage} blurRadius={5}>
      <View style={styles.logoContainer}>
        <Image source={ logoRed } style={styles.logoImage} />
        <Text style={styles.logoSubtext} >Sell What You Don't Need</Text>
      </View>
      <AppButton color="primary" title="Login" onPress={() => console.log('Tapped')}/>
      <AppButton color="secondary" title="Register" onPress={() => console.log('Tapped')}/>
    </ImageBackground>
  </View>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    zIndex: 1
  },
  container: {
    flex: 1,
    flexDirection: "column"
  },
  logoContainer: {
    flex: 11,
    justifyContent: "center",
    alignItems: "center",
    bottom: 140
  },
  logoImage: {
    justifyContent: "center",
    width: 80,
    height: 80,
  },
  logoSubtext: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: "bold",
  },
});