import React, { useState } from "react";
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { AppLoading } from 'expo';

import AuthContext from './app/auth/context';
import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import OfflineNotice from "./app/components/OfflineNotice";
import authStorage from "./app/auth/storage";

export default function App() { 
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  }

  if (!isReady)
    return <AppLoading  startAsync={restoreUser} onFinish={() => setIsReady(true)} />;

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
} 
