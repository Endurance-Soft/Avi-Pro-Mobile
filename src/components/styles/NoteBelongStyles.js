import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../constants';

export const noteBelongstyles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary,
      paddingVertical: 8,
      paddingHorizontal: 20,
      marginVertical: 2,
      marginHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 2,
      borderRadius: 20,
      borderColor: theme.colors.otherWhite,
      display: 'flex',
      marginVertical: 8,
    },
    textNro:{
      fontWeight: 'bold',
      fontSize: 18,
      color: theme.colors.tertiary
    },
    textDate:{
      fontSize: 16,
      color: theme.colors.secondaryText,
    },
    amount:{
      fontWeight: 'bold',
      fontSize: 20,
      color: theme.colors.green,
    },
    button:{
      backgroundColor: theme.colors.tertiary,
      paddingHorizontal: 20,
      paddingVertical:10,
      borderRadius: 22,
    },
    textButton:{
      color: theme.colors.primary,
      fontWeight: 'bold',
      fontSize: 16,
    },
});