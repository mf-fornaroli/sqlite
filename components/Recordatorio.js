
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Color from '../constants/Colors';
import typographySizes from '../constants/typographySizes';

const Recordatorio = (props) => {
  const { item } = props;

  return (
   <View>

    <Text style={styles.title}>{`${item.fecha} - ${item.hora}`}</Text>
    <Text style={styles.caption}>{item.descripcion}</Text>
    </View>
  
  );
};

const styles = StyleSheet.create({
 title: {
  fontFamily: 'roboto-bold',
  fontSize: typographySizes.subHeading,
  marginVertical: 8,
  paddingLeft: 8,
  color: Color.accent
 },
 caption: {
  fontFamily: 'roboto-regular',
  fontSize: typographySizes.body,
  marginBottom: 4,
  paddingLeft: 8,
  color: Color.textDark
 }
});

export default Recordatorio;