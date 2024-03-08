//NoteItem.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { noteItemstyles } from "./styles/NoteItemStyles";

const NoteItem = ({ note, onSelect }) => {
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
          <TouchableOpacity onPress={() => {}} style={noteItemstyles.button}>
            <Text style={noteItemstyles.textButton}>Pagar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
};

export default NoteItem;