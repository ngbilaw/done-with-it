import React from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageBackground,
} from "react-native";

import AppButton from "../components/AppButton";
import routes from "../navigation/routes";

const bgImage = require("../assets/background.jpg");
const logoRed = require("../assets/logo-red.png");

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
    <ImageBackground source={bgImage} style={styles.bgImage} blurRadius={5}>
      <View style={styles.logoContainer}>
        <Image source={ logoRed } style={styles.logoImage} />
        <Text style={styles.logoSubtext} >Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          color="primary" 
          title="Login" 
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <AppButton 
          color="secondary"
          title="Register"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
        <AppButton 
          color="primary"
          title="Login with Google"
          onPress={() => navigation.navigate(routes.GOOGLE_LOGIN)}
        />
      </View>
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
  buttonContainer : {
    marginBottom: 20,
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
