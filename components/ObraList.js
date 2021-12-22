import React from 'react';
import { FlatList, View } from 'react-native';
import Obra from './Obra';
import Card from './Card';
import { FAB } from 'react-native-elements';
import Colors from '../constants/Colors';

const ObraList = (props) => {
 const { navigation, items } = props;

  return (
    <View>
        <FlatList
          data={items}
          renderItem={data => {
            return (
              <Card>
                <Obra item={data.item} navigation={navigation} />
              </Card>
            );
          }}
          keyExtractor={item => item.id} />
   <FAB title="+"
      style={{
       borderRadius: 100,
       width: 50,
      height: 50
      }}
      color={Colors.accent}
      placement='right'
      onPress={() => navigation.navigate('Obra')}
      />
    </View>
  );
  
}
export default ObraList;
