//NoteBelongs.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions} from "react-native";
import { theme } from '../../constants';
import { useNavigation } from "@react-navigation/native";

const NoteBelongs = ({ note, onSelect }) => {

  const navigation = useNavigation();

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
          <TouchableOpacity onPress={() => NavigationPreloadManager.navigate("PayScreen")} style={noteBelongstyles.button}>
            <Text style={noteBelongstyles.textButton}>Pagar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
};
const noteBelongstyles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginVertical: 2,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: theme.colors.otherWhite,
    display: 'flex',
    marginVertical: 8,
  },
  textNro:{
    fontWeight: 'bold',
    fontSize: 18,
    color: theme.colors.tertiary
  },
  textDate:{
    fontSize: 16,
    color: theme.colors.secondaryText,
  },
  amount:{
    fontWeight: 'bold',
    fontSize: 20,
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
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default NoteBelongs;