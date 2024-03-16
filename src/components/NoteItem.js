import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import { theme } from "../../constants";
import BorderBox from "../pieces/BorderBox";
import StyledText from "../utils/StyledText";

const NoteItem = ({ note, onSelect }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const animationHeight = useRef(new Animated.Value(100)).current;

  const toggleExpansion = () => {
    setExpanded(!expanded);
    Animated.timing(animationHeight, {
      toValue: expanded ? 100 : 250,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <TouchableWithoutFeedback onPress={toggleExpansion}>
      <Animated.View
        style={[
          noteItemstyles.container,
          { height: animationHeight },
        ]}
      >
      <View style={noteItemstyles.row}>
        <View style={noteItemstyles.textNro}>
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
      </View>
      <View style={[noteItemstyles.textLine, { marginTop: 15 }]}>
        <StyledText regularText>importe :</StyledText>
        <StyledText regularText>{note.importe_nota} Bs.</StyledText>
      </View>
      <View style={noteItemstyles.textLine}>
        <StyledText regularText>monto pagado :</StyledText>
        <StyledText regularText>{note.Monto_pagado} Bs.</StyledText>
      </View>
      <View style={noteItemstyles.textLine}>
        <StyledText regularText>saldo pendiente :</StyledText>
        <StyledText regularText>{note.Saldo_pendiente} Bs.</StyledText>
      </View>
      <View style={noteItemstyles.textLine}>
        <StyledText regularText>venta :</StyledText>
        <StyledText regularText>{note.Fecha_venta}</StyledText>
      </View>
      <View style={noteItemstyles.textLine}>
        <StyledText regularText>vencimiento :</StyledText>
        <StyledText regularText>{note.Fecha_vence}</StyledText>
      </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
const noteItemstyles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginVertical: 8,
    marginHorizontal: 20,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: theme.colors.otherWhite,
    overflow: 'hidden',
  },
  row: {
    backgroundColor: theme.colors.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textNro: {
    fontWeight: "bold",
    fontSize: 16,
    color: theme.colors.tertiary,
  },
  textDate: {
    fontSize: 16,
    color: theme.colors.secondaryText,
  },
  amount: {
    fontWeight: "bold",
    fontSize: 16,
    color: theme.colors.green,
  },
  button: {
    backgroundColor: theme.colors.tertiary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 22,
  },
  textButton: {
    color: theme.colors.primary,
    fontSize: 16,
    alignSelf: "center",
    fontWeight: "bold",
  },
  textLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default NoteItem;
