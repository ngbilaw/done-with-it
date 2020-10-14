import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/lists/ListItem';
import Icon from '../components/Icon';
import colors from '../config/colors';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import routes from '../navigation/routes';

const menuItems = [
  { 
    title: "My Listings",
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
    targetScreen: routes.MY_LISTINGS,
  },
  { 
    title: "My Messages",
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
]

function AccountScreen({ navigation }) {
  const [name, email, image] = [
    'Nicole Bilaw',
    'nicolegbilaw@gmail.com',
    require('../assets/mosh.jpg')
  ]
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>  
        <ListItem
          title={name}
          subTitle={email}
          image={image}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          renderItem={
            ({item}) => 
              <ListItem
                title={item.title}
                IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>}
                onPress={() => navigation.navigate(item.targetScreen)}
              />
          }
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <ListItem
          title="Log Out"
          IconComponent={
            <Icon name="logout" backgroundColor={colors.yellow} />
          }
        />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    backgroundColor: colors.white,
  },
  screen: {
    backgroundColor: colors.light
  }
})

export default AccountScreen;