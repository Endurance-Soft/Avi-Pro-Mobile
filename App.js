import React from 'react';
import { MenuProvider } from 'react-native-popup-menu';
import AppNavigator from './src/navigation/AppNavigator';
import { View, Alert } from 'react-native';
import SimpleButton from './SimpleButton';
import { Text, FlatList, StyleSheet } from 'react-native';
import useStore from './src/store';

const App = () => {
  const showAlert = () => {
    Alert.alert('Botón Presionado', 'Has presionado el botón', [
      { text: 'OK' },
    ]);
  };

  return (
    <MenuProvider>
      {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <SimpleButton text=" a " onPress={showAlert} />
      <SimpleButton text=" a " onPress={showAlert} />
      <SimpleButton text="  a  " onPress={showAlert} />
      <SimpleButton text="   a   " onPress={showAlert} /> */}
      <AppNavigator />
    {/* </View> */}
    </MenuProvider>
  );
};

export default App;
