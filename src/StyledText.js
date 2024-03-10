import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { theme } from "../constants";

const styles = StyleSheet.create({
  base: {
    // fontSize: theme.fontSizes.body,
    // fontFamily: theme.fonts.main,
    // color: theme.colors.textPrimary,
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

// const StyledText = (props) => {
//   const { children, style, ...rest } = props;

//   const getStylesFromProps = () => {
//     const styleNames = Object.keys(rest);
//     const appliedStyles = styleNames.filter(name => rest[name]).map(name => styles[name]);
//     return appliedStyles;
//   };

//   return (
//     <Text style={[styles.base, ...getStylesFromProps(), style]}>
//       {children}
//     </Text>
//   );
// };
const StyledText = ({ children, style, regularText, boldText, buttonText, ...rest }) => {
    const customStyles = [
      regularText && styles.regularText,
      boldText && styles.boldText,
      buttonText && styles.buttonText,
      style, // Esto permite estilos adicionales pasados como prop
    ].filter(Boolean); // Filtra elementos falsy
  
    return (
      <Text style={customStyles} {...rest}>
        {children}
      </Text>
    );
  };
export default StyledText;
