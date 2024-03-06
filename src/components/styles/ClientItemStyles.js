import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../constants';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    item: { 
      paddingVertical: 13,
      paddingHorizontal: 17,
      backgroundColor: theme.colors.primary,
      borderRadius: 10,
      marginHorizontal: 20,
      marginVertical: 10,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: theme.colors.otherWhite,
    },
    iconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconWraped: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.tertiary,
      borderRadius: 20,
      width: 70,
      height: 70,
    },
    icon: {
      color: theme.colors.primary,
      fontSize: 30,
      fontWeight: 'medium',
    },
    detailsContainer: {
      marginLeft: 17,
    },
    name: {
      fontWeight: 'bold',
      fontSize: 16,
      color: theme.colors.tertiary
    },
    codeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    code: {
      fontSize: 16,
      marginLeft: 5,
      color: theme.colors.secondaryText,
    },
    balance: {
      fontSize: 16,
      marginLeft: 8,
      color: theme.colors.secondaryText,
    },
    notesContainer: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    notes: {
      fontSize: 16,
      color: theme.colors.secondaryText,
    },
    lastPayment: {
      fontSize: 16,
      color: theme.colors.secondaryText,
    },
    lineContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    line: {
      marginVertical: 13 ,
      backgroundColor: theme.colors.otherWhite,
      width: windowWidth*0.8,
      height: 2,
    },
  });