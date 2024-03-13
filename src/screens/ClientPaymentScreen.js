//ClientPayment.js
import React, { useState, useCallback } from "react";
import { SafeAreaView, TouchableOpacity, Text, FlatList, StyleSheet, View } from 'react-native';
import { DATA, HISTORY_DATA2, theme } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import ClientDebit from '../components/ClientDebit';
import NoteItem from "../components/NoteItem";
import DropdownSelector from "../components/DropdownSelector";
import Cascading from "../animation/CascadingFadeInView";
import { useFocusEffect } from "@react-navigation/native";
import ClientItem from "../components/ClientItem";


const ClientPaymentScreen = ({ route }) => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState('Pendientes');
  // // const { clientId } = route.params;
  const { itemClient } = route.params;
  // console.log(itemClient);
  const title = 'Notas';
  const OPCIONES = ['Pendientes', 'Pagadas', 'Todas']
  // // const client = DATA.find((item) => item.id == clientId);
  // const client = itemClient;
  // const filteredData = itemClient.
  // const filteredData = HISTORY_DATA2.filter((obj) => obj.name == client.name);
  const [animationKey, setAnimationKey] = useState(Date.now());
  useFocusEffect(
    useCallback(() => {
      setAnimationKey(Date.now());
    }, [])
  );
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  const renderItem = ({ item, index }) => (
    <Cascading delay={400 + 80 * index} animationKey={animationKey}>
      <NoteItem note={item} onSelect={() => {}}/>
    </Cascading>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerWithComponents}>
      <Cascading delay={100} animationKey={animationKey}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.back} onPress={() => navigation.navigate("ClientSearchScreen")}>
            <Icon name="back" size={30} color="black" />
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <View style={styles.text}>
              <Text style={styles.code}>{ClientItem.code}</Text>
              <Text style={styles.name}>{ClientItem.name}</Text>
            </View>
          </View>
        </View>
        </Cascading>
        <Cascading delay={200} animationKey={animationKey}>
        <ClientDebit clientInfo={ClientItem} />
        </Cascading>
        <Cascading delay={300} animationKey={animationKey}>
        <DropdownSelector
          title={title}
          options={OPCIONES}  
          selectedOption= {selectedOption}
          onOptionChange= {handleOptionChange}
        />
        </Cascading>
      </View>
      <View style={styles.listContainer}>
        <FlatList
            data={ClientItem.NotasPendientes}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ListHeaderComponent={<View style={{ height: 10 }} />}
            ListFooterComponent={<View style={{ height: 10 }} />}
        />
      </View> 
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: theme.colors.primary,
  },
  headerWithComponents: {
    zIndex: 1,
    backgroundColor: theme.colors.secondary,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    elevation: 7,
    paddingBottom: 20,
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  back: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.skyBlue,
    borderRadius: 20,
    width: 60,
    height: 60,
  },
  headerCenter: {
    alignItems: 'center',
  },
  text: {
    alignItems: 'center',
    paddingLeft: 20,
    paddingVertical: 15,

  },
  code: {
    fontSize: 15,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'uppercase',
  },
  listContainer:{
    flex: 1,
  },
})

export default ClientPaymentScreen;