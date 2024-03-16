import React from "react";
import { MenuProvider } from "react-native-popup-menu";
import AppNavigator from "./src/navigation/AppNavigator";
import { View, Alert } from 'react-native';
import SimpleButton from "./src/utils/SimpleButton";

const App = () => {
  const handleButton1Press = () => {
  };
  const handleButtonPress = () => {
    Alert.alert('Botón Presionado', 'Has presionado el botón', [
      { text: 'OK' },
    ]);
  };

  return (
    <MenuProvider>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 40}}>

      <SimpleButton
        text="Boton 1"
        onPress={handleButton1Press}
      />
      <SimpleButton
        text="Boton 2"
        onPress={handleButtonPress}
      />
      <SimpleButton
        text="Boton 3"
        onPress={handleButtonPress}
        width={200}
      />
      {/* <AppNavigator /> */}
    </View>
    </MenuProvider>
  );
};

export default App;