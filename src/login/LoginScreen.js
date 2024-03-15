//LoginScreen.js
import React, { useState } from "react";
import { Image, TouchableOpacity, StyleSheet, SafeAreaView, View, Text, TextInput, Dimensions } from "react-native";
import {theme} from '../../constants';
import { useNavigation } from "@react-navigation/native";
const windowWidth = Dimensions.get('window').width;

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerImgs}>
        <Image source={require('../assets/forma1.png')} style={{ width: windowWidth*0.28, height: 87 }} />
        <Image source={require('../assets/formas.png')} style={{ width: windowWidth*0.72, height: 206 }} />
      </View>
      <View>
        <Text style={styles.title}>Información Personal</Text>
        <Text style={styles.subtitle}>Nombre</Text>
        <TextInput placeholder="Nombre" style={styles.label} />
        <Text style={styles.subtitle}>Apellidos</Text>
        <TextInput placeholder="Apellidos" style={styles.label} />
        <Text style={styles.subtitle}>Correo Electronico</Text>
        <TextInput placeholder="Correo Electronico" style={styles.label} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("NewScreen")}>
          <Text style={styles.continueButton}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#bbe6ec',
		padding: 20,
	},
  containerImgs:{
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth*0.9,
    marginTop: 20,
  },
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
		marginVertical: 20,
	},
	subtitle: {
		fontSize: 16,
	},
	label: {
		backgroundColor: 'white',
		marginVertical: 10,
		padding: 10,
		borderRadius: 10,
	},
	softText: {
		color: theme.colors.gray,
		fontSize: 13,
		marginVertical: 10,
	},
	button: {
		backgroundColor: theme.colors.tertiary,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
		padding: 10,
    marginVertical: 15,
	}, 
	continueButton: {
		color: theme.colors.primary,
		fontSize: 19,
		fontWeight: 'bold',
	}
});

export default LoginScreen;