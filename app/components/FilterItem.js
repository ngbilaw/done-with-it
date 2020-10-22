import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';
import AppText from '../components/AppText';


function FilterItem({ item, isSelected, onPress }) {

  const [selected, setSelected] = useState(isSelected);
  const [style, setStyle] = useState(styles.container);
  const [textStyle, setTextStyle] = useState({});

  useEffect(() => {
    setStyleOnPress();
  }, [selected]);

  const setStyleOnPress = () => {
    if (selected) {
      setStyle([styles.container, styles.selected])
      setTextStyle(styles.selectedText);
    } else {
      setStyle(styles.container);
      setTextStyle({});
    };
  };

  const handlePress = () => {
    setSelected(!selected);
    onPress(item);
    setStyleOnPress();
  }

  return (
    <TouchableWithoutFeedback
      onPress={handlePress}
    >
      <View style={style}>  
        <AppText style={textStyle}>
          {item.name}
        </AppText>
      </View>
    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 20,
    marginRight: 5,
    padding: 10,
    justifyContent: 'center',
  },
  selected: {
    backgroundColor: colors.secondary,
  },
  selectedText: {
    color: colors.white,
  },
})

export default FilterItem;
