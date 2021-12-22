import * as FileSystem from 'expo-file-system';
import {
 API_URL
} from "../../components/database";
import { insertObra, fetchObras } from "../../db";

export const SELECT_OBRA = 'SELECT_OBRA';
export const ADD_OBRA = 'ADD_OBRA';
export const EDIT_OBRA = 'EDIT_OBRA';
export const REMOVE_OBRA = 'REMOVE_OBRA';
export const ADD_OBRA_DB = 'ADD_EMPRESA_DB';
export const LOAD_OBRAS = 'LOAD_OBRA'

//seleccionar una obra
export const selectObra = (id) => ({
 type: SELECT_OBRA,
 idObra: id
});

//agregar una obra a la lista de obras
export const addObra = (obra) => ({
 type: ADD_OBRA,
 obra: obra
});

export const addObraImage = (obra) => {
 return async dispatch => {
  const fileName = obra.image.split('/').pop();
  const Path = FileSystem.documentDirectory + fileName;
  try {
   FileSystem.moveAsync({
    from: image,
    to: Path
   })
  } catch (err) {
   console.log(err.message);
   throw err;

  }
  dispatch({ type: ADD_OBRA, obra: obra });
 }
}

export const addObraDb = (obra) => {
 return async dispatch => {
  //copio la imagen
  /*console.log('imagen', obra.image);
  const fileName = obra.image.split('/').pop();
  const Path = FileSystem.documentDirectory + fileName;
  try {
   FileSystem.moveAsync({
    from: obra.image,
    to: Path
   })
  } catch (err) {
   console.log(err.message);
   throw err;

  }*/

  const result = await insertObra(
   obra.idEmpresa,
   obra.establecimiento,
   obra.nroEstablecimiento,
   obra.ubicacion,
   obra.nombreContacto,
   obra.telefonoContacto,
   obra.observaciones,
   /*Path*/
   obra.image
  );
  console.log('Resultado DB: ', result);

  dispatch({
   type: ADD_OBRA_DB, payload: {
    id: result.insertedId,
    idEmpresa: obra.idEmpresa,
    establecimiento: obra.establecimiento,
    nroEstablecimiento: obra.nroEstablecimeinto,
    ubicacion: obra.ubicacion,
    nombreContacto: obra.nombreContacto,
    telefono: obra.telefonoContacto,
    observaciones: obra.observaciones,
    image: obra.image /*Path*/
   
  }})
 }
};

//consulta las obras en sqlite
export const loadObras = () => {
  return async dispatch => {
    try {
      const result = await fetchObras();

      console.log('resultados select obras: ', result.rows);

      dispatch({ type: LOAD_OBRAS, listaObras: result.rows});


    } catch (err) {
      throw err;
    }
  }
};

