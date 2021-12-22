import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Color from '../constants/Colors';
import typographySizes from '../constants/typographySizes';



const ObraDetail = (props) => {
  const { item, navigation } = props;
  
  console.log('item image', item.image);

 return (
  <View>

   <Text style={styles.title}>{item.establecimiento}</Text>
   <Text style={styles.caption}>{`Nro. Establecimiento: ${item.nroEstablecimiento}`}</Text>
   <Text style={styles.caption}>{`Ubicación: ${item.ubicacion}`}</Text >
   <Text style={styles.caption} >{`Teléfono contacto: ${item.telefonoContacto}`}</Text>
   <Text style={styles.caption}>{`Nombre contacto: ${item.nombreContacto}`}</Text>
    <Text style={styles.caption}>{item.observaciones ? `Observaciones: ${item.observaciones}` : ''}</Text>
    <Image style={styles.image} source={{ uri: item.image }} />

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
 
 },
 image: {
  width: 70,
  height: 70,
  borderRadius: 10,
   backgorundColor: Color.textLight,
  marginLeft: 8
 }
})

export default ObraDetail;