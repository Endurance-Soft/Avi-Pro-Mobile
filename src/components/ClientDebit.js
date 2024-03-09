//ClientDebit.js
import React, { useEffect, useState, useCallback } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { clientDebitStyles } from "./styles/ClientDebitStyles";
import { HISTORY_DATA, theme } from "../../constants";
import Cascading from "../animation/CascadingFadeInView";
import { useFocusEffect } from "@react-navigation/native";
import Modal from "../modals/SimpleModal";
import { StatusBar } from "expo-status-bar";

const ClientDebit = ({ clientInfo }) => {
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
  const calculation = (array) => {
    return array.reduce((prev, current) => prev + current, 0);
  };
  useEffect(() => {
    const concentration = HISTORY_DATA.filter(
      (client) => client.name == clientInfo.name
    );
    const total = calculation(
      concentration.map((obj) => parseFloat(obj.amount))
    );
    setTotalDebit(total);
  }, [clientInfo]);

  return (
    <View style={clientDebitStyles.container}>
      <StatusBar style="ligth" backgroundColor={statusBarColor} />
      <Modal isVisible={modalVisible} onClose={toggleModal} />
      <Text style={clientDebitStyles.text}> {totalDebit} Bs</Text>
      <View style={clientDebitStyles.spaceButtons}>
        <TouchableOpacity onPress={() => {}} style={clientDebitStyles.button}>
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
export default ClientDebit;
