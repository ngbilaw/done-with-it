import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from '../components/AppText';
import colors from '../config/colors';

function SimpleListItem({title, iconName, iconContainerColor, onPress, renderRightActions, style}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={colors.light}
        onPress={onPress}
      >
        <View style={[styles.container, style]}>
          <View style={[styles.iconContainer, {backgroundColor: iconContainerColor}]}>
            <MaterialCommunityIcons name={iconName} size={24} color={colors.white} />
          </View>
          <AppText style={styles.title}>{ title }</AppText>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 50,
    width: 60,
    height: 60,
    marginRight: 15,
  },
  container: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    padding: 15,
    alignItems: 'center',
  },
  title: {
    fontWeight: "500",
    fontSize: 18,
  },
  iconContainer: {
    backgroundColor: colors.primary,
    borderRadius: 30,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15, 
 },
})

export default SimpleListItem;