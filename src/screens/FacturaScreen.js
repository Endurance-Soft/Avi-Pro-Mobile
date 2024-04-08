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
import { theme } from "../assets/Theme";
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
        quality: 0.9,
      });
      await Sharing.shareAsync(uri, { dialogTitle: 'Comparte tu comprobante de pago' });
    } catch (error) {
      Alert.alert("Error", "No se pudo capturar o compartir el comprobante: " + error.message);
    }
  };
  const handlePress = async () => {
    await captureAndShareScreenshot();
    handleBorrarPagos();
  };
  const handleBorrarPagos = () => {
    borrarPagos();
  };
  return (
    <SafeAreaView style={styles.flexContainer}>
      <StatusBar style="ligth" backgroundColor={theme.colors.secondary} />
      <Cascading delay={200} animationKey={animationKey}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.back}
                    onPress={() => navigation.goBack()}
                >
                    <Icon name="back" size={30} color="black" />
                </TouchableOpacity>
                <View style={styles.aviContainer}>
                </View>
            </View>
            </Cascading>
      
      <View style={styles.flexContainer}>
      
        <ScrollView style={styles.safeArea} contentContainerStyle={styles.scrollViewContent}>
        <Cascading delay={400} animationKey={animationKey}>
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
          </Cascading>
        </ScrollView>
        <Cascading delay={500} animationKey={animationKey}>
        <View style={styles.buttonContainer}>
          <SimpleButton
            text="Imprimir"
            onPress={handlePress}
          />
        </View>
        </Cascading>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
  },
  safeArea: {
    flex: 1,
  },
  safeArea: {
    paddingTop: 35,
    backgroundColor:theme.colors.secondary, 
  },
  scrollViewContent: {
    flexGrow: 0.7,
    justifyContent: 'center',
    // backgroundColor:'red',
    paddingBottom: 30,
  },
  buttonContainer: {
    marginHorizontal: 20,
    paddingBottom: 20,
  },
  container: {
    margin: 20,
    padding:5,
    paddingTop: 40,
    paddingBottom: 50,
    alignSelf: 'stretch',
    borderRadius: 10,
    backgroundColor: '#fff',
    // elevation: 9,
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
    backgroundColor: theme.colors.skyBlue,
    borderRadius: 20,
    width: 60,
    height: 60,
},
  header:{
    marginHorizontal:20,
  },
});

export default SimpleScreen;
