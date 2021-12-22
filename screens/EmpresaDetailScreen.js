import React from "react";
import { Text, View } from "react-native";
//importo hook de redux
import { useSelector, useDispatch } from 'react-redux';
import Card from "../components/Card";
import Empresa from "../components/Empresa";

const EmpresaDetailScreen = () => {

 const empresa = useSelector(state => state.empresas.selected);
 console.log("empresa: ", empresa);

 return (
  <View>
   {empresa && (<Card>
    <Empresa item={empresa} />
   </Card>
   )}
   {!empresa && (<Text>{"No se ha seleccionado una empresa"}</Text>
   )}
  </View>
 );
}

export default EmpresaDetailScreen;