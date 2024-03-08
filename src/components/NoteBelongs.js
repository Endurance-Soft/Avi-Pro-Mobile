//NoteBelongs.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { noteBelongstyles } from "./styles/NoteBelongStyles";

const NoteBelongs = ({ note, onSelect }) => {
  return (
    <TouchableOpacity onPress={() => onSelect(note.name)} style={noteBelongstyles}>
      <View style={noteBelongstyles.container}>
        <View>
          <Text style={noteBelongstyles.textNro}>N° {note.note}</Text>
          <Text style={noteBelongstyles.textDate}>{note.date}</Text>
        </View>
        <View>
          <Text style={noteBelongstyles.amount}>{note.amount} Bs</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => {}} style={noteBelongstyles.button}>
            <Text style={noteBelongstyles.textButton}>Pagar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
};

export default NoteBelongs;