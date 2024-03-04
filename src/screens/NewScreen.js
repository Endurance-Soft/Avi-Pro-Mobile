// NewScreen.js
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, FlatList, Text } from "react-native";
import ProfileHeader from "../components/ProfileHeader";
import SearchBar from "../components/SearchBar";
import StoryItem from "../components/StoryItem";
import { DATA, theme } from "../../constants";
import DropdownSelector from "../components/DropdownSelector";

const HISTORY_DATA = [
    { id: '1', name: 'Samuel Herbas', amount: '130.00', date: '2024-03-01T12:32:00' },
    { id: '2', name: 'Henry Peña', amount: '70.00', date: '2024-03-01T09:16:00' },
    { id: '3', name: 'Louisa Cespedez', amount: '200.00', date: '2024-03-01T06:30:00' },
  ];
const NewScreen = () => {
    const [selectedOption, setSelectedOption] = useState("today");

    const renderHistoryItem = ({ item }) => (
    <StoryItem story={item} onSelect={() => { /*item select*/ }} />
  );

  const onOptionChange = (option) => {
    setSelectedOption(option);

  };

  return (
    <SafeAreaView>
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
        keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    header: {
        paddingTop: 100,
    //   paddingHorizontal: 20,
    //   paddingVertical: 20,
      backgroundColor: theme.colors.secondary,
    },
    // up: {
    //   zIndex: 1,
    //   backgroundColor: theme.colors.secondary,
    //   borderBottomLeftRadius:22,
    //   borderBottomRightRadius:22,
    //   elevation: 7,
    // },
    // container: {
    //   flex: 1,
    //   paddingTop: 15,
    //   backgroundColor: theme.colors.primary,
    // },
    // header: {
    //   flexDirection: 'row',
    //   paddingHorizontal: 20,
    //   paddingVertical: 20,
    //   alignItems: 'center',
    // },
    // back: {
    //   backgroundColor: theme.colors.skyBlue,
    //   borderRadius: 20,
    //   width: 60,
    //   height: 60,
    // },
    // aviContainer: {
    //   flex:1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    // },
    // avi: {
    //   fontWeight: 'bold',
    //   fontSize: 22,
    //   marginRight: 60,
    // },
    // listContainer: {
    // flex:1,
    //   borderRadius: 15,
    // },
  });

export default NewScreen;
