import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

function AppButton({color, title, onPress}) {
  return (
    <TouchableOpacity
      style={
        [
          styles.button,
          color == 'primary' ? styles.primary : styles.secondary
        ]
      }
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 25,
    paddingVertical: 12,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
    textTransform: 'uppercase',
  },
  primary: {
    backgroundColor: colors.primary,
    marginBottom: 5,
  },
  secondary: {
    backgroundColor: colors.secondary,
    marginTop: 5,
  }
})

export default AppButton;