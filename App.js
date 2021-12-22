import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Header from './components/Header';
import MainNavigator from './navigation';

//Provider Redux
import { Provider } from 'react-redux';

//redux store
import store from './store';

//db sqlite

import { init, deleteTables } from './db';

//inicializo la db

init()
  .then(() => console.log('Database initialized'))
  .catch((err) => {
    console.log('Database fail connect');
    console.log(err.message);
  });

/*deleteTables()
  .then(() => console.log('Se han borrado las tablas'))
  .catch((err) => {
    console.log("Error al borrar tablas");
    console.log(err.message);
  });*/

const fetchFont = async () => {
  await Font.loadAsync(
    {
      'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'roboto-bold': require('./assets/fonts/Roboto-Medium.ttf'),
    })
};

export default function App() {
  const [loaded, error] = Font.useFonts({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'roboto-bold': require('./assets/fonts/Roboto-Medium.ttf'),
  })

  if (!loaded) return <AppLoading />

  return (
    <>
      <Provider store={store}>
        <MainNavigator />
        <StatusBar style="auto" />
      </Provider>
     
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
