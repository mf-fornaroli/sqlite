import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Colors from '../constants/Colors';
import TypographySizes from '../constants/TypographySizes';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = ({navigation, route}) => {
 return (
  <View style={styles.screen}>
    <Text style={styles.title}>Menú</Text>
    <View style={styles.buttonContainer}>
       <TouchableOpacity style={styles.button}>
        <Button 
          title="Empresas"
          onPress={() => {
            navigation.navigate('EmpresaList')
        }}/>
      </TouchableOpacity>
          
      <TouchableOpacity style={styles.button}>
        <Button 
          title="Obras"
          onPress={() => {
            navigation.navigate('ObraList')
          }}/>
       </TouchableOpacity>
       
      <TouchableOpacity style={styles.button}>
        <Button
          title="Inspecciones"
          onPress={() => {
            navigation.navigate('Inspeccion')
        }}/>
      </TouchableOpacity>
    </View>
  </View>)
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
    paddingVertical: 20
  },
  button: {
    width: 150,
    padding: 10,
    marginBottom: 16,
    textAlign:'center'
  },
  title: {
    fontSize: TypographySizes.title,
    marginVertical: 24,
    textAlign: 'center',
    fontFamily: 'roboto-bold',
    color: Colors.accent
  }
});

export default HomeScreen;