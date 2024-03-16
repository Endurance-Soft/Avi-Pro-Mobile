import React from "react";
import { View } from "react-native";
import { MenuProvider } from "react-native-popup-menu";
import AppNavigator from "./src/navigation/AppNavigator";
import StyledText from "./src/utils/StyledText";

const App = () => {
  return (
    <MenuProvider>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ alignItems: "center", marginTop: 20, gap:20 }}>
          <StyledText regularText>Texto Regular</StyledText>
          <StyledText boldText>Texto en Negrita</StyledText>
          <View style={{ backgroundColor: 'gray'}}>
            <StyledText buttonText>Texto de Botón</StyledText>
          </View>
        </View>
      </View>
    </MenuProvider>
  );
};

export default App;