//ActivationScreen.js
import React, { useState } from "react";
import { Image, TouchableOpacity, StyleSheet, View, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {theme} from '../../constants';
import { useNavigation } from "@react-navigation/native";

const ActivationScreen = () => {
	const navigation = useNavigation();
	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Image source={require('../assets/forma1.png')} style={{ width: 50, height: 50 }}/>
				<Image source={require('../assets/formas.png')} style={{ width: 200, height: 200 }} /> 
			</View>
			<View>
				<Text style={styles.title}>Avi Pro Mobile</Text>
				<Text style={styles.subtitle}>Clave de activación</Text>
				<TextInput placeholder="XXXX - XXXX - XXXX - XXXX" style={styles.label }/>
				<Text style={styles.softText}>Al continuar acepta todos los términos, condiciones y políticas de privacidad.</Text>
				<TouchableOpacity onPress={() => navigation.navigate("LoginScreen")} style={styles.button}>
					<Text styles={{ fontWeight: bold, }}>Continuar</Text>
				</TouchableOpacity>
				<Text style={styles.softText}>Si desea adquirir una licencia del producto por favor comuníquese con nuestro equipo de ventas.</Text>
			</View>		
			
		</SafeAreaView>
	)
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.skyBlue,
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: 20,
	},
	subtitle: {
		fontSize: 20,
		marginTop: 10,
	},
	label: {
		backgroundColor: 'white',
		marginTop: 20,
		padding: 10,
		borderRadius: 10,
	},
	softText: {
		color: theme.colors.gray,
		textAlign: 'center',
		fontSize: 10,
	},
	button: {
		backgroundColor: theme.colors.tertiary,
		alignItems: 'center',
		justifyContent: 'center',
	}
});

export default ActivationScreen;