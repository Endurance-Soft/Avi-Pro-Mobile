import React, { useState } from 'react';
import { TouchableWithoutFeedback, Animated, StyleSheet } from 'react-native';
import StyledText from './src/StyledText';
import { theme } from './constants';

const SimpleButton = ({ text, onPress, width }) => {
  const [scale, setScale] = useState(new Animated.Value(1));

  const animatePressIn = () => {
    Animated.timing(scale, {
      toValue: 0.80,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const animatePressOut = () => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 100, 
      useNativeDriver: true,
    }).start();
  };

  const handlePress = () => {
    animatePressIn();
    setTimeout(() => {
      animatePressOut();
    }, 400);
    onPress();
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={animatePressIn}
      onPressOut={animatePressOut}
      onPress={handlePress}
    >
      <Animated.View style={[styles.container, { transform: [{ scale }] }, width ? { width: width } : {}]}>
        <StyledText buttonText>{text}</StyledText>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.tertiary,
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 25,
  },
});

export default SimpleButton;

// USO

// import SimpleButton from './SimpleButton';

// const handleButtonPress = () => {
// console.log('El botón fue presionado!');
// };

// <SimpleButton
// text="Presióname"
// onPress={handleButtonPress}
// width={200} // Opcional: especifica un ancho para el botón
// />
