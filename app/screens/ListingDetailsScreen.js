import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

function ListingDetailsScreen(props) {
  const {title, subTitle, image, sellerName, sellerListingsCount, sellerImage} = props;
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.topImage}></Image>
      <View style={styles.listingDetails}>
        <AppText style={styles.listingTitle}>{ title }</AppText>
        <AppText style={styles.listingSubTitle}>{ subTitle }</AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItem title={sellerName} subTitle={sellerListingsCount} image={sellerImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  listingDetails: {
    paddingHorizontal: 15,
    marginVertical: 15,
  },
  listingTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  listingSubTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.secondary,
  },
  topImage: {
    height: 250,
    width: null,
  },
  userContainer: {
    marginVertical: 20,
  },
})

export default ListingDetailsScreen;