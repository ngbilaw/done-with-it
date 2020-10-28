import React, { useState } from "react";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import logger from './app/utility/logger';

import AuthContext from './app/auth/context';
import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import OfflineNotice from "./app/components/OfflineNotice";
import authStorage from "./app/auth/storage";
import { navigationRef } from './app/navigation/rootNavigation';
import Screen from "./app/components/Screen";

import * as Notifications from 'expo-notifications';

logger.start();

export default function App() { 
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  }

  const showNotification = () => {
    Notifications.scheduleLocalNotificationAsync({
      title: 'Congratulations',
      body: 'Your order was successfully placed!'
    }, {
      time: new Date().getTime() + 2000
    });
  };
  
  useEffect(() => {
    
    // Stop the Splash Screen from being hidden.
    const showSplashScreen = async () => {
      await SplashScreen.preventAutoHideAsync();
    }
    showSplashScreen();
    // You can do additional data fetching here.
    // I have a function that fetches my user from Firebase
    // but I have left it out because it is kind of irrelevant
    // in this demo.
    restoreUser();
    setIsReady(true);
  }, []);

  useEffect(() => {
    // Once our data is ready, hide the Splash Screen
    const hideSplashScreen = async () => {
      await SplashScreen.hideAsync();
    }

    if (isReady) hideSplashScreen();
  }, [isReady])
  
  if (!isReady) return null;

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
} 
