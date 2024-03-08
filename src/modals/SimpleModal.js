import React, {useState, useCallback} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { StatusBar } from "expo-status-bar";

const SimpleModal = ({ isVisible, onClose }) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      useNativeDriver={true}
      backdropOpacity={0.5}
      // backdropColor="#152432"
    // animationIn="fadeIn"
    // animationOut="fadeOut"
      swipeDirection={['down', 'up']} // Permite deslizar hacia abajo y arriba para cerrar
      onSwipeComplete={onClose} // Se llama cuando se completa el gesto de deslizamiento
      propagateSwipe // Permite que los gestos de deslizamiento se propaguen a los hijos, útil para ScrollView dentro del modal
    >
      {/* <StatusBar style="ligth" backgroundColor='#84A1A7' /> */}
      <View style={styles.modalContent}>
        <Text>Contenido del modal</Text>
        <Button title="Cerrar" onPress={onClose} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default SimpleModal;
