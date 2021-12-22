import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ObraList from '../components/ObraList';
import { useSelector, useDispatch } from 'react-redux';
import { loadObras, selectObra } from '../store/actions/obra.action';



const ObraListScreen = ({navigation, route}) => {

  const dispatch = useDispatch();

  const listaObras = useSelector(state => state.obras.listaObras);

  useEffect(() => {
    //carga las obras de sqlite
    dispatch(loadObras());
  }, []);

 return (
  <View>
     <ObraList navigation={navigation} items={listaObras} />  
 </View>)
}

const styles = StyleSheet.create({
 screen: {
  
 }
});

export default ObraListScreen;