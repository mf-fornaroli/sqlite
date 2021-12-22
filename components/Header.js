import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import FontSizes from '../constants/TypographySizes';


 
const Header = (props) => {
 const { title } = props;
 return (
  <View style={styles.header}>
   <Text style={styles.headerTitle}>{title}</Text>
  </View>
 )
}

const styles = StyleSheet.create({
 header: {
  width: '100%',
  height: 90,
  paddingTop: 36,
  backgroundColor: Colors.primary,
  alignItems: 'center',
  justifyContent: 'center'
 },

 headerTitle: {
  color: Colors.textLight,
  fontSize: FontSizes.title,
  fontFamily: 'roboto-regular'
 }

});

export default Header;