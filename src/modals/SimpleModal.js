import React, { useState, useCallback } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView, TouchableOpacity, Image } from "react-native";
import Modal from "react-native-modal";
import { Dimensions } from "react-native";
import { theme } from "../../constants";
const screenWidth = Dimensions.get("window").width;
const screenHeigth = Dimensions.get("window").height;
import zigzag from "../assets/ziza.png";
const primary = theme.colors.primary;

var cliente="John Doe";
var numeroCliente="20102353001";
var fecha="06/08/2023";
var pagosRealizados=[
    { numeroNota: "215", fechaNota: "11/07/23", total: "520", pagado: "210" },
    { numeroNota: "221", fechaNota: "05/10/23", total: "340", pagado: "340" }   
  ];
var totalPagado="350";

const SimpleModal = ({ isVisible, onClose }) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      useNativeDriver={true}
      backdropOpacity={0.5}
      swipeDirection={["down", "up"]}
      onSwipeComplete={onClose}
      propagateSwipe
    >
      <View style={styles.modalContent}>
        <View style={styles.container}>
          <Image source={zigzag} style={styles.zigzagBorder} resizeMode="repeat" />
          <ScrollView style={styles.content}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>COMPROBANTE DE PAGO</Text>
              <Text style={styles.title}>{fecha}</Text>
            </View>
            <View style={styles.textLine}>
              <Text>Cliente:</Text>
              <Text>{cliente}</Text>
            </View>
            <View style={styles.textLine}>
              <Text>N° Cliente:</Text>
              <Text>{numeroCliente}</Text>
            </View>
            <View style={styles.dottedLine} />
            {/* <View style={styles.titleContainer}>
              <Text style={styles.title}>PAGOS REALIZADOS</Text>
            </View> */}
            {pagosRealizados.map((pago, index) => (
              <View key={index} style={styles.notaContent}>
                <View style={styles.textLine}>
                  <Text> Numero de Nota:</Text>
                  <Text> {pago.numeroNota} </Text>
                </View>
                <View style={styles.textLine}>
                  <Text> Fecha de nota: </Text>
                  <Text> {pago.fechaNota} </Text>
                </View>
                <View style={styles.textLine}>
                  <Text> Total: {pago.total} Bs </Text>
                  <Text> Pagado: {pago.pagado} Bs </Text>
                </View>
              </View>
            ))}
            <View style={styles.dottedLine} />
            <View style={styles.textLine}>
              <Text>Total Pagado:</Text>
              <Text style={styles.title} >{totalPagado} Bs</Text>
            </View>
          </ScrollView>
          <Image source={zigzag} style={styles.zigzagBorderBottom} resizeMode="repeat" />
          <View style={styles.buttonContainer}>
            <TouchableOpacity activeOpacity={0} style={styles.button}>
              <Text style={styles.buttonText}>Imprimir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {},
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  zigzagBorder: {
    width: screenWidth - 40,
    height: 15,
  },
  zigzagBorderBottom: {
    width: screenWidth - 40,
    height: 15,
    transform: [{ rotate: "180deg" }],
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 22,
  },
  title: {
    fontSize: 16,
      fontWeight: "bold",
  },
  content: {
    paddingHorizontal: 40,
    paddingVertical: 60,
    maxHeight: screenHeigth * 0.8,
    width: screenWidth - 40,
    backgroundColor: theme.colors.primary,
  },
  dottedLine: {
    borderBottomWidth: 3,
    borderBottomColor: "black",
    borderStyle: "dotted",
    marginVertical: 8,
  },
  textLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  notaContent: {
    marginVertical: 5,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    width: screenWidth - 40,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: theme.colors.tertiary,
    borderRadius: 22,
    flex: 1,
  },
  buttonText: {
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SimpleModal;
