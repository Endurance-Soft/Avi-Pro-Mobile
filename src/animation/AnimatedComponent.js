import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';

const AnimatedComponent = ({ delay, children, style }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const yPosition = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(yPosition, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Animated.View
      style={[
        {
          opacity: fadeAnim,
          transform: [{ translateY: yPosition }],
        },
        style,
      ]}
    >
      {children}
    </Animated.View>
  );
};

export default AnimatedComponent;

// import AnimatedComponent from './AnimatedComponent';
// <AnimatedComponent delay={0}></AnimatedComponent>
// la animacion del componente que lo utiliza dura 300ml, 
// lo ideal es que el timepo de los componentes que continuan 
// la cascada tengan una diferencia de 200ml segun el orden vertical que tienen