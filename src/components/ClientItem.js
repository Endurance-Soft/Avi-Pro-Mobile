import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { styles } from "./styles/ClientItemStyles";

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

export default ClientItem;
