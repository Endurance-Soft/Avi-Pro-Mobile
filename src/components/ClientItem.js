import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { theme } from '../../constants';
import StyledText from "../StyledText";
import BorderBox from "../pieces/BorderBox";

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
          <Text style={styles.icon}>{vNombre.charAt(0)}</Text>
        </View>
        <View style={styles.detailsContainer}>
          {/* <StyledText boldText>{vNombre}</StyledText> */}
          <Text style={styles.name}>{vNombre}</Text>
          <Text style={styles.code}>{vCuenta}</Text>
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
  icon: {
    color: theme.colors.primary,
    fontSize: 30,
    fontWeight: 'medium',
  },
  detailsContainer: {
    marginLeft: 17,
    flex: 1,
  },
  codeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balance: {
    fontSize: 16,
    marginLeft: 8,
    color: theme.colors.secondaryText,
  },
  notesContainer: {
    flexDirection: 'column',
    // alignItems: 'flex-start',
  },
  notes: {
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
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
    // textAlign: 'center',
  },
  code: {
    fontSize: 16,
    // textAlign: 'center',
    color: theme.colors.secondaryText,
    // marginLeft:20,
  },
  textLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default ClientItem;
