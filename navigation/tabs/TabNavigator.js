import React from "react";
import { StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ObraNavigator from '../tabs/ObraNavigator';
import EmpresaNavigator from '../tabs/EmpresaNavigator';
import RecordatorioNavigator from '../tabs/RecordatorioNavigator';

import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from "../../constants/Colors";

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
 return (
  <BottomTabs.Navigator screenOptions={{
   headerShown: false,
   tabBarShowLabel: false,
   tabBarStyle: styles.tabBar
  }}initialRouteName='RecordatorioTab' >
   <BottomTabs.Screen name="RecordatorioTab" component={RecordatorioNavigator}
    options= {{
     tabBarIcon: ({ focused }) => (
      <View style={styles.item}>
       <Ionicons name="md-home" size={24} color="black" />
       <Text>Home</Text>
      </View>
     ),
    }
   }
   
    />
   <BottomTabs.Screen name="EmpresaTab" component={EmpresaNavigator}
   options= {{
     tabBarIcon: ({ focused }) => (
      <View style={styles.item}>
       <MaterialCommunityIcons name="office-building" size={24} color="black" />
       <Text>Empresas</Text>
      </View>
     )
    }} />
   
   <BottomTabs.Screen name="ObraTab" component={ObraNavigator}
   options= {{
     tabBarIcon: ({ focused }) => (
      <View style={styles.item}>
       <MaterialCommunityIcons name="crane" size={24} color="black" />
       <Text>Obras</Text>
      </View>
     ),
     tabBarVisible: (route) => {const routeName = route.state
    ? route.state.routes[route.state.index].name
    : '';

  if (routeName === 'ObraDetail') {
    return false;
  }

  return true;
}
}
     }
    />
  </BottomTabs.Navigator>
 )
};

const styles = StyleSheet.create({
 tabBar: {
  sahdowColor: '#7f5df0',
  sahdowOffset: { width: 0, height: 10 },
  shadowOpacity: 0.25,
  shadowRadius: 0.25,
  elevation: 5,
  position: 'absolute',
  bottom: 25,
  left: 20,
  right: 20,
  borderRadius: 15,
  height: 50,
 },
 item: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
 },
 item: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
 }
})
export default TabNavigator;