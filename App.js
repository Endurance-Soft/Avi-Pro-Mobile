import React, { useState } from 'react';
import { SafeAreaView, Text, FlatList, StyleSheet, View } from 'react-native';
import SearchBar from './src/components/SearchBar';
import ClientItem from './src/components/ClientItem';
import { MenuProvider } from 'react-native-popup-menu';
import { StatusBar } from 'expo-status-bar';
import { DATA, theme } from './constants'
import ClientSearchScreen from './src/screens/ClientSearchScreen';

const App = () => {
  return (
    <MenuProvider>
    <ClientSearchScreen />
    </MenuProvider>
  );
};
export default App;
