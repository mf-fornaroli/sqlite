import React from 'react';
import { StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../../constants/Colors';

import EmpresaListScreen from '../../screens/EmpresaListScreen';
import EmpresaScreen from '../../screens/EmpresaScreen';
import  EmpresaDetailScreen  from '../../screens/EmpresaDetailScreen';

const Stack = createNativeStackNavigator();

const EmpresaNavigator = () => (
 
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.header,
        headerTintColor: (Platform.OS === 'android' || Platform.OS === 'web') ? 'white' : COLORS.primary,
      }}
      initialRouteName="EmpresaList"
    >
      <Stack.Screen
        name="EmpresaList"
        component={EmpresaListScreen}
        options={{
          title: 'Listado de Empresas',
         
        }}
      />
      <Stack.Screen
        name="Empresa"
        component={EmpresaScreen}
        options={{
          title: 'Alta de Empresa',
         
        }}
    />
     <Stack.Screen
        name="EmpresaDetail"
        component={EmpresaDetailScreen}
        options={{
          title: 'Detalle de Empresa',
         
        }}
      />
    </Stack.Navigator>

);

const styles = StyleSheet.create({
  header: {
    backgroundColor: (Platform.OS === 'android' || Platform.OS === 'web') ? COLORS.primary : 'white',
  }})

export default EmpresaNavigator;