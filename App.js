import React from "react";
import { MenuProvider } from "react-native-popup-menu";
import AppNavigator from "./src/navigation/AppNavigator";

const App = () => {
  return (
    <MenuProvider>
      <AppNavigator/>
    </MenuProvider>
  );
};

export default App;
