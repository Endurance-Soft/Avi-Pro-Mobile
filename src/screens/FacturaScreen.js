import React, { useRef } from 'react';
import { View, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { captureRef } from 'react-native-view-shot';
import * as Sharing from 'expo-sharing';
import StyledText from '../utils/StyledText';
import DualTextView from '../utils/DualTextView';
import SimpleButton from '../utils/SimpleButton';

const cliente = "John Doe";
const numeroCliente = "20102353001";
const fechaEmision = "06/08/2024";
const pagosRealizados = [
  { numeroNota: "215", fechaNota: "11/07/2024", total: "520.00", pagado: "210.00" },
  { numeroNota: "221", fechaNota: "05/08/2024", total: "340.00", pagado: "340.00" }
];
const totalPagado = pagosRealizados.reduce((acc, pago) => acc + parseFloat(pago.pagado), 0).toFixed(2);

const SimpleScreen = () => {
  const viewRef = useRef();

  const captureAndShareScreenshot = async () => {
    try {
      const uri = await captureRef(viewRef, {
        format: 'png',
        quality: 0.8,
      });
      await Sharing.shareAsync(uri, { dialogTitle: 'Comparte tu comprobante de pago' });
    } catch (error) {
      Alert.alert("Error", "No se pudo capturar o compartir el comprobante: " + error.message);
    }
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container} ref={viewRef}>
        <StyledText regularIntenseText style={styles.title}>COMPROBANTE DE PAGO</StyledText>
        <DualTextView
          separation={10}
          leftChild={<StyledText regularIntenceText>Cliente  :</StyledText>}
          rightChild={<StyledText regularText>  {cliente}</StyledText>}
        />
        <DualTextView
          separation={10}
          leftChild={<StyledText regularIntenceText>N° Cliente  :</StyledText>}
          rightChild={<StyledText regularText>  {numeroCliente}</StyledText>}
        />
        <DualTextView
          separation={10}
          leftChild={<StyledText regularIntenceText>Fecha de Emisión  :</StyledText>}
          rightChild={<StyledText regularText>  {fechaEmision}</StyledText>}
        />
        {pagosRealizados.map((pago, index) => (
          <View key={index} style={styles.notaSection}>
            <DualTextView
              separation={10}
              leftChild={<StyledText regularIntenceText>N° Nota  :</StyledText>}
              rightChild={<StyledText regularText>  {pago.numeroNota}</StyledText>}
            />
            <DualTextView
              separation={10}
              leftChild={<StyledText regularIntenceText>Fecha Nota  :</StyledText>}
              rightChild={<StyledText regularText>  {pago.fechaNota}</StyledText>}
            />
            <DualTextView
              separation={10}
              leftChild={<StyledText regularIntenceText>Total  :</StyledText>}
              rightChild={<StyledText regularText>  {`${pago.total} Bs`}</StyledText>}
            />
            <DualTextView
              separation={10}
              leftChild={<StyledText regularIntenceText>Pagado  :</StyledText>}
              rightChild={<StyledText regularText>  {`${pago.pagado} Bs`}</StyledText>}
            />
          </View>
        ))}
        <DualTextView
          separation={10}
          leftChild={<StyledText regularIntenceText>Total Pagado  :</StyledText>}
          rightChild={<StyledText regularText>  {`${totalPagado} Bs`}</StyledText>}
        />
      </View>
      <SimpleButton 
        text="Imprimir" 
        onPress={ captureAndShareScreenshot}
      />
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
    margin: 20,
    padding: 20,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  notaSection: {
    marginBottom: 15,
  },
});

export default SimpleScreen;
