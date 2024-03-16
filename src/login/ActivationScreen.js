//ActivationScreen.js
import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, StyleSheet, View, Text, TextInput, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from '../../constants';
import { useNavigation } from "@react-navigation/native";
import { getFirestore } from "../../config/firebase";

const windowWidth = Dimensions.get('window').width;

const ActivationScreen = () => {
	const [activationCode, setActivationCode] = useState("");
	const [message, setMessage] = useState(false);
	const db = getFirestore();
	const codes = db.collection('codigoActivacion');

	const fecthData = async () => {
		const data = await codes.get();
		data.docs.forEach(doc => {
			console.log(doc.data());
		});
	}
	useEffect(() => {
		fecthData();
	}, []);

	const handleSend = () => {
		if(activationCode.length === 0){
			alert("Por favor llene todos los campos");
			return;
		}
		
		if(!activationCode.match("^[A-Z0-9]{4} - [A-Z0-9]{4} - [A-Z0-9]{4} - [A-Z0-9]{4}$")){  //veify activation code in bd
			setMessage(true);
			return;
		}
		navigation.navigate("NewScreen")
	}

	const navigation = useNavigation();
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.containerImgs}>
				<Image source={require('../assets/forma1.png')} style={{ width: windowWidth * 0.28, height: 87 }} />
				<Image source={require('../assets/formas.png')} style={{ width: windowWidth * 0.72, height: 206 }} />
			</View>
			<View>
				<Text style={styles.title}>Avi Pro Mobile</Text>
				<Text style={styles.subtitle}>Clave de activación</Text>
				<TextInput 
					placeholder="XXXX - XXXX - XXXX - XXXX" 
					style={styles.label} 
					onChange={setActivationCode}
					value={activationCode}
					keyboardType="default"
					autoCapitalize="characters"
				/>
				{message && <Text style={styles.errorFormat}>La clave de activación es incorrecta</Text>}
				<Text style={styles.softText}>Al continuar acepta todos los términos, condiciones y políticas de privacidad.</Text>
				<TouchableOpacity onPress={handleSend} style={styles.button}>
					<Text style={styles.continueButton}>Continuar</Text>
				</TouchableOpacity>
				<Text style={styles.softText}>Si desea adquirir una licencia del producto por favor comuníquese con nuestro equipo de ventas.</Text>
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
	containerImgs: {
		alignItems: 'center',
		justifyContent: 'center',
		width: windowWidth * 0.9,
		marginTop: 20,
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: 20,
		marginBottom: 40,
	},
	subtitle: {
		fontSize: 18,
		marginBottom: 5,
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
	errorFormat: {
    color: 'red',
    fontSize: 13,
    marginTop: -8,
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

export default ActivationScreen;