//ClientSelectedPayment.js
import React, { useState } from "react";
import { SafeAreaView, TouchableOpacity, Text, FlatList, StyleSheet, View } from 'react-native';
import { NOTE_DATA, DATA, theme } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import ClientDebit from '../components/ClientDebit';
import ClientItem from "../components/ClientItem";

const ClientPaymentSelectedScreen = ({ route }) => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState('Notas Pendientes');
  const { itemName } = route.params;
  const title = 'Notas Pendientes';
  const OPCIONES = ['Notas Pendientes', 'Notas Pagadas', 'Notas Todas']
  const client = DATA.find((item) => item.name == itemName);
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

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

})

export default ClientPaymentSelectedScreen;