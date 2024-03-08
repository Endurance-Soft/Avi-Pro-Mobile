import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../constants';

export const noteItemstyles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary,
      paddingVertical: 15,
      paddingHorizontal: 20,
      marginVertical: 8,
      marginHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 2,
      borderRadius: 20,
      borderColor: theme.colors.otherWhite,
    },
    textNro:{
      fontWeight: 'bold',
      fontSize: 16,
      color: theme.colors.tertiary
    },
    textDate:{
      fontSize: 16,
      color: theme.colors.secondaryText,
    },
    amount:{
      fontWeight: 'bold',
      fontSize: 16,
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
      fontSize: 16,
      alignSelf: 'center',
      fontWeight: "bold",
    },
});