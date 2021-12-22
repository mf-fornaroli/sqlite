import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './tabs/TabNavigator';
import AuthNavigator from "./AuthNavigator";
import { useSelector } from 'react-redux';

const MainNavigator = () => {
 //const [user, setUser] = useState(null);
  
  const userId = useSelector(state => state.auth.userId)
 return (
  <NavigationContainer>
   {/*
    userId
     ? (< TabNavigator />)
     : (<AuthNavigator />)
  
   */}
     < TabNavigator />
  </NavigationContainer>
 )
};


export default MainNavigator;