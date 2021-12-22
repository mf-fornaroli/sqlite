import React from 'react';
import { FlatList, View, Text } from 'react-native';
import Empresa from './Empresa';
import Card from './Card';
import { FAB } from 'react-native-elements';
import Colors from '../constants/Colors';
import { useDispatch } from 'react-redux';
import { selectEmpresa } from '../store/actions/empresa.action';





const EmpresaList = (props) => {
 
  const { items, navigation } = props;

  const dispatch = useDispatch();
  
  /*const handlerSelect = (id) => {
    dispatch(selectEmpresa(id));
    navigation.navigate("EmpresaDetail");
  }*/

  return (
   <View>
  <FlatList
   data={items}
        renderItem={data => {
          return (
            <Card>
                
              <Empresa item={data.item} navigation={navigation} />
            </Card>
   
          );
        }
        }
        keyExtractor={item => item.id}
       
   />
  <FAB title="+"
      style={{
       borderRadius: 100,
       width: 50,
      height: 50
      }}
      color={Colors.accent}
      placement='right'
      onPress={() => navigation.navigate('Empresa')}
  />
</View>
);
}

export default EmpresaList;
