// DropdownSelector.js
import React, { useState } from "react";
import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Menu, MenuOptions, MenuOption, MenuTrigger } from "react-native-popup-menu";
import {styles} from './styles/DropdownSelectorStyles'

const DropdownSelector = ({ selectedOption, onOptionChange }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(prevState => !prevState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <Text style={styles.optionText}>Actividad</Text>
      </View>
      <Menu opened={menuVisible} onBackdropPress={() => setMenuVisible(false)}>
        <MenuTrigger onPress={toggleMenu} style={styles.trigger}>
          <View style={styles.menuTrigger}>
            <Text style={styles.triggerText}>
              {selectedOption.charAt(0).toUpperCase() + selectedOption.slice(1)}
            </Text>
            <FontAwesome5 name={menuVisible ? "chevron-up" : "chevron-down"} size={20} color="white" />
          </View>
        </MenuTrigger>
        <MenuOptions customStyles={styles.menuOptions}>
          <MenuOption onSelect={() => { onOptionChange("Hoy"); setMenuVisible(false); }}>
            <Text style={styles.optionText}>Estoy cansado jefe</Text>
          </MenuOption>
          {/* Add  */}
        </MenuOptions>
      </Menu>
    </View>
  );
};

export default DropdownSelector;