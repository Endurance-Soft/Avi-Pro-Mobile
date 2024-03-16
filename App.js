import React, { useState } from "react";
import { Text, View, Dimensions } from "react-native";
import { MenuProvider } from "react-native-popup-menu";
import AppNavigator from "./src/navigation/AppNavigator";
import BorderBox from "./src/utils/BorderBox";

const width = Dimensions.get("window").width;

const App = () => {
  const [pressCount, setPressCount] = useState(0);
  return (
    <MenuProvider>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <BorderBox onPress={() => setPressCount(pressCount + 1)} style={{ alignSelf: 'center', marginTop: 50 }}>
          <Text>{`Presionado ${pressCount} veces`}</Text>
        </BorderBox>
        <BorderBox onPress={() => setPressCount(pressCount + 1)} style={{ alignSelf: 'center', marginTop: 50, width: width-40 }}>
          <Text>Contenido</Text>
        </BorderBox>
      </View>
      {/* <AppNavigator /> */}
    </MenuProvider>
  );
};

export default App;
