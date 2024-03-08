import React, {useState, useCallback} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const SimpleModal = ({ isVisible, onClose }) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      useNativeDriver={true}
      backdropOpacity={0.5}
      swipeDirection={['down', 'up']}
      onSwipeComplete={onClose}
      propagateSwipe>
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
