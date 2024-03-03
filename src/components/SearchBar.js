// SearchBar.js
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { Dimensions } from "react-native";
import { theme } from '../../constants'

const windowWidth = Dimensions.get("window").width;
const searchBarStyles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: "row",
    padding: 8,
    paddingLeft: 12,
    backgroundColor: theme.colors.skyBlue,
    borderRadius: 22,
    alignItems: "center",
    marginHorizontal: windowWidth * 0.05,
    elevation: 5,
  },
  searchTextInput: {
    flex: 1,
    marginLeft: 7,
    marginRight: 10,
    fontSize: 17,
    color: theme.colors.primaryText,
  },
  trigger: {
    elevation: 5,
    paddingVertical: 12,
    paddingHorizontal: 25,
    backgroundColor: theme.colors.tertiary,
    borderRadius: 22,
  },
  triggerText: {
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 12,
  },
  optionsContainer: {
    paddingVertical: 15,
    marginTop: 55,
    marginLeft: 0,
    borderRadius: 20,
    width: 142,
    backgroundColor: theme.colors.tertiary,
    elevation: 5,
  },
  optionsWrapper: {
    marginLeft: 20,
  },
  optionsText: {
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: "bold",
  },
});

const SearchBar = ({
  searchQuery,
  setSearchQuery,
  selectedOption,
  onOptionChange,
}) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prevState) => !prevState);
  };

  return (
    <View style={searchBarStyles.container}>
      <Ionicons name="search" size={25} color="#2E3233" />
      <TextInput
        placeholder="Search..."
        style={searchBarStyles.searchTextInput}
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <Menu opened={menuVisible} onBackdropPress={() => setMenuVisible(false)}>
        <MenuTrigger onPress={toggleMenu} style={searchBarStyles.trigger}>
          <TouchableOpacity
            onPress={toggleMenu}
            activeOpacity={1}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={searchBarStyles.triggerText}>
              {selectedOption.charAt(0).toUpperCase() + selectedOption.slice(1)}
            </Text>
            <FontAwesome5
              name={menuVisible ? "chevron-up" : "chevron-down"}
              size={20}
              color="white"
            />
          </TouchableOpacity>
        </MenuTrigger>

        <MenuOptions
          customStyles={{
            optionsContainer: searchBarStyles.optionsContainer,
            optionsWrapper: searchBarStyles.optionsWrapper,
          }}
        >
          <MenuOption
            onSelect={() => {
              onOptionChange("cliente");
              setMenuVisible(false);
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={searchBarStyles.optionsText}>Cliente</Text>
              {selectedOption === "cliente" && (
                <FontAwesome5
                  name="check"
                  size={17}
                  color="white"
                  marginLeft={10}
                />
              )}
            </View>
          </MenuOption>
          <MenuOption
            onSelect={() => {
              onOptionChange("cuenta");
              setMenuVisible(false);
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={searchBarStyles.optionsText}>Cuenta</Text>
              {selectedOption === "cuenta" && (
                <FontAwesome5
                  name="check"
                  size={17}
                  color="white"
                  marginLeft={10}
                />
              )}
            </View>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};

export default SearchBar;
