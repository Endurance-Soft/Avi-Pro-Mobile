// DropdownSelector.js
import React, { useState, useCallback } from "react";
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
            <View style={styles.menuTriggerInter}>
              <Text style={styles.triggerText}>
                {selectedOption.charAt(0).toUpperCase() + selectedOption.slice(1)}
              </Text>
            </View>
            <FontAwesome5 name={menuVisible ? "chevron-up" : "chevron-down"} size={20} color="white" />
          </View>
        </MenuTrigger>
        <MenuOptions customStyles={{ optionsContainer: styles.optionsContainer, optionsWrapper: styles.optionsWrapper, }}>
          {['Hoy', 'Esta Semana', 'Este Mes', 'Todo'].map((option) => (
            <MenuOption key={option} onSelect={() => { onOptionChange(option); setMenuVisible(false); }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.optionsText}>{option}</Text>
                {selectedOption === option && (
                  <FontAwesome5 name="check" size={17} color="white" style={{ marginLeft: 10 }} />
                )}
              </View>
            </MenuOption>
          ))}
        </MenuOptions>
      </Menu>
    </View>
  );
};

export default DropdownSelector;