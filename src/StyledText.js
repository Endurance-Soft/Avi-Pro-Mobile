import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { theme } from "../constants";

const styles = StyleSheet.create({
  base: {
  },
  boldText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.tertiary
  },
  regularText: {
    fontSize: 16,
    color: theme.colors.secondaryText,
  },
  buttonText:{
  }
});

const StyledText = ({ children, style, regularText, boldText, buttonText, ...rest }) => {
    const customStyles = [
      regularText && styles.regularText,
      boldText && styles.boldText,
      buttonText && styles.buttonText,
      style,
    ].filter(Boolean);
  
    return (
      <Text style={customStyles} {...rest}>
        {children}
      </Text>
    );
  };
export default StyledText;
