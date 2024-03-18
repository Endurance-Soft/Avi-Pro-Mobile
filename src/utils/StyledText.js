import React from 'react';
import { Text, StyleSheet, Dimensions } from 'react-native';
import { theme } from "../../constants";
const { height } = Dimensions.get('window');

const regularTextSize = height * 0.025
const bigTextSize = height * 0.025

const styles = StyleSheet.create({
  base: {
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: theme.colors.tertiary,  
    // color: 'red',
  },
  boldTextUpper: {
    fontWeight: 'bold',
    fontSize: bigTextSize,
    textTransform: 'uppercase',
    color: theme.colors.tertiary,  
    // color: 'blue',  
  },
  regularText: {
    fontSize: regularTextSize,
    color: theme.colors.secondaryText,
    // color: 'red',
  },
  regularIntenceText: { // no devuelto
    fontSize: regularTextSize,
    color: theme.colors.primaryText,
    // color: 'red',
  },

  boldCenterText: {
    // extras
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.tertiary,  
    textTransform: 'uppercase',
    textAlign: 'center',  
  },
  // estras
  buttonText:{
    color: theme.colors.primary,
    fontSize: regularTextSize,
    fontWeight: "bold",
  },
  initial:{
    color: theme.colors.primary,
    fontSize: 33,
    // fontWeight: 'medium',
    fontWeight: 'bold',
  }
});

const StyledText = ({ children, style, regularText, boldText, buttonText, boldTextUpper, initial, ...rest }) => {
    const customStyles = [
      regularText && styles.regularText,
      boldText && styles.boldText,
      buttonText && styles.buttonText,
      boldTextUpper && styles.boldTextUpper,
      initial && styles.initial,
      style,
    ].filter(Boolean);
  
    return (
      <Text allowFontScaling={false} style={customStyles} {...rest}>
        {children}
      </Text>
    );
  };
export default StyledText;
