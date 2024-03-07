import React from 'react';
import { SafeAreaView, TouchableOpacity, View, Image, StyleSheet, Text } from 'react-native';
import zigzag from '../assets/zigzagBorder.png';
import { Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;
import Icon from 'react-native-vector-icons/AntDesign';
import { DATA, theme } from '../../constants'
import { useNavigation } from '@react-navigation/native';

const Receipt = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                <Icon name="back" size={30} color="black" />
        </TouchableOpacity>
        <View style={styles.receiptContainer}>
            <Image source={zigzag} style={styles.zigzagBorderBottom} resizeMode="repeat" />
            <View style={styles.receiptContent}>
            </View>
            <Image source={zigzag} style={styles.zigzagBorder} resizeMode="repeat" />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flex: 1,
    },
    receiptContainer: {
        flex: 1,
        alignItems: "center",
    },
    zigzagBorder: {
        width: screenWidth - 40,
        height: 20,
        zIndex: 1,
    },
    receiptContent: {
        height: 200,
        width: screenWidth - 40,
        backgroundColor: theme.colors.primary,
        elevation: 150,
    },
    zigzagBorderBottom: {
        width: screenWidth - 40,
        height: 20,
        transform: [{ rotate: '180deg' }],
        zIndex: 1,
    },
    back: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.skyBlue,
        borderRadius: 20,
        width: 60,
        height: 60,
      }
  });

export default Receipt;
