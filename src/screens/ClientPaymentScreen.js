//ClientPayment.js
import React, { useState } from "react";
import { SafeAreaView, TouchableOpacity, Text, FlatList, StyleSheet, View } from 'react-native';
import { DATA, HISTORY_DATA2, theme } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import ClientDebit from '../components/ClientDebit';
import NoteItem from "../components/NoteItem";
import DropdownSelector from "../components/DropdownSelector";

const ClientPaymentScreen = ({ route }) => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState('Pendientes');
  const { clientId } = route.params;
  const title = 'Notas';
  const OPCIONES = ['Pendientes', 'Pagadas', 'Todas']
  const client = DATA.find((item) => item.id == clientId);
  const filteredData = HISTORY_DATA2.filter((obj) => obj.name == client.name);
  
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const renderItem = ({ item }) => (
    <NoteItem note={item} onSelect={() => navigation.navigate('ClientPaymentSelectedScreen', {itemName: item.name})}/>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerWithComponents}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
            <Icon name="back" size={30} color="black" />
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <View style={styles.text}>
              <Text style={styles.code}>{client.code}</Text>
              <Text style={styles.name}>{client.name}</Text>
            </View>
          </View>
        </View>
        <ClientDebit clientInfo={client} />
        <DropdownSelector
          title={title}
          options={OPCIONES}  
          selectedOption= {selectedOption}
          onOptionChange= {handleOptionChange}
        />
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
  listContainer:{
    flex: 1,
    marginTop: 20,
  },
})

export default ClientPaymentScreen;