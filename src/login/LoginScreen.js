//LoginScreen.js
import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, StyleSheet, SafeAreaView, View, Text, TextInput, Dimensions } from "react-native";
import {theme} from '../../constants';
import { useNavigation } from "@react-navigation/native";
const windowWidth = Dimensions.get('window').width;

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [message, setMessage] = useState(false);

  const handleSend = () => {
    if(email.length === 0 || nombre.length === 0 || apellidos.length === 0){
      alert("Por favor llene todos los campos");
      return;
    }
    if(!email.match("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")){
      setMessage(true);
      return;
    }
    navigation.navigate("NewScreen")
  }

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
        <TextInput 
          placeholder="Nombre" 
          style={styles.label} 
          onChangeText={name => {
            if(name.length <= 30 && name.match("^[a-zA-Z ]*$")){
               setNombre(name);
            }
          }}
          value={nombre}
          keyboardType="default"
        />
        <Text style={styles.subtitle}>Apellidos</Text>
        <TextInput 
          placeholder="Apellidos" 
          style={styles.label} 
          onChangeText={lastname => {
            if(lastname.length <= 30 && lastname.match("^[a-zA-Z ]*$")){
               setApellidos(lastname);
            }}
          }
          value={apellidos}
          keyboardType="default"
        />
        <Text style={styles.subtitle}>Correo Electronico</Text>
        <TextInput 
          placeholder="Correo Electronico" 
          style={styles.label} 
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
        />
        {message && <Text style={styles.errorFormat}>Por favor ingrese un correo válido</Text>}
        <TouchableOpacity style={styles.button} onPress={handleSend}>
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

export default LoginScreen;