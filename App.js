import React, { useEffect, useState } from "react";
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { AsyncStorage } from 'react-native';

import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() { 
  return (
    <>
      <OfflineNotice />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
} 
