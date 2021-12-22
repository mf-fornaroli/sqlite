import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text} from 'react-native';
import RecordatorioList from '../components/RecordatorioList';
import Recordatorios from '../data/Recordatorios';
import { FAB } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';

const RecordatorioScreen = ({navigation, route}) => {
 const [recordatorioList, setRecordatorioList] = useState(Recordatorios);
 console.log(recordatorioList);
 return (
  <View>
   <RecordatorioList items={recordatorioList} navigation={navigation} recordatorioList={recordatorioList} setRecordatorioList={setRecordatorioList}/>
  
  </View>
 );
}

const styles = StyleSheet.create({
 screen: {
  
 }
});

export default RecordatorioScreen;