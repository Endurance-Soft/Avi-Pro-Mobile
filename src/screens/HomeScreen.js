// NewScreen.js
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, FlatList, Text } from "react-native";
import ProfileHeader from "../components/ProfileHeader";
import StoryItem from "../components/StoryItem";
import { HISTORY_DATA, theme } from "../../constants";
import DropdownSelector from "../components/DropdownSelector";
import { StatusBar } from "expo-status-bar";

const secondary = theme.colors.secondary;

const NewScreen = () => {
  const [selectedOption, setSelectedOption] = useState("Hoy");
  const renderHistoryItem = ({ item }) => (
    <StoryItem
      story={item}
      onSelect={() => {
        /*item select*/
      }}
    />
  );

  const onOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="ligth" backgroundColor={secondary} />
      <View style={styles.header}>
        <ProfileHeader userName="Jon Doe" />
        <DropdownSelector
          selectedOption={selectedOption}
          onOptionChange={onOptionChange}
        />
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={HISTORY_DATA}
          renderItem={renderHistoryItem}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={<View style={{ height: 10 }} />}
          ListFooterComponent={<View style={{ height: 10 }} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    zIndex: 1,
    paddingTop: 40,
    paddingBottom: 18,
    paddingVertical: 20,
    backgroundColor: theme.colors.secondary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
  },
  listContainer: {
    backgroundColor: theme.colors.primary,
    flex: 1,
  },
});

export default NewScreen;
