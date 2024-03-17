import React, { useState, useCallback } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Cascading from "../animation/CascadingFadeInView";
import { theme } from "../../constants.js";
import InputField from "../components/InputField.js";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const PayScreen = ({ route }) => {
    const navigation = useNavigation();
    const [animationKey, setAnimationKey] = useState(Date.now());
    useFocusEffect(
        useCallback(() => {
            setAnimationKey(Date.now());
        }, [])
    );

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            amount: "",
            currency: "",
            deposit: "",
            advancePaymentNumber: "",
            checkBankNumber: "",
            checkBankDate: "",
            bankAccount: "",
            reference: "",
            observations: "",
        },
    });

    const onSubmit = (data) => {
        console.log(data);
        // Aquí puedes agregar la lógica para guardar los datos
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
                                <Text style={styles.avi}>Nº 150</Text>
                                <Text style={styles.avi}>130. Bs</Text>
                            </View>
                        </View>
                    </Cascading>
                </View>
            </View>
            
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
            <InputField 
                control={control}
                name="deposit"
                title="Deposito"
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
            <InputField 
                control={control}
                name="checkBankDate"
                title="Fec. Cheque"
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

            {/* Aquí va un picker para selecionar la Cta/Caja Banco */}

            <InputField 
                control={control}
                name="reference"
                title="Referencia"
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
            {/* Referencia y Observaciones no son campos requeridos y no necesitan reglas y pueden usar el teclado normal */}
            <InputField 
                control={control}
                name="observations"
                title="Observaciones"
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
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit(onSubmit)}
                >
                    <Text style={styles.buttonText}>Registrar Pago</Text>
                </TouchableOpacity>
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

export default PayScreen;
