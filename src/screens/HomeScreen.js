// NewScreen.js
import React, { useState, useEffect, useCallback } from "react";
import { SafeAreaView, StyleSheet, View, FlatList, Text } from "react-native";
import ProfileHeader from "../components/ProfileHeader";
import StoryItem from "../components/StoryItem";
import { HISTORY_DATA, theme } from "../../constants";
import DropdownSelector from "../components/DropdownSelector";
import Cascading from "../animation/CascadingFadeInView";
import { useFocusEffect } from "@react-navigation/native";
import userStore from "../store/userStore"; 
import {database} from "../../config/firebase";
import { doc, getDoc } from 'firebase/firestore';

const NewScreen = () => {
  const [selectedOption, setSelectedOption] = useState("Hoy");
  const OPCIONES = ['Hoy', 'Esta Semana', 'Este Mes', 'Todo'];
  const title = 'Actividad';
  const {user, setUser} = userStore();
  const [nombreF, setNombreF] = useState("");

  const fetchUserData = async () => {
    try{
      const docRef = doc(database, 'cobradores', user);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        const { nombre, empresa, email } = data;
        setNombreF(nombre);
      } else {
        console.log('Ningun documento!');
      
    }}catch(e){
      console.error("Error al obtener documento: ", e);
    }
  };

  useEffect(() => {
    fetchUserData();
  },[user]);


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
        <ProfileHeader userName={nombreF} />
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
