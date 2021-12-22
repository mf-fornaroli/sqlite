import { Alert } from 'react-native';

import { URL_AUTH_SIGNUP, URL_AUTH_LOGIN } from '../../constants/database';

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';

const ERROR_MESSAGE = {
  'EMAIL_EXISTS': 'El email ya está registrado',
  'EMAIL_NOT_FOUND': 'El email no está registrado',
  'WEAK_PASSWORD':'El password debe tener al menos seis caracteres'
};


export const signup = (email, password) => {
 return async dispatch => {
  const response = await fetch(URL_AUTH_SIGNUP, {
   method: 'POST',
   header: {
    'Content-Type': 'application/json',
   },
   body: JSON.stringify({
    email,
    password,
    returnSecureToken: true,
   }),
  });
  console.log('signup');
  if (!response.ok) {
   const errorResponse = await response.json();
   
   const errorMessage = errorResponse.error.message;

   const errorID = errorMessage.split(':')[0];
console.log(errorID);
   const message = ERROR_MESSAGE[errorID];

console.log('errormeme', ERROR_MESSAGE[errorID]);
   console.log('message');
  console.log(message);
  
   //throw new Error(message);
   Alert.alert('Ha ocurrido un error', message,
   [{text: 'OK' }]);
  
  } else {
  const data = await response.json();

  dispatch({
   type: SIGNUP,
   token: data.idToken,
   userId: data.localId,
  });
  }
 }
};

export const login = (email, password) => {
 return async dispatch => {
  const response = await fetch(URL_AUTH_LOGIN, {
   method: 'POST',
   header: {
    'Content-Type': 'application/json',
   },
   body: JSON.stringify({
    email,
    password,
    returnSecureToken: true,
   }),
  });

  if (!response.ok) {
   const errorResponse = await response.json();
   const errorID = errorResponse.error.message;

  const message = errorID in ERROR_MESSAGE 
   ? ERROR_MESSAGE[errorID]
   : 'Intente nuevamente';

   //throw new Error(message);
   Alert.alert('Ha ocurrido un error', message,
   [{text: 'OK' }]);

  } else {
  const data = await response.json();

  dispatch({
   type: LOGIN,
   token: data.idToken,
   userId: data.localId,
  });
  }
 }
}