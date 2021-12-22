import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Color from '../constants/Colors';
import typographySizes from '../constants/typographySizes';
import { useDispatch } from 'react-redux';
import { selectEmpresa } from '../store/actions/empresa.action';

let dispatch = null;


const Empresa = (props) => {
  const { item, navigation } = props;

  const handlerSelect = (id) => {
    dispatch(selectEmpresa(id));
    navigation.navigate("EmpresaDetail");
}

  const dispatch = useDispatch();



  return (
   <View > 
    <TouchableOpacity onPress = {()=>handlerSelect(item.id)} >
      <Text style={styles.title}>{item.razonSocial}</Text>
      <Text style={styles.caption}>{`Ubicación: ${item.ubicacion}`}</Text>
      <Text style={styles.caption}>{`CUIT: ${item.cuit}`}</Text >
      <Text style={styles.caption} >{`Teléfono: ${item.telefono}`}</Text>
      <Text style={styles.caption}>{`Email: ${item.email}`}</Text>
      <Text style={styles.caption}>{`ART Contratada: ${item.artContratada}`}</Text>
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
 }
});

export default Empresa;