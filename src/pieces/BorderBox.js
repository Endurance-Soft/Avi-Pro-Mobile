import React from 'react';
import { View, StyleSheet } from 'react-native';
import { theme } from "../../constants";

const BorderBox = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'red', // Puedes ajustar el color del borde según tu preferencia
    padding: 16, // Ajusta el padding según necesites
    borderRadius: 8, // Opcional: si deseas bordes redondeados
  },
});

export default BorderBox;