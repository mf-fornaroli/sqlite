import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthScreen from '../screens/AuthScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
 <Stack.Navigator
  initialRouteName='Auth'
  screenOptions={{ headerShown: false }}
 >
  <Stack.Screen name="Auth" component={RegisterScreen} />

 <Stack.Screen name="Login" component={AuthScreen} />
 </Stack.Navigator>
);

export default AuthNavigator;