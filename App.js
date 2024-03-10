import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import AppNavigator from './src/navigation/AppNavigator';
import PassCodeKeyboard from './PassCodeKeyboard'
import PassCodeV1 from './PassCodeKeyboard';


const App = () => {
  return (
    <MenuProvider>
      <AppNavigator />
    </MenuProvider>
  );
};
export default App;
