import React from 'react';
import { MenuProvider } from 'react-native-popup-menu';
import AppNavigator from './src/navigation/AppNavigator';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import useStore from './src/store';

const App = () => {
  return (
    <MenuProvider>
      <AppNavigator />
    </MenuProvider>
  );
};

export default App;
