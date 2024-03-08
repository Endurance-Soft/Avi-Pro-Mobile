import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AnimatedComponent from '../animation/AnimatedComponent';

const CascadingEffectScreen = () => {
  return (
    <View style={styles.container}>
      <AnimatedComponent delay={0}>
        <Text>Texto que aparece inmediatamente</Text>
      </AnimatedComponent>
      <AnimatedComponent delay={200} style={styles.delayedText}>
        <Text>Texto que aparece después de 2 segundos</Text>
      </AnimatedComponent>
      <AnimatedComponent delay={400} style={styles.delayedText}>
        <Text>Texto que aparece después de 2 segundos</Text>
      </AnimatedComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  delayedText: {
    marginTop: 20, // Espacio entre los textos animados
  },
});

export default CascadingEffectScreen;
