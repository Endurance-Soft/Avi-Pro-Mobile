//NoteItem.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { theme } from "../../constants";
import BorderBox from "../pieces/BorderBox";

const NoteItem = ({ note, onSelect }) => {
  return (
    <BorderBox onPress={() => onSelect(note.name)} style={noteItemstyles.container}>
        <View>
          <Text style={noteItemstyles.textNro}>{note.nro_nota}</Text>
          <Text style={noteItemstyles.textDate}>{note.Fecha_venta}</Text>
        </View>
        <View>
          <Text style={noteItemstyles.amount}>{note.Saldo_pendiente}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => {}} style={noteItemstyles.button}>
            <Text style={noteItemstyles.textButton}>Pagar</Text>
          </TouchableOpacity>
        </View>
    </BorderBox>
  )
};
const noteItemstyles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 8,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: theme.colors.otherWhite,
  },
  textNro:{
    fontWeight: 'bold',
    fontSize: 16,
    color: theme.colors.tertiary
  },
  textDate:{
    fontSize: 16,
    color: theme.colors.secondaryText,
  },
  amount:{
    fontWeight: 'bold',
    fontSize: 16,
    color: theme.colors.green,
  },
  button:{
    backgroundColor: theme.colors.tertiary,
    paddingHorizontal: 20,
    paddingVertical:10,
    borderRadius: 22,
  },
  textButton:{
    color: theme.colors.primary,
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: "bold",
  },
});
export default NoteItem;