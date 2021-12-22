import React from 'react';
import * as ImagePicker from 'expo-image-picker';
import COLORS from '../constants/Colors';
import { useState } from 'react';
import { Alert, Text, View, StyleSheet , Button, Image} from 'react-native';

const ImageSelector = (props) => {
 //estado interno correspondiente al resultado de la camara. URI con la ubciación del archivo
 const [pickedUri, setPickedUri] = useState();
 const verifyPermissions = async () => {
  const { status } = await ImagePicker.requestCameraPermissionsAsync();
  if (status !== 'granted') {
   Alert.alert('Permisos insuficientes',
    'Necesita dar permisos de la cámara para usar la aplicación',
    [{ text: 'OK' }]);
   return false;
  }
  return true
 }

 const handlerTakeImage = async () => {
  const isCameraOk = await verifyPermissions();
  if (!isCameraOk) return;
  
  const image = await ImagePicker.launchCameraAsync({
   allowsEditing: true,
   aspect: [16, 9],
   quality: 0.8,
  });

   setPickedUri(image.uri);
   props.onImage(image.uri); //callback que viene en las propiedades


 };

 return (
  <View style = {styles.container}>
   <View style = {styles.preview}>
       {pickedUri ? (<Image source={{ uri: pickedUri }} style={styles.image}/>) 
     : (<Text>{'No hay Imagen '}</Text>)
    }
    
   
   </View>
   <Button
    title="tomar foto"
    color={COLORS.primary}
    onPress={handlerTakeImage} />
  </View>

 )
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 4,
  },
  preview: {
    width: '100%',
    height: 60,
    marginBottom: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.accent,
    borderWidth: 1,
  },
 image: {
  width: '100%',
  height: '100%'
 }
})



export default ImageSelector;