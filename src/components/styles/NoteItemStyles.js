import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../constants';
const windowWidth = Dimensions.get("window").width;

export const noteItemstyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.primary,
      paddingVertical: 8,
      paddingHorizontal: 20,
      marginVertical: 10,
      marginHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 2,
      borderColor: theme.colors.otherWhite,
      display: 'flex',
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
      fontSize: 18,
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
    },
});