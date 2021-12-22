import React from "react";
import { Text, View } from "react-native";
//importo hook de redux
import { useSelector, useDispatch } from 'react-redux';
import Card from "../components/Card";
import ObraDetail from "../components/ObraDetail";

const ObraDetailScreen = () => {

 const obra = useSelector(state => state.obras.selected);
 console.log("obra: ", obra);

 return (
  <View>
   {obra && (<Card>
    <ObraDetail item={obra} />
   </Card>
   )}
   {!obra && (<Text>{"No se ha seleccionado una obra"}</Text>
   )}
  </View>
 );
}

export default ObraDetailScreen;