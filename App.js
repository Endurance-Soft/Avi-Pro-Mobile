import React from 'react';
import { MenuProvider } from 'react-native-popup-menu';
import AppNavigator from './src/navigation/AppNavigator';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import useStore from './src/store';


// const joinClientesConNotas = (clientes, notasPendientes) => {
//   const clientesConNotas = clientes.map(cliente => {
//     const notasDelCliente = notasPendientes.filter(nota => nota.Cuenta.trim() === cliente.Cuenta.trim());
//     return {
//       ...cliente,
//       NotasPendientes: notasDelCliente
//     };
//   });
//   return clientesConNotas;
// };
// const resultado = joinClientesConNotas(Clientes, Notas_pendientes);
// console.log(resultado);
const App = () => {
  const clientes = useStore(state => state.clientes);
  return (
    <MenuProvider>
      <AppNavigator />
    </MenuProvider>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  clienteNombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detalle: {
    fontSize: 14,
    marginTop: 5,
  },
  notaDetalle: {
    fontSize: 12,
    marginLeft: 10,
  }
});


export default App;
