import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Color from '../constants/Colors';
import typographySizes from '../constants/typographySizes';
import { useDispatch } from 'react-redux';
import { selectObra } from '../store/actions/obra.action';

let dispatch = null;

const Obra = (props) => {
 const { item, navigation } = props;

 const handlerSelect = (id) => {
    dispatch(selectObra(id));
    navigation.navigate("ObraDetail");
}

  const dispatch = useDispatch();

 return (
  <View>
 <TouchableOpacity onPress = {()=>handlerSelect(item.id)} >
   <Text style={styles.title}>{item.establecimiento}</Text>
   <Text style={styles.caption}>{`Nro. Establecimiento: ${item.nroEstablecimiento}`}</Text>
   <Text style={styles.caption}>{`Ubicación: ${item.ubicacion}`}</Text >
   <Text style={styles.caption} >{`Teléfono contacto: ${item.telefonoContacto}`}</Text>
   <Text style={styles.caption}>{`Nombre contacto: ${item.nombreContacto}`}</Text>
    <Text style={styles.caption}>{item.observaciones ? `Observaciones: ${item.observaciones}` : ''}</Text>
   </TouchableOpacity>
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
  borderRadius: 35,
  backgorundColor: Color.textLight
 }
})

export default Obra;