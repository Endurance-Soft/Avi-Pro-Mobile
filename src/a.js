import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';
import { theme } from "../../constants";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
import zigzag from "../assets/ziza.png";


const cliente = "John Doe";
const numeroCliente = "20102353001";
const fecha = "06/08/2023";
const pagosRealizados = [
  { numeroNota: "215", fechaNota: "11/07/23", total: "520", pagado: "210" },
  { numeroNota: "221", fechaNota: "05/10/23", total: "340", pagado: "340" }
];
const totalPagado = "350";

const FacturaScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
         style={styles.container}>
          {/* <Image source={zigzag} style={styles.zigzagBorder} resizeMode="repeat" /> */}
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
              <Text style={styles.title}>{totalPagado} Bs</Text>
            </View>
          </ScrollView>
          <Image source={zigzag} style={styles.zigzagBorderBottom} resizeMode="repeat" />
          <View style={styles.buttonContainer}>
            <TouchableOpacity activeOpacity={0} style={styles.button}>
              <Text style={styles.buttonText}>Imprimir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: theme.colors.primary,
  },
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
    paddingHorizontal: 20,
    paddingVertical: 20,
    maxHeight: screenHeight * 0.8,
    width: screenWidth - 40,
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

export default FacturaScreen;