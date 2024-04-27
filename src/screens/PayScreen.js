import React, { useState, useCallback } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions, ScrollView } from 'react-native';
import { useForm } from "react-hook-form";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Cascading from "../animation/CascadingFadeInView";
import { theme } from "../assets/Theme";
import InputField from "../components/InputField.js";
import DateInputField from "../components/DateInputField.js";
import DropdownSelector2 from "../components/DropdownSelector2.js";
import PaymentStore from "../stores/PaymentStore.js";
import useStore from "../stores/store.js";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const PayScreen = ({ route }) => {
    const { note } = route.params;
    const navigation = useNavigation();
    const {updateNota}  = useStore(state => ({state, updateNota: state.updateNota}));
    const [animationKey, setAnimationKey] = useState(Date.now());
    useFocusEffect(
        useCallback(() => {
            setAnimationKey(Date.now());
        }, [])
    );
    
    const [selectedCurrency, setSelectedCurrency] = useState('Bs');
    const handleCurrencyChange = (option) => {
        setSelectedCurrency(option);
    };

    const [selectedCash, setSelectedCash] = useState('CTA 1239123234');
    const cash_accounts = ['CTA 1239123234', 'CTA 1239123235', 'CTA 1239123236'];

    const [selectedBank, setSelectedBank] = useState('BNB 1213434789');
    const banks = ['BNB 1213434789', 'BCP 4432765343'];

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            amount: "",
            currency: "",
            payMode: "",
            advancePaymentNumber: "",
            checkBankNumber: "",
            checkBankDate: "",
            account: "",
            reference: "",
            observations: "",
        },
    });

    const onSubmit = (data) => {
    console.log(data,"aca esta la nota", note);
    PaymentStore.getState().agregarPago({
        numeroNota: note.nro_nota,
        fechaNota: note.Fecha,
        total: note.importe_nota,
        pagado: data.amount,
    });
    updateNota(note.id, {Saldo_pendiente: note.Saldo_pendiente - data.amount, Monto_pagado: note.Monto_pagado + data.amount });
    console.log("Pagos realizados:", PaymentStore.getState().pagosRealizados);
    navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="ligth" backgroundColor={theme.colors.secondary} />
            <View style={styles.cover}>
                <View style={styles.up}>
                    <Cascading delay={100} animationKey={animationKey}>
                        <View style={styles.header}>
                            <TouchableOpacity
                                style={styles.back}
                                onPress={() => navigation.goBack()}
                            >
                                <Icon name="back" size={30} color="black" />
                            </TouchableOpacity>
                            <View style={styles.aviContainer}>
                                <Text style={styles.avi}>{note.nro_nota}</Text>
                                <Text style={styles.avi}>{note.importe_nota} Bs.</Text>
                            </View>
                        </View>
                    </Cascading>
                </View>
            </View>
            <View style={styles.formContainer}>
            <View style={styles.lineForm}>
            <InputField 
                control={control}
                name="amount"
                title="Importe pagado"
                type="numeric"
                rules={{
                    required: "Este campo es requerido",
                    pattern: {
                        value: /^[0-9]+$/,
                        message: "Ingrese solo números",
                    },
                }}
                errors={errors} 
            />
            <DropdownSelector2
                title="Moneda"
                options={['Bs', 'USD']}
                selectedOption={selectedCurrency}
                onOptionChange={handleCurrencyChange}
            />
            </View>
            <InputField 
                control={control}
                name="advancePaymentNumber"
                title="Nº Anticipo"
                type="numeric"
                rules={{
                    required: "Este campo es requerido",
                    pattern: {
                        value: /^[0-9]+$/,
                        message: "Ingrese solo números",
                    },
                }}
                errors={errors} 
            />
            <InputField 
                control={control}
                name="checkBankNumber"
                title="Nº Cheque"
                type="numeric"
                rules={{
                    required: "Este campo es requerido",
                    pattern: {
                        value: /^[0-9]+$/,
                        message: "Ingrese solo números",
                    },
                }}
                errors={errors} 
            />

            {/* El input de abajo necesita usar un datetime picker para la fecha */}

            <View  style={styles.lineForm}>
            <DateInputField 
                control={control}
                name="checkBankDate"
                title="Fecha Cheque"
                type="numeric"
            />

            <DropdownSelector2 
                title="Cta/Caja Banco"
                options={banks}
                selectedOption={selectedBank}
                onOptionChange={setSelectedBank}
            />
            </View>
            <InputField 
                control={control}
                name="reference"
                title="Referencia"
                type="default"
            />
            <InputField 
                control={control}
                name="observations"
                title="Observaciones"
                type="default"
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit(onSubmit)}
                >
                    <Text style={styles.buttonText}>Registrar Pago</Text>
                </TouchableOpacity>
            </View>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    cover: {
        backgroundColor: theme.colors.primary,
        zIndex: 1,
    },
    up: {
        backgroundColor: theme.colors.primary,
    },
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: theme.colors.primary,
    },
    header: {
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 20,
        alignItems: "center",
    },
    back: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.otherWhite,
        borderRadius: 20,
        width: 60,
        height: 60,
    },
    aviContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    avi: {
        fontWeight: "bold",
        fontSize: 22,
        marginRight: 60,
    },
    buttonContainer: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center",
        width: screenWidth - 240,
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
        paddingVertical: 12,
        backgroundColor: theme.colors.tertiary,
        borderRadius: 22,
        flex: 1,
    },
    buttonText: {
        color: theme.colors.primary,
        fontSize: 16,
        fontWeight: "bold",
    },
    lineForm: {
        flexDirection: "row",
    },
    formContainer: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 10,
    },
});

export default PayScreen;
