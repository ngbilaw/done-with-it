import React, { useEffect, useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { Button, Image } from 'react-native';

import ListingEditScreen from "./app/screens/ListingEditScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from "./app/components/Screen";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";


export default function App() { 
  return (
    // <WelcomeScreen />
    // <LoginScreen />
    // <RegisterScreen />
    <ListingEditScreen />
    // <MessagesScreen />
  );
} 
