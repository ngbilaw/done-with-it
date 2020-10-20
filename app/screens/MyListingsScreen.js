import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ActivityIndicator from '../components/ActivityIndicator';
import Screen from '../components/Screen';
import Card from '../components/Card';
import routes from '../navigation/routes';
import listingsApi from '../api/listings';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import useApi from '../hooks/useApi';
import colors from '../config/colors';


function MyListingsScreen({ navigation }) {
  const [ refreshing, setRefresing ] = useState(false);
  const getMyListingsApi = useApi(listingsApi.getMyListings);
  
  useEffect(() => {
    getMyListingsApi.request();
  }, [JSON.stringify(getMyListingsApi.data), ]);

  return (
    <>
      <ActivityIndicator visible={getMyListingsApi.loading} />
      <Screen style={styles.screen}>
        {getMyListingsApi.error && <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <AppButton title="Retry" onPress={loadListings}/>
        </>}
        <FlatList 
          data={getMyListingsApi.data.sort((a, b) => (a.id > b.id) ? 1 : -1)}
          keyExtractor={listing => listing.id.toString()}
          renderItem={
            ({ item }) => 
              <Card
                title={item.title}
                subTitle={"$" + item.price}
                imageUrl={item.images[0].url}
                onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                thumbnailUrl={item.images[0].thumbnailUrl}
              />
          }
          refreshing={refreshing}
          onRefresh={() => {
            getMyListingsApi.request();
          }}
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 20,
    backgroundColor: colors.light,
  }
})

export default MyListingsScreen;