import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { theme } from '../../constants';
const windowWidth = Dimensions.get('window').width;

const ClientItem = ({ client, onSelect }) => {
  return (
    <TouchableOpacity onPress={() => onSelect(client.id)} style={styles.item}>
      <View style={styles.iconContainer}>
        <View style={styles.iconWraped}>
          <Text style={styles.icon}>{client.name.charAt(0)}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{client.name}</Text>
          <View style={styles.codeContainer}>
            <MaterialCommunityIcons name="account" size={19} color="black" />
            <Text style={styles.code}>{client.code}</Text>
          </View>
          <View style={styles.codeContainer}>
            <FontAwesome5 name="money-bill" size={13} color="black" />
            <Text style={styles.balance}>{client.balance}</Text>
          </View>
        </View>
      </View>
      <View style={styles.lineContainer}>
        <View style={styles.line}></View>
      </View>
      <View style={styles.notesContainer}>
        <Text style={styles.notes}>
          Notas pendientes: {client.pendingNotes}
        </Text>
        <Text style={styles.lastPayment}>
          Ultimo pago: {client.lastPayment}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: { 
    paddingVertical: 13,
    paddingHorizontal: 17,
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: theme.colors.otherWhite,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWraped: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.tertiary,
    borderRadius: 20,
    width: 70,
    height: 70,
  },
  icon: {
    color: theme.colors.primary,
    fontSize: 30,
    fontWeight: 'medium',
  },
  detailsContainer: {
    marginLeft: 17,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: theme.colors.tertiary
  },
  codeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  code: {
    fontSize: 16,
    marginLeft: 5,
    color: theme.colors.secondaryText,
  },
  balance: {
    fontSize: 16,
    marginLeft: 8,
    color: theme.colors.secondaryText,
  },
  notesContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  notes: {
    fontSize: 16,
    color: theme.colors.secondaryText,
  },
  lastPayment: {
    fontSize: 16,
    color: theme.colors.secondaryText,
  },
  lineContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    marginVertical: 13 ,
    backgroundColor: theme.colors.otherWhite,
    width: windowWidth*0.8,
    height: 2,
  },
});
export default ClientItem;
