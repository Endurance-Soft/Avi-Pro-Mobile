import React, { useRef, useState, useCallback} from 'react';
import { View, ScrollView, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { captureRef } from 'react-native-view-shot';
import * as Sharing from 'expo-sharing';
import StyledText from '../utils/StyledText';
import DualTextView from '../utils/DualTextView';
import SimpleButton from '../utils/SimpleButton';
import PaymentStore from '../PaymentStore';
import Cascading from '../animation/CascadingFadeInView';
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { theme } from "../../constants.js";
import { StatusBar } from 'expo-status-bar';

const cliente = "John Doe";
const numeroCliente = "20102353001";
const fechaEmision = "06/08/2024";
const brandName = 'BRAND NAME';

const SimpleScreen = () => {
  const viewRef = useRef();
  const navigation = useNavigation();
  const pagosRealizados = PaymentStore((state) => state.pagosRealizados);
  const borrarPagos = PaymentStore((state) => state.borrarPagos);
  const totalPagado = pagosRealizados.reduce((acc, pago) => acc + parseFloat(pago.pagado), 0).toFixed(2);

  const [animationKey, setAnimationKey] = useState(Date.now());
  useFocusEffect(
  useCallback(() => {
      setAnimationKey(Date.now());
  }, [])
  );
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
  const handleBorrarPagos = () => {
    borrarPagos();
    Alert.alert("Borrado", "Todos los pagos han sido borrados.");
  };
  return (
    <>
    <StatusBar style="ligth" backgroundColor={theme.colors.primary} />
    <ScrollView style={styles.safeArea}>
    <Cascading delay={100} animationKey={animationKey}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.back}
                    onPress={() => navigation.goBack()}
                >
                    <Icon name="back" size={30} color="black" />
                </TouchableOpacity>
                <View style={styles.aviContainer}>
                    {/* <Text style={styles.avi}>Nº 150</Text>
                    <Text style={styles.avi}>130. Bs</Text> */}
                </View>
            </View>
        </Cascading>
      <View style={styles.container} ref={viewRef}>
        <View style={styles.separacionInferior}>
          <StyledText boldTextUpper style={styles.title}>{brandName}</StyledText>          
          <StyledText regularIntenceText style={{textAlign:'center'}}>Comprobante de pago</StyledText>
        </View>
        <View style={styles.notaSection}>
        <DualTextView
          leftChild={<StyledText regularIntenceText>Cliente  :</StyledText>}
          rightChild={<StyledText regularText>  {cliente}</StyledText>}
        />
        <DualTextView
          leftChild={<StyledText regularIntenceText>N° Cliente  :</StyledText>}
          rightChild={<StyledText regularText>  {numeroCliente}</StyledText>}
        />
        <DualTextView
          leftChild={<StyledText regularIntenceText>Fecha  :</StyledText>}
          rightChild={<StyledText regularText>  {fechaEmision}</StyledText>}
        />
        </View>
        {pagosRealizados.map((pago, index) => (
          <View key={index} style={styles.notaSection}>
            <DualTextView
              leftChild={<StyledText regularIntenceText>N° Nota  :</StyledText>}
              rightChild={<StyledText regularText>  {pago.numeroNota}</StyledText>}
            />
            <DualTextView
              leftChild={<StyledText regularIntenceText>Fecha Nota  :</StyledText>}
              rightChild={<StyledText regularText>  {pago.fechaNota}</StyledText>}
            />
            <DualTextView
              leftChild={<StyledText regularIntenceText>Total  :</StyledText>}
              rightChild={<StyledText regularText>  {`${pago.total} Bs`}</StyledText>}
            />
            <DualTextView
              leftChild={<StyledText regularIntenceText>Pagado  :</StyledText>}
              rightChild={<StyledText regularText>  {`${pago.pagado} Bs`}</StyledText>}
            />

          </View>
        ))}
        <View style={styles.total}>
          <DualTextView
            leftChild={<StyledText regularIntenceText>Total Pagado  :</StyledText>}
            rightChild={<StyledText regularText>  {`${totalPagado} Bs`}</StyledText>}
          />
        </View>
      </View>
      <View style={{marginHorizontal:20}}>
        <SimpleButton
          text="Imprimir"
          onPress={ captureAndShareScreenshot}
        />
      </View>
      {/* <SimpleButton
        text="Borrar todos los pagos"
        onPress={handleBorrarPagos}
        style={{ marginTop: 10 }} // Añade un poco de margen entre los botones
      /> */}

    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    paddingTop: 35,
    backgroundColor:'#fff' 
  },
  container: {
    margin: 20,
    padding:5,
    paddingTop: 40,
    paddingBottom: 50,
    alignSelf: 'stretch',
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 9,
  },
  separacionInferior:{
    margin: 20,
    alignSelf: 'stretch',
  },
  title: {
    textAlign: 'center',
  },
  notaSection: {
    marginBottom: 10,
    marginTop: 10,
  },
  total:{
    marginTop:20,
  },
  back: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.otherWhite,
    borderRadius: 20,
    width: 60,
    height: 60,
},
  header:{
    marginHorizontal:20,
    flex:1,
  },
});

export default SimpleScreen;
