// NewScreen.js
import React, { useState, useCallback } from "react";
import { SafeAreaView, StyleSheet, View, FlatList, Text } from "react-native";
import ProfileHeader from "../components/ProfileHeader";
import StoryItem from "../components/StoryItem";
import { theme } from "../../constants";
import DropdownSelector from "../components/DropdownSelector";
import Cascading from "../animation/CascadingFadeInView";
import { useFocusEffect } from "@react-navigation/native";

const NewScreen = () => {
  const [selectedOption, setSelectedOption] = useState("Hoy");
  const OPCIONES = ['Hoy', 'Esta Semana', 'Este Mes', 'Todo'];
  const title = 'Actividad';

  const HISTORY_DATA = [
    {
      id: "1",
      name: "Samuel Herbas",
      amount: "130.00",
      date: "2024-03-01T12:32:00",
      note: "150",
    },
    { id: "2", 
      name: "Henry Peña", 
      amount: "70.00", 
      date: "2024-03-01T09:16:00", 
      note: "170" },
    {
      id: "3",
      name: "Louisa Cespedez",
      amount: "200.00",
      date: "2024-03-01T06:30:00",
      note: "171"
    },
    {
      id: "4",
      name: "Samuel Herbas",
      amount: "130.00",
      date: "2024-03-01T12:32:00",
      note: "151",
    },
    { id: "5", 
      name: "Henry Peña",
      amount: "70.00", 
      date: "2024-03-01T09:16:00",
      note: "161" },
    {
      id: "6",
      name: "Louisa Cespedez",
      amount: "200.00",
      date: "2024-03-01T06:30:00",
      note: "172",
    },
    {
      id: "7",
      name: "Samuel Herbas",
      amount: "130.00",
      date: "2024-03-01T12:32:00",
      note: "150"
    },
    { id: "8", 
      name: "Henry Peña", 
      amount: "70.00", 
      date: "2024-03-01T09:16:00", 
      note:"121" },
    {
      id: "9",
      name: "Louisa Cespedez",
      amount: "200.00",
      date: "2024-03-01T06:30:00",
      note: "161",
    },
    {
      id: "10",
      name: "Samuel Herbas",
      amount: "130.00",
      date: "2024-03-01T12:32:00",
      note: "150",
    },
    {
      id: "11",
      name: "Henry Peña",
      amount: "70.00",
      date: "2024-03-01T09:16:00",
      note: "180",
    },
    {
      id: "12",
      name: "Louisa Cespedez",
      amount: "200.00",
      date: "2024-03-01T06:30:00",
      note: "190",
    },
  ];
  
  const renderHistoryItem = ({ item, index }) => (
    <Cascading delay={400 + 80 * index} animationKey={animationKey}>
      <StoryItem
        story={item}
        onSelect={() => {
          /* item select */
        }}
      />
    </Cascading>
  );
  const [animationKey, setAnimationKey] = useState(Date.now());
  useFocusEffect(
    useCallback(() => {
      setAnimationKey(Date.now());
    }, [])
  );
  const onOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <ProfileHeader userName="Jon Doe" />
        <Cascading delay={300} animationKey={animationKey}>
          <DropdownSelector
            title={title}
            options={OPCIONES}
            selectedOption={selectedOption}
            onOptionChange={onOptionChange}
          />
        </Cascading>
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
