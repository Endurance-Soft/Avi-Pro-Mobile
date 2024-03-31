import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { theme } from '../../constants';
import StyledText from "../utils/StyledText";
import BorderBox from "../utils/BorderBox";

const windowWidth = Dimensions.get('window').width;

const ClientItem = ({ client, onSelect }) => {
  const vNombre = client.Nombre;
  const vCuenta =client.Cuenta;
  const vBalance = parseFloat(client.NotasPendientes.reduce((total, nota) => total + nota.Saldo_pendiente, 0).toFixed(2));
  const vNotasPendientes = client.NotasPendientes.length;
  const vUltimoPago = '';
  return (
      <BorderBox onPress={() => onSelect(client.id)} style={{marginVertical: 10}}>
      <View style={styles.iconContainer}>
        <View style={styles.iconWraped}>
          {/* <Text style={styles.icon}>{vNombre.charAt(0)}</Text> */}
          <StyledText initial>{vNombre.charAt(0)}</StyledText>
        </View>
        <View style={styles.detailsContainer}>
          <StyledText boldTextUpper>{vNombre}</StyledText>
          <StyledText regularText>{vCuenta}</StyledText>
          {/* <View style={styles.codeContainer}>
            <MaterialCommunityIcons name="account" size={19} color="black" />
            <StyledText regularText style={{marginLeft:5,}}>{vCuenta}</StyledText>
          </View> */}
        </View>
      </View>
      <View style={styles.lineContainer}>
        <View style={styles.line}></View>
      </View>
      <View style={styles.notesContainer}>
        <View style={styles.textLine}>
          <StyledText regularText>notas Pendientes :</StyledText>
          <StyledText regularText>
            {vNotasPendientes} {vNotasPendientes === 1 ? 'nota' : 'notas'}
          </StyledText>
        </View>
        <View style={styles.textLine}>
          <StyledText regularText>saldo total :</StyledText>
          <StyledText regularText>{vBalance} Bs</StyledText>
        </View>
        <View style={styles.textLine}>
          <StyledText regularText>ultimo pago :</StyledText>
          <StyledText regularText>2020-06-12</StyledText>
        </View>
      </View>
    </BorderBox>
  );
};

const styles = StyleSheet.create({
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
  detailsContainer: {
    marginLeft: 17,
    flex: 1,
  },
  codeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notesContainer: {
    flexDirection: 'column',
    // alignItems: 'flex-start',
  },
  lineContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    marginVertical: 3 ,
    backgroundColor: theme.colors.otherWhite,
    width: windowWidth*0.8,
    height: 2,
  },
  textLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default ClientItem;
