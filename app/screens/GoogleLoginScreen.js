import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import * as Google from 'expo-google-app-auth'
import settings from '../config/settings';
import usersApi from "../api/users";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import ActivityIndicator from "../components/ActivityIndicator";
import { ErrorMessage } from "../components/forms";

export default function GoogleLoginScreen () {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    signInWithGoogle();
  }, []);

  const registerAndLogin = async (userInfo) => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred.");
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(authToken);
  };

  const handleGoogleUserInfo = async (googleUserInfo) => {
    
    const user = googleUserInfo.user;
    console.log(googleUserInfo);
    const result = await loginApi.request(user.email, user.id);
    if (result.ok) {
      auth.logIn(result.data);
      return;
    }
    const userInfo = {
      email: user.email,
      password: user.id,
      name: user.name,
    };

    registerAndLogin(userInfo);
  }

  async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        behavior: 'web',
        iosClientId: settings.IOS_CLIENT_ID,
        //androidClientId: ANDROID_CLIENT_ID,
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        await handleGoogleUserInfo(result);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }
  const signInWithGoogle = () => {
    signInWithGoogleAsync()
  }

    return (
      <>
        <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
        <ErrorMessage error={error} visible={error} />
      </>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
