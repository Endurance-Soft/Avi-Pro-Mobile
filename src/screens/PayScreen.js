import React, { useState, useCallback } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions } from 'react-native';
import { useForm } from "react-hook-form";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Cascading from "../animation/CascadingFadeInView";
import { theme } from "../theme.js";
import InputController from './InputController';

const screenWidth = Dimensions.get("window").width;
const screenHeigth = Dimensions.get("window").height;

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
            firstName: "",
            lastName: "",
        },
    })
    const onSubmit = (data) => console.log(data)

    const inputFields = [
        { name: 'amount', label: 'Importe pagado' },
        { name: 'deposit', label: 'Deposito' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="ligth" backgroundColor={secondary} />
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
            
            {inputFields.map(field => (
                <InputController
                    control={control}
                    name={field.name}
                    label={field.label}
                    rules={{
                        required: "Este campo es requerido",
                        pattern: {
                            value: /^[0-9]+$/,
                            message: "Ingrese solo números",
                        },
                    }}
                />
            ))}

            <View style={styles.buttonContainer}>
                <TouchableOpacity activeOpacity={0} style={styles.button} >
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
    listContainer: {
        flex: 1,
        backgroundColor: theme.colors.primary,
    },
    containerInput: {
        marginHorizontal: 20,
    },
    input: {
        height: 50,
        borderColor: 'gray',
        paddingHorizontal: 10,
        backgroundColor: theme.colors.otherWhite,
        borderRadius: 12,
        fontSize: 18,
        fontWeight: "bold",
    },
    label: {
        color: theme.colors.slateGrey,
        fontSize: 18,
        marginLeft: 10,
        marginBottom: 5
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
        error: {
            color: "red",
            fontSize: 16,
            marginLeft: 10,
        },
        containerInputSelector: {
            flexDirection: "row",
        },
});

export default PayScreen;