import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../constants';
const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
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
      borderRadius: 20,
      borderWidth: 2,
      borderColor: theme.colors.otherWhite,
    },
    group: {
      flex: 0.8,
    },
    containerAmount: {
    },
    name: {
      fontSize: 16,
      fontWeight: 'bold',
      color: theme.colors.primaryText,
    },
    amount: {
      fontSize: 16,
  
    },
    date: {
      fontSize: 14,
      color:  theme.colors.secondaryText,
    },
  });