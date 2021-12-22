import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
//importo hook de redux
import { useSelector, useDispatch } from 'react-redux';
//importo action para agregar una empresa
import { addObra, addObraDb, addObraImage } from '../store/actions/obra.action';

import ImageSelector from '../components/ImageSelector';
import Colors from '../constants/Colors';
import TypographySizes from '../constants/typographySizes';

const ObraScreen = ({ navigation, route }) => {

  const obras = useSelector(state => state.obras);
  
  const dispatch = useDispatch();

 const [establecimiento, setEstablecimiento] = useState('');
 const [nroEstablecimiento, setNroEstablecimiento] = useState('');
 const [ubicacion, setUbicacion] = useState('');
 const [nombreContacto, setNombreContacto] = useState('');
 const [telefonoContacto, setTelefonoContacto] = useState('');
  const [observaciones, setObservaciones] = useState('');
  const [image, setImage] = useState('');

 const handlerChangeEstablecimiento = (value) => {
  setEstablecimiento(value);
 }
 const handlerChangeNroEstablecimiento = (value) => {
  setNroEstablecimiento(value);
 }
 const handlerChangeUbicacion = (value) => {
  setUbicacion(value);
 }
 const handlerChangeNombreContacto = (value) => {
  setNombreContacto(value);
 }
 const handlerChangeTelefonoContacto = (value) => {
  setTelefonoContacto(value);
 }
 const handlerChangeObservaciones = (value) => {
  setObservaciones(value);
 }
 
const handlerConfirm = () => {
  const newId = obras.listaObras.length + 1;
  
  const newObra = {
   id: newId,
   idEmpresa: 1,
   establecimiento: establecimiento,
   nroEstablecimiento: nroEstablecimiento,
   ubicacion: ubicacion,
   nombreContacto: nombreContacto,
   telefonoContacto: telefonoContacto,
   observaciones: observaciones,
   image: image
  };

 //dispatch del action para agregar obra
   dispatch(addObraDb(newObra));

 /*
 insertar mensaje de grabación exitosa
 */

  //luego de insertar vuelvo a la lista de obras
  navigation.navigate('ObraList');
 };

  return (<View style={styles.screen}>
    <View style={styles.container}>
<Text style={styles.label}>{'Establecimiento'}</Text>
  <TextInput style={styles.input} value={establecimiento}
   placeholder="Ingrese establecimiento..."
   onChangeText={handlerChangeEstablecimiento}/>
  
  <Text style={styles.label}>{'Nro. Establecimiento'}</Text>
  <TextInput style={styles.input} value={nroEstablecimiento}
   placeholder='Ingrese nro. de establecimiento...'
   onChangeText={handlerChangeNroEstablecimiento}/>
  
  <Text style={styles.label}>{'Ubicación'}</Text>
  <TextInput style={styles.input} value={ubicacion}
   placeholder='Ingrese ubicación...'
   onChangeText={handlerChangeUbicacion}/>
  
  <Text style={styles.label}>{'Nombre contacto'}</Text>
  <TextInput style={styles.input} value={nombreContacto}
   placeholder='Ingrese nombre de contacto...'
   onChangeText={handlerChangeNombreContacto} />
  
  <Text style={styles.label}>{'Teléfono Contacto'}</Text>
  <TextInput style={styles.input} value={telefonoContacto}
   placeholder='Ingrese teléfono de contacto...'
   onChangeText={handlerChangeTelefonoContacto}/>
  
  <Text style={styles.label}>{'Observaciones'}</Text>
  <TextInput style={styles.input} value={observaciones}
   placeholder='Ingrese observaciones...'
   onChangeText={handlerChangeObservaciones} />
   
   <ImageSelector onImage={(image) => {
     //console.log(image);
     setImage(image);
   }} />
      {/*<Button title='Geolocalizar'  color={Colors.accent}/>*/}
   
  <Button title='Confirmar' onPress={handlerConfirm} />

    </View>
    </View>)
}

const styles = StyleSheet.create({
  screen: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
 },
  container: {
  width: '80%',
  maxWidth: 400,
  padding: 2,
  margin: 4,
  borderColor: Colors.textDark,
  borderWidth: 1,
  borderRadius: 10,
  backgroundColor: "#fff",
  },
  button: {
  backgroundColor: Colors.primary,
  marginVertical: 8,
 },
 label: {
  fontFamily: 'roboto-bold',
  fontSize: TypographySizes.caption,
   color: Colors.primaryDark,
   paddingLeft: 16,
   paddingTop: 8,
 },
 input: {
  fontFamily: 'roboto-regular',
  fontSize: TypographySizes.body1,
  color: Colors.primaryDark,
  padding: 6,
   marginLeft: 8,
  marginBottom: 4,
  borderBottomWidth: 1,
  borderBottomColor: Colors.accent,
 }
});

export default ObraScreen;