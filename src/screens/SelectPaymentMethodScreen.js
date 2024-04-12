import React, { useState, useCallback } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Cascading from "../animation/CascadingFadeInView";
import { theme } from "../assets/Theme";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const SelectPaymentMethodScreen = ({ route }) => {
    const { note } = route.params;
    const { payMode } = route.params;
    const navigation = useNavigation();
    const [animationKey, setAnimationKey] = useState(Date.now());
    useFocusEffect(
        useCallback(() => {
            setAnimationKey(Date.now());
        }, [])
    );
    const destinos = {
        automatico: "AutomaticPayScreen",
        normal: "PayScreen",
    };
    
    const destino = destinos[payMode] || "PayScreen";

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
                                <Text style={styles.avi}>Metodo de pago</Text>
                            </View>
                        </View>
                    </Cascading>
                </View>
            </View>
            <View>
                <TouchableWithoutFeedback onPress={() => navigation.navigate(destino, { note, method:"efectivo" })}>
                    <View>
                        <Text>En Efectivo</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate(destino, { note, method:"banco" })}>
                    <View>
                        <Text>Deposito o Transferencia Bancaria</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate(destino, { note, method:"cheque" })}>
                    <View>
                        <Text>Cheque</Text>
                    </View>
                </TouchableWithoutFeedback>
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
    }
});

export default SelectPaymentMethodScreen;
