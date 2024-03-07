//ClientPayment.js
import React, { useState } from "react";
import { SafeAreaView, TouchableOpacity, Text, FlatList, StyleSheet, View } from 'react-native';
import { DATA, theme } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import ClientDebit from '../components/ClientDebit';

const secondary = theme.colors.secondary;

const ClientPaymentScreen = ({ route }) => {
  const navigation = useNavigation();
  const { clientId } = route.params;
  const client = DATA.find((item) => item.id == clientId);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
          <Icon name="back" size={30} color="black" />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <View style={styles.text}>
            <Text style={styles.code}>{client.code}</Text>
            <Text style={styles.name}>{client.name}</Text>
          </View>
          <ClientDebit 
            clientInfo = {client}
          /> 
        </View>

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
  header: {
    zIndex: 1,
    backgroundColor: theme.colors.secondary,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    elevation: 7,
    paddingVertical: 20,
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
  text:{
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

export default ClientPaymentScreen;