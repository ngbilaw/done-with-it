import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet, Button } from 'react-native';

import ActivityIndicator from '../components/ActivityIndicator';
import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';
import routes from '../navigation/routes';
import listingsApi from '../api/listings';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import useApi from '../hooks/useApi';
import categoriesApi from '../api/categories';
import FilterItem from '../components/FilterItem';

function ListingsScreen({ navigation }) {
  const [ refreshing, setRefresing ] = useState(false);
  const getListingsApi = useApi(listingsApi.getListings);
  const getCategoriesApi = useApi(categoriesApi.getCategories);
  const [ selectedCategories, setSelectedCategories ] = useState([]);
  const [ listings, setListings ] = useState([]);

  useEffect(() => {
    getCategoriesApi.request();
    getListingsApi.request();
    setListings(getListingsApi.data);
  }, []);

  useEffect(() => {
    filterListings();
  }, [JSON.stringify(selectedCategories), ]);

  const isSelected = (categoryId) => {
    if (selectedCategories.includes(categoryId)) {
      return true;
    } else { return false };
  };

  const handleCategoryPress = (category) => {
    if (!isSelected(category.id)) {
      setSelectedCategories([category.id, ...selectedCategories ]);
    } else {
      const newSelectedCategories = selectedCategories.filter(c => c !== category.id);
      setSelectedCategories(newSelectedCategories);
    }
  
    filterListings();
  };

  const filterListings = () => {
    setRefresing(true);
    
    if (selectedCategories.length == 0) {
      setListings(getListingsApi.data);
      setRefresing(false);
      return;
    }

    let filteredListings = [];
    getListingsApi.data.forEach(filterListing);

    function filterListing(listing) {
      if (selectedCategories.includes(listing.categoryId)) {
        filteredListings.push(listing);
      };
    };

    setListings(filteredListings);
    setRefresing(false);
  };

  return (
    <>
      <ActivityIndicator visible={getListingsApi.loading || getCategoriesApi.loading} />
      <Screen style={styles.screen}>
        {getListingsApi.error && <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <AppButton title="Retry" onPress={() => {
              getListingsApi.request();
              setListings(getListingsApi.data);
            }}
          />
        </>}
        <View style={styles.categoriesContainer}>
          <FlatList
            data={getCategoriesApi.data}
            keyExtractor={category => category.id.toString()}
            renderItem={
              ({ item }) => 
                <FilterItem
                  item={item}
                  selected={!isSelected(item.id)}
                  onPress={handleCategoryPress}
                />
            }
            horizontal
          />
        </View>
        {listings.length == 0 && <>
          <AppText>No listings found</AppText>
          <AppButton title="Reload" onPress={() => {
              getListingsApi.request();
              filterListings();
            }}
          />
        </>}
        <FlatList 
          data={listings.sort((a, b) => (a.id > b.id) ? 1 : -1)}
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
            getListingsApi.request();
            filterListings();
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
  },
  categoriesContainer: {
    height: 50,
    paddingVertical: 5,
    marginVertical: 10,
  },
})

export default ListingsScreen;