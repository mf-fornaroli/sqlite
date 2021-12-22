import React from 'react';
import { FlatList, View, Text } from 'react-native';
import Recordatorio from './Recordatorio';
import Card from './Card';
import Colors from '../constants/Colors';

const RecordatorioList = (props) => {
 const { items, navigation, recordatorioList, setRecordatorioList } = props;
  //console.log('empresaList');
  return (
   <View>
  <FlatList
   data={items}
   renderItem={data => {
    return (
     <Card>
      <Recordatorio item={data.item} />
     </Card>
   
   );
   }}
   keyExtractor={item => item.id}
   />
  </View>
);
}

export default RecordatorioList;
