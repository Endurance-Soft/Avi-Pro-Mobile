//ClientDebit.js
import React, { useEffect, useState, useCallback } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { clientDebitStyles } from './styles/ClientDebitStyles';
import { HISTORY_DATA } from "../../constants";
import Cascading from '../animation/CascadingFadeInView';
import { useFocusEffect } from '@react-navigation/native';

const ClientDebit = ({clientInfo}) => {
    const [totalDebit, setTotalDebit] = useState(0);
    const [animationKey, setAnimationKey] = useState(Date.now());
        useFocusEffect(
            useCallback(() => {
                setAnimationKey(Date.now());
            }, [])
        );

    const calculation = (array) =>{
        return array.reduce((prev, current)=> prev + current, 0 )
    }
    useEffect(()=> {
        const concentration = HISTORY_DATA.filter(
            (client)=> client.name == clientInfo.name)
        const total = calculation(
            concentration.map(obj => parseFloat(obj.amount)));
        setTotalDebit(total); 
    }, [clientInfo]);   

    return(
        <View style={clientDebitStyles.container}>
            <Text style={clientDebitStyles.text}> {totalDebit} Bs</Text>
            <View style={clientDebitStyles.spaceButtons}>
                <TouchableOpacity onPress={()=>{}} style={clientDebitStyles.button}>
                    <Text style={clientDebitStyles.textButton}>Automático</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}} style={clientDebitStyles.button}>
                    <Text style={clientDebitStyles.textButton}>Recibo</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default ClientDebit;