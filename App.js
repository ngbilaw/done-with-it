import React, { useState } from "react";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { AppLoading } from 'expo';
import { Button } from 'react-native';
import logger from './app/utility/logger';

import AuthContext from './app/auth/context';
import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import OfflineNotice from "./app/components/OfflineNotice";
import authStorage from "./app/auth/storage";
import { navigationRef } from './app/navigation/rootNavigation';
import Screen from "./app/components/Screen";

import { Notifications } from 'expo';

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

  if (!isReady)
    return <AppLoading  startAsync={restoreUser} onFinish={() => setIsReady(true)} />;

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
} 
