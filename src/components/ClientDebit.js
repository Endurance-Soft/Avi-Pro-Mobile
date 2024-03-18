//ClientDebit.js
import React, { useEffect, useState, useCallback } from "react";
import { View, Text, TouchableOpacity, Dimensions, StyleSheet} from "react-native";
import { theme } from "../../constants";
import { useFocusEffect } from "@react-navigation/native";
import Modal from "../modals/SimpleModal";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
const screenWidth = Dimensions.get('window').width;

const ClientDebit = ({ clientInfo }) => {
  const vBalance = parseFloat(clientInfo.NotasPendientes.reduce((total, nota) => total + nota.Saldo_pendiente, 0).toFixed(2));
  const [totalDebit, setTotalDebit] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(Date.now());
  const [statusBarColor, setStatusBarColor] = useState("#84A1A7");
  const colorSteps = [
    "#B9E4EA",
    "#AFD7DC",
    "#9DC1C6",
    "#89A8AC",
    "#7A969A",
    "#6D8689",
    "#647B7E",
    "#5F7477",
  ];
  useEffect(() => {
    let timers = [];
    if (modalVisible) {
      const interval = 30;
      colorSteps.forEach((color, index) => {
        let timer = setTimeout(() => {
          setStatusBarColor(color);
        }, interval * index);
        timers.push(timer);
      });
    } else {
      setStatusBarColor(theme.colors.secondary);
    }
    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [modalVisible, theme.colors.secondary]);
  useFocusEffect(
    useCallback(() => {
      setAnimationKey(Date.now());
    }, [])
  );
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const navigation = useNavigation();

  return (
    <View style={clientDebitStyles.container}>
      <StatusBar style="ligth" backgroundColor={statusBarColor} />
      <Modal isVisible={modalVisible} onClose={toggleModal} />
      <Text style={clientDebitStyles.text}> {vBalance} Bs</Text>
      <View style={clientDebitStyles.spaceButtons}>
        <TouchableOpacity onPress={() => navigation.navigate("AutomaticPayScreen")} style={clientDebitStyles.button}>
          <Text style={clientDebitStyles.textButton}>Automático</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toggleModal}
          style={clientDebitStyles.button}
        >
          <Text style={clientDebitStyles.textButton}>Recibo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const clientDebitStyles = StyleSheet.create({
  container: {
      backgroundColor: theme.colors.skyBlue,
      borderRadius:22,
      width: screenWidth-40,
      alignSelf: 'center',
      marginBottom: 20,
  },
  spaceButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      marginBottom: 10,
  },
  text: {
      fontSize: 30,
      fontWeight: 'bold',
      alignSelf: 'center',
      padding: 15,
  },
  button:{
      backgroundColor: theme.colors.tertiary,
      borderRadius: 22,
      paddingVertical: 12,
      padding: 10,
      width: screenWidth*0.4,
  },
  textButton:{
      color: theme.colors.primary,
      fontSize: 16,
      alignSelf: 'center',
      fontWeight: "bold",
  }
})
export default ClientDebit;
