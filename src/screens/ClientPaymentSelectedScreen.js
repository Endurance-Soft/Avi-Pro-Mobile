//ClientSelectedPayment.js
import React, { useState } from "react";
import { SafeAreaView, TouchableOpacity, Text, FlatList, StyleSheet, View } from 'react-native';
import { NOTE_DATA, DATA, theme } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import ClientDebit from '../components/ClientDebit';
import NoteBelongs from "../components/NoteBelongs";
import {styles} from '../components/styles/DropdownSelectorStyles';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from "react-native-popup-menu";

const ClientPaymentSelectedScreen = ({ route }) => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState('Notas Pendientes');
  const { itemName, itemNote } = route.params;
  const [menuVisible, setMenuVisible] = useState(false);
  const OPCIONES = ['Notas Pendientes', 'Notas Pagadas', 'Notas Todas']
  const client = DATA.find((item) => item.name == itemName);
  const filteredData = NOTE_DATA.filter((obj) => obj.note == itemNote);
  
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  const toggleMenu = () => {
    setMenuVisible(prevState => !prevState);
  };
  const renderItem = ({ item }) => (
    <NoteBelongs note={item} onSelect={() => {}}/>
  );

  return (
    <SafeAreaView style={styles2.container}>
      <View style={styles2.headerWithComponents}>
        <View style={styles2.header}>
          <TouchableOpacity style={styles2.back} onPress={() => navigation.goBack()}>
            <Icon name="back" size={30} color="black" />
          </TouchableOpacity>
          <View style={styles2.headerCenter}>
            <View style={styles2.text}>
              <Text style={styles2.code}>{client.code}</Text>
              <Text style={styles2.name}>{client.name}</Text>
            </View>
          </View>
        </View>
        <ClientDebit clientInfo={client} />
      </View>
      <View style={styles2.containerButtons}>
        <TouchableOpacity onPress={() => { }} style={styles2.buttonPDF}>
          <Text style={styles2.textPDF}>PDF </Text>
          <Feather name="download" size={24} color={theme.colors.primary} />
        </TouchableOpacity>
        <View>
          <Menu opened={menuVisible} onBackdropPress={() => setMenuVisible(false)}>
            <MenuTrigger onPress={toggleMenu} style={styles.trigger}>
              <View style={[styles.menuTrigger, {width: 220}]}>
                <View style={styles.menuTriggerInter}>
                  <Text style={styles.triggerText}>
                    {selectedOption.charAt(0).toUpperCase() + selectedOption.slice(1)}
                  </Text>
                </View>
                <FontAwesome5 name={menuVisible ? "chevron-up" : "chevron-down"} size={20} color="white" />
              </View>
            </MenuTrigger>
            <MenuOptions customStyles={{ optionsContainer: styles.optionsContainer, optionsWrapper: styles.optionsWrapper, }}>
              {OPCIONES.map((option) => (
                <MenuOption key={option} onSelect={() => { setSelectedOption(option); setMenuVisible(false); }}>
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
      </View>
      <View style={styles.listContainer}>
        <FlatList
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
      </View> 
    </SafeAreaView>
  )
};

const styles2 = StyleSheet.create({
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
    paddingBottom: 5,
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
    padding: 20,
  },
  code: {
    fontSize: 18,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24,
    textTransform: 'uppercase',
  },
  containerButtons: {
    marginVertical: 20,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonPDF: {
    flexDirection: 'row',
    backgroundColor: theme.colors.tertiary,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
  },
  textPDF:{
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  listContainer:{
    flex: 1,
    marginTop: 20,
  },
})

export default ClientPaymentSelectedScreen;