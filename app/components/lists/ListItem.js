import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AppText from '../AppText';
import defaultStyles from '../../config/styles';

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  style,
  showChevrons=true,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={defaultStyles.colors.light}
        onPress={onPress}
      >
        <View style={[styles.container, style]}>
          {IconComponent}
          {image && <Image style={styles.image} source={image}></Image>}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              { title }
            </AppText>
            {subTitle && 
              <AppText style={styles.subTitle} numberOfLines={2}>
                { subTitle }
              </AppText>}
          </View>
          { 
            showChevrons && 
            <MaterialCommunityIcons
              name='chevron-right'
              size={20}
              color={defaultStyles.colors.medium}
            />
          }
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 12,
    backgroundColor: defaultStyles.colors.white,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    borderRadius: 50,
    width: 60,
    height: 60,
  },
  title: {
    fontWeight: "500",
    fontSize: 18,
  },
  subTitle: {
    fontSize: 16,
    color: defaultStyles.colors.medium,
    marginTop: 5,
  },
})

export default ListItem;