import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons }  from '@expo/vector-icons';

import AccountNavigator from './AccountNavigator';
import FeedNavigator from './FeedNavigator';
import ListingEditScreen from '../screens/ListingEditScreen';
import NewListingButton from './NewListingButton';
import routes from './routes';
import useNotifications from '../hooks/useNotifications';
import navigation from '../navigation/rootNavigation';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {

  const handleNotification = ({ data }) => {
    if (data.route) 
      navigation.navigate(data.route)
    else
      navigation.navigate(routes.ACCOUNT)
  };

  useNotifications(handleNotification);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed" 
        component={FeedNavigator} 
        options={{
          tabBarIcon: ({color, size}) =>
            <MaterialCommunityIcons name="home" color={color} size={size} />
        }}
      />
      <Tab.Screen 
        name="ListingEdit" 
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.LISTING_EDIT)}/>
          ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({color, size}) =>
            <MaterialCommunityIcons name="account" color={color} size={size} />
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;