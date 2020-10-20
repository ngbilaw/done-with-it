import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Image } from "react-native-expo-image-cache";

function GalleryImage({image}) {
  return (
    <Image
      style={styles.image}
      tint="light"
      uri={image.image.source.uri}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
})

export default GalleryImage;