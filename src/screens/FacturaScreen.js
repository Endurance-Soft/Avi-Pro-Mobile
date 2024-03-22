import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { captureRef } from 'react-native-view-shot';
import * as Sharing from 'expo-sharing';
import SimpleButton from '../utils/SimpleButton';
import StyledText from '../utils/StyledText';

const cliente = "John Doe";
const numeroCliente = "20102353001";
const fecha = "06/08/2023";
const pagosRealizados = [
  { numeroNota: "215", fechaNota: "11/07/23", total: "520", pagado: "210" },
  { numeroNota: "221", fechaNota: "05/10/23", total: "340", pagado: "340" }
];
const totalPagado = "350";


const SimpleScreen = () => {
  const viewRef = useRef();

  const captureAndShareScreenshot = async () => {
    try {
      const uri = await captureRef(viewRef, {
        format: 'png',
        quality: 0.8,
      });
      await Sharing.shareAsync(uri,{dialogTitle: 'Comprobante de pago'});
    } catch (error) {
      Alert.alert("Error", "No se pudo capturar o compartir el comprobante: " + error.message);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container} ref={viewRef}>
        <Text style={styles.text}>COMPROBANTE DE PAGO</Text>
        <View style={styles.textLine}>
            <Text>Cliente:</Text>
            <Text>{cliente}</Text>
        </View>
        <View style={styles.textLine}>
              <Text>N° Cliente:</Text>
              <Text>{numeroCliente}</Text>
            </View>
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
            <View style={styles.textLine}>
              <Text>Total Pagado:</Text>
              <Text style={styles.title}>{totalPagado} Bs</Text>
            </View>
      </View>
      <SimpleButton text="Pagar" onPress={captureAndShareScreenshot} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  text: {
    fontSize: 18,
    margin: 5,
  },
  textLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dottedLine: {
    borderBottomWidth: 3,
    borderBottomColor: "black",
    borderStyle: "dotted",
    marginVertical: 8,
  },
});

export default SimpleScreen;