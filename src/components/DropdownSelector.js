// DropdownSelector.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Menu, MenuOptions, MenuOption, MenuTrigger } from "react-native-popup-menu";

const DropdownSelector = ({ selectedOption, onOptionChange }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(prevState => !prevState);
  };

  return (
    <View style={styles.container}>
      <Menu opened={menuVisible} onBackdropPress={() => setMenuVisible(false)}>
        <MenuTrigger onPress={toggleMenu} style={styles.trigger}>
          <View style={styles.menuTrigger}>
            <Text style={styles.triggerText}>
              {selectedOption.charAt(0).toUpperCase() + selectedOption.slice(1)}
            </Text>
            <FontAwesome5 name={menuVisible ? "chevron-up" : "chevron-down"} size={20} color="#2E3233" />
          </View>
        </MenuTrigger>
        <MenuOptions customStyles={styles.menuOptions}>
          <MenuOption onSelect={() => { onOptionChange("today"); setMenuVisible(false); }}>
            <Text style={styles.optionText}>Hoy</Text>
          </MenuOption>
          {/* Add  */}
        </MenuOptions>
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E4E5E7",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  menuTrigger: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#007AFF",
    borderRadius: 20,
  },
  triggerText: {
    color: "white",
    marginRight: 5,
  },
  menuOptions: {
  },
  optionText: {
    padding: 10,
  },
});

export default DropdownSelector;