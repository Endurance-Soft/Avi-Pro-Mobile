// NewScreen.js
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, FlatList, Text } from "react-native";
import ProfileHeader from "../components/ProfileHeader";
import StoryItem from "../components/StoryItem";
import { theme } from "../../constants";
import DropdownSelector from "../components/DropdownSelector";
import { StatusBar } from 'expo-status-bar';

const HISTORY_DATA = [
    { id: '1', name: 'Samuel Herbas', amount: '130.00', date: '2024-03-01T12:32:00' },
    { id: '2', name: 'Henry Peña', amount: '70.00', date: '2024-03-01T09:16:00' },
    { id: '3', name: 'Louisa Cespedez', amount: '200.00', date: '2024-03-01T06:30:00' },
    { id: '4', name: 'Samuel Herbas', amount: '130.00', date: '2024-03-01T12:32:00' },
    { id: '5', name: 'Henry Peña', amount: '70.00', date: '2024-03-01T09:16:00' },
    { id: '6', name: 'Louisa Cespedez', amount: '200.00', date: '2024-03-01T06:30:00' },
    { id: '7', name: 'Samuel Herbas', amount: '130.00', date: '2024-03-01T12:32:00' },
    { id: '8', name: 'Henry Peña', amount: '70.00', date: '2024-03-01T09:16:00' },
    { id: '9', name: 'Louisa Cespedez', amount: '200.00', date: '2024-03-01T06:30:00' },
    { id: '10', name: 'Samuel Herbas', amount: '130.00', date: '2024-03-01T12:32:00' },
    { id: '11', name: 'Henry Peña', amount: '70.00', date: '2024-03-01T09:16:00' },
    { id: '12', name: 'Louisa Cespedez', amount: '200.00', date: '2024-03-01T06:30:00' },
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
    <SafeAreaView style={styles.safeArea}>
        <StatusBar style="ligth" backgroundColor='#bbe6ec'/>
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
    safeArea: {
        flex:1,
    },
    header: {
        zIndex: 1,
        paddingTop: 40,
        paddingBottom:18,
        paddingVertical: 20,
        backgroundColor: theme.colors.secondary,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        elevation: 5,
    },
    listContainer: {
        backgroundColor: theme.colors.,
     flex:1,
    },
  });

export default NewScreen;
