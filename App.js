import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import ClientSearchScreen from './src/screens/ClientSearchScreen';
import NewScreen  from './src/screens/NewScreen'
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

const App = () => {
  // let [fontsLoaded] = useFonts({
  //   Montserrat_400Regular,
  //   Montserrat_700Bold,
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }
  return (
    <MenuProvider>
    
    <ClientSearchScreen />
    {/* <NewScreen/> */}
    {/* <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.textRegular}>Este texto es Montserrat Normal.</Text>
        <Text style={styles.textBold}>Este texto es Montserrat Bold.</Text>
      </View>
    </View> */}
    </MenuProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textRegular: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 16,
  },
  textBold: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 16,
  },
});

export default App;
