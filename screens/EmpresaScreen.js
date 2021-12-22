import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import Colors from '../constants/Colors';
import TypographySizes from '../constants/typographySizes';

//importo hook de redux
import { useSelector, useDispatch } from 'react-redux';
//importo action para agregar una empresa
import { addEmpresa, addEmpresaDb } from '../store/actions/empresa.action';

//redux think
import { confirmEmpresa } from '../store/actions/empresa.action';

const EmpresaScreen = ({ navigation, route }) => {
  const empresas = useSelector(state => state.empresas);
  const dispatch = useDispatch();

 const [razonSocial, setRazonSocial] = useState('');
 const [cuit, setCuit] = useState('');
 const [ubicacion, setUbicacion] = useState('');
 const [telefono, setTelefono] = useState('');
 const [email, setEmail] = useState('');
 const [art, setArt] = useState('');

 const handlerRazonSocialChange = (value) => {
  setRazonSocial(value);
 };

 const handlerCuitChange = (value) => {
  setCuit(value);
 };
 
 const handlerUbicacionChange = (value) => {
  setUbicacion(value);
 };
 
 const handlerTelefonoChange = (value) => {
  setTelefono(value);
 };
 
 const handlerEmailChange = (value) => {
  setEmail(value);
 };
 
 const handlerArtChange = (value) => {
  setArt(value);
 };

  const handlerConfirm = () => {
   
    console.log('handler Confirm');
 
   const newId = empresas.listaEmpresas.length + 1;
   
  const newEmpresa = {
   id: newId,
   razonSocial: razonSocial,
   cuit: cuit,
   ubicacion: ubicacion,
   telefono: telefono,
   email: email,
   artContratada: art
  };
  
  /*
 insertar mensaje de grabación exitosa
 */
   
   //dispatch del action para agregar empresa
   //dispatch(addEmpresa(newEmpresa));

  dispatch(addEmpresaDb(newEmpresa));
   //luego de insertar vuelvo a la lista de empresas
  navigation.navigate('EmpresaList');
 };

  //redux thunk
  const confirmEmpresa = () => {
    dispatch(confirmEmpresa(item))
  };

  return (
    <View style={styles.screen}>
   <View style={styles.container}>
  <Text style={styles.label}>{'Razón Social'}</Text>
        <TextInput style={styles.input} value={razonSocial}
   placeholder="Ingrese razón social..."
   onChangeText={handlerRazonSocialChange}/>
  
  <Text style={styles.label}>{'CUIT'}</Text>
  <TextInput style={styles.input} value={cuit}
   placeholder='Ingrese cuit...'
   onChangeText={handlerCuitChange}/>
  
  <Text style={styles.label}>{'Ubicación'}</Text>
  <TextInput style={styles.input} value={ubicacion}
   placeholder='Ingrese ubicación...'
   onChangeText={handlerUbicacionChange}/>
  
  <Text style={styles.label}>{'Telefono'}</Text>
  <TextInput style={styles.input} value={telefono}
   placeholder='Ingrese teléfono...'
   onChangeText={handlerTelefonoChange}/>
  
  <Text style={styles.label}>{'Email'}</Text>
  <TextInput style={styles.input} value={email}
   placeholder='Ingrese email...'
   onChangeText={handlerEmailChange}/>
  
  <Text style={styles.label}>{'ART Contratada'}</Text>
  <TextInput style={styles.input} value={art}
   placeholder='Ingrese ART contratada...'
   onChangeText={handlerArtChange}/>
 
        <Button style={styles.button} title='Confirmar' onPress={handlerConfirm} />
   {// con thunk 
    /*<Button title='Confirmar' onPress={confirmEmpresa(objetoEmpresa)} />*/
   }
   </View>
 </View>
 )};

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
  marginVertical: 16,
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

export default EmpresaScreen;