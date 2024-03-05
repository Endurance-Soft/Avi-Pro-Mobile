import React from 'react';
import { MenuProvider } from 'react-native-popup-menu';
import AppLoading from 'expo-app-loading';
import AppNavigator from './AppNavigator';

const App = () => {
  return (
    <MenuProvider>
      <AppNavigator />
    </MenuProvider>
  );
};

export default App;
