//LoginScreen.js
import React, { useState } from "react";
import { Image, TouchableOpacity, StyleSheet, View, Text, TextInput } from "react-native";
import {theme} from '../../constants';
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require('../assets/forma1.png')} style={{ width: 50, height: 50 }} />
        <Image source={require('../assets/formas.png')} style={{ width: 200, height: 200 }} />
        <Text style={styles.title}>Avi Pro Mobile</Text>
      </View>
      <View>
        <Text style={styles.title}>Información Personal</Text>
        <Text style={styles.subtitle}>Nombre</Text>
        <TextInput placeholder="Nombre" style={styles.label} />
        <Text style={styles.subtitle}>Apellidos</Text>
        <TextInput placeholder="Apellidos" style={styles.label} />
        <Text style={styles.subtitle}>Correo Electronico</Text>
        <TextInput placeholder="Correo Electronico" style={styles.label} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("HomeScreen")}>
          <Text styles={{ fontWeight: bold, }}>Continuar</Text>
        </TouchableOpacity>
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

export default LoginScreen;