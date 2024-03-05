// DropdownSelector.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Menu, MenuOptions, MenuOption, MenuTrigger } from "react-native-popup-menu";
import { theme } from "../../constants";

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
    marginHorizontal: 20,
    borderRadius: 20,
    backgroundColor: theme.colors.skyBlue,
    padding: 7,
    flexDirection: "row",
    justifyContent: 'flex-end',
  },
  label: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 20,
    flex:1
  },
  optionText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  menuTrigger: {
    flexDirection: "row",
    alignItems: 'center',
    elevation: 5,
      paddingVertical: 12,
      paddingHorizontal: 25,
      backgroundColor: theme.colors.tertiary,
      borderRadius: 22,
      elevation: 5,
  },
  triggerText: {
    color: theme.colors.primary,
      fontSize: 16,
      fontWeight: "bold",
      marginRight: 12,
  },
  menuOptions: {
    zIndex: 1,
  },
});

export default DropdownSelector;