//NoteItem.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { noteItemstyles } from "./styles/NoteItemStyles";
import { useNavigation } from "@react-navigation/native";

const NoteItem = ({ note, onSelect }) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => onSelect(note.name)} style={noteItemstyles}>
      <View style={noteItemstyles.container}>
        <View>
          <Text style={noteItemstyles.textNro}>N° {note.note}</Text>
          <Text style={noteItemstyles.textDate}>{note.date}</Text>
        </View>
        <View>
          <Text style={noteItemstyles.amount}>{note.amount} Bs</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("PayScreen")} style={noteItemstyles.button}>
            <Text style={noteItemstyles.textButton}>Pagar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
};

export default NoteItem;