import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  _View
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

const image = require('../assets/chair.jpg');

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color={colors.white} size={30}/>
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="trash-can-outline" color={colors.white} size={30}/>
      </View>
      <Image resizeMode="contain" source={image} style={styles.image} />
    </View>
  );
}


const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 20
  },
  container: { 
    backgroundColor: colors.black,
    flex: 1
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 20,
  },
  image: {
    width: "100%",
    height: "100%"
  },
})

export default ViewImageScreen;