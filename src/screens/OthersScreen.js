import React from 'react';
import { StyleSheet, Text, View, Touchable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { theme } from '../../constants';
import { firebase } from '@react-native-firebase/firestore';
import { clientes } from '../store'

const db = firebase.firestore();

const OthersScreen = () => {
    const handlePress = async () => {
        try {
            // Verificar si hay datos de clientes en el store
            if (clientes.length > 0) {
                // Iterar sobre los datos de clientes y subirlos a Firestore
                await Promise.all(clientes.map(async (client) => {
                    // Crear un documento en la colección 'clientes' con los datos del cliente
                    await db.collection('clientes').add({
                        cliente_id: client.cliente_ID.trim(), // Eliminar espacios en blanco alrededor del ID
                        cobrador_id: client.cobrador_ID.trim(),
                        cuenta: client.Cuenta.trim(),
                        direccion: client.Direccion.trim(),
                        empresa_id: client.Empresa_ID.trim(),
                        nombre: client.Nombre.trim(),
                        sucursal_id: client.sucursal_ID.trim(),
                        telefono: client.Telefono.trim(),
                    });
                }));

                // Notificar al usuario que los datos se han subido correctamente
                alert('Datos de clientes subidos correctamente a la colección "clientes".');
            } else {
                // Notificar al usuario si no hay datos de clientes en el store
                alert('No hay datos de clientes para subir.');
            }

        } catch (error) {
            console.error('Error al subir datos de clientes:', error.message);
            alert('Error al subir datos de clientes. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <View style={styles.container}>
            <Touchable onPress={handlePress}>
                <Text style={{ color: theme.colors.primaryText }}>Sigan Viendo...</Text>
            </Touchable>
        <StatusBar style="light" backgroundColor={theme.colors.secondary}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default OthersScreen;