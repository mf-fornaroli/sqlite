import React from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import Input from '../components/Input'; 
import TypographySizes from '../constants/TypographySizes';
import COLORS from '../constants/Colors';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signup, login } from '../store/actions/auth.action';

const RegisterScreen = () => {

 const dispatch = useDispatch();
 const [isSignUp, setIsSignUp] = useState(true);
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const handleConfirm = () => {
  if (isSignUp) {
    dispatch(signup(email, password));
  } else {
    dispatch(login(email, password));
  }
 }

 const handleToggleSignUp = ()=>{
  setIsSignUp(!isSignUp);
 }
 const handlerChangeEmail = (value) => {
  setEmail(value);
 };

 const handlerChangePassword = (value) => {
  setPassword(value);
 };

 const title = isSignUp ? 'REGISTRO' : 'LOGIN';
 const message = isSignUp ? '¿Ya estás registrado?' : '¿No te has registrado aún?';
 const messageTarget = isSignUp ? 'Registrarse' : 'Ingresar';
 const messageAction = isSignUp ? 'Ingresar' : 'Registrarse';

 return (
  <KeyboardAvoidingView
   behavior="height"
   style={styles.screen}>
   <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
         label='Email'
         keyboardType="email-address"
         autoCapitalize='none'
         value={email}
     onChangeText={handlerChangeEmail}
    />
    <Text style={styles.label}>Password</Text>
    <TextInput
     style={styles.input}
     secureTextEntry
     autoCapitalize='none'
     value={password}
     onChangeText={handlerChangePassword}
    />
    {/*<Button title = "REGISTRARME" onPress={handleConfirm}/>*/}

    <TouchableOpacity onPress={handleConfirm}>
     <Text style={styles.confirmButton}>
     {messageTarget}
     </Text>
    </TouchableOpacity>

    <View style={styles.prompt}>
     <Text style={styles.promptMessage}>
     {message}
     </Text>
     
     <TouchableOpacity onPress={handleToggleSignUp}>
      <Text style={styles.promptButton}>{messageAction}</Text>
     </TouchableOpacity>

    </View>
   </View>
  </KeyboardAvoidingView>
 );

};

const styles = StyleSheet.create({
 screen: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
 },
 title: {
  fontSize: TypographySizes.title,
  fontFamily: 'roboto-bold',
  marginBottom: 18,
  textAlign: 'center',
 },
 container: {
  width: '80%',
  maxWidth: 400,
  padding: 12,
  margin: 12,
  borderColor: COLORS.textDark,
  borderWidth: 1,
  borderRadius: 10,
  backgroundColor: COLORS.textLight,
 },
 prompt: {
  alignItems: 'center',
 },
 promptMessage: {
  fontSize: TypographySizes.caption,
  fontFamily: 'roboto-regular',
  color: COLORS.textDark,
 },
 promptButton: {
  fontSize: TypographySizes.caption,
  fontFamily: 'roboto-bold',
  color: COLORS.primary,
 },
 button: {
  backgroundColor: COLORS.primary,
  marginVertical: 20,
 },
 label: {
  fontFamily: 'roboto-bold',
  fontSize: TypographySizes.caption,
  color: COLORS.primaryDark,
 },
 input: {
  fontFamily: 'roboto-regular',
  fontSize: TypographySizes.body1,
  color: COLORS.primaryDark,
  padding: 12,
  margin: 12,
  borderBottomWidth: 1,
  borderBottomColor: COLORS.accent,
 },
  confirmButton: {
    fontSize: TypographySizes.title,
    textAlign: 'center',
    marginVertical: 10,
    paddingVertical: 5,
    backgroundColor: COLORS.primary,
    color: 'white',
  }
});

export default RegisterScreen;

