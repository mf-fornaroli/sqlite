import React from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import TypographySizes from '../constants/TypographySizes';
import COLORS from '../constants/Colors';

const AuthScreen = () => {

 const title = 'REGISTRO';
 const message = '¿Tienes cuenta?';
 const messageAction = 'Ingresar';
 const messageTarget = 'login';

 return (
  <KeyboardAvoidingView
   behavior="height"
   style={styles.screen}>
   <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.label}>Email</Text>
    <TextInput
     style={styles.input}
     keyboardType="email-address"
     autoCapitalize='none'
    />
    <Text style={styles.label}>Password</Text>
    <TextInput
     style={styles.input}
     secureTextEntry
     autoCapitalize='none'
    />
    <Button title = "REGISTRARME"/>
    <View style={styles.prompt}>
     <Text style={styles.promptMessage}>{message}</Text>
     <TouchableOpacity onPress={()=>console.log(messageTarget)}>
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
 }
});

export default AuthScreen;
