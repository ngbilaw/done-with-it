import React from 'react';
import { Text } from 'react-native';

import styles from './AppText/styles';


function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

export default AppText;