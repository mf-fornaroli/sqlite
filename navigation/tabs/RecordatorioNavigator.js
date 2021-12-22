import React from 'react';
import { StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../../constants/Colors';


import RecordatorioScreen from '../../screens/RecordatorioScreen';

const Stack = createNativeStackNavigator();

const RecordatorioNavigator = () => (
 
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.header,
        headerTintColor: (Platform.OS === 'android' || Platform.OS === 'web') ? 'white' : COLORS.primary,
      }}
      initialRouteName="Recordatorio"
    >
      <Stack.Screen
        name="Recordatorio"
        component={RecordatorioScreen}
        options={{
          title: 'Safety App',
      
        }}
      />
    </Stack.Navigator>

);

const styles = StyleSheet.create({
  header: {
    backgroundColor: (Platform.OS === 'android' || Platform.OS === 'web') ? COLORS.primary : 'white',
  }})

export default RecordatorioNavigator;