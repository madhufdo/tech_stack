import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  const { headerText } = props;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}> {headerText} </Text>
    </View>
  );
};

const styles = StyleSheet.create(
  {
    viewStyle:
    {
      backgroundColor: '#F8F8F8',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      paddingTop: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2
    },
    textStyle:
    {
      fontSize: 20
    }
  }
);

export { Header };
