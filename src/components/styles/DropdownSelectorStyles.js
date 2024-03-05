import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../constants';
const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
      marginHorizontal: 20,
      borderRadius: 20,
      backgroundColor: theme.colors.skyBlue,
      padding: 7,
      flexDirection: "row",
      justifyContent: 'flex-end',
    },
    label: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: 'center',
      borderRadius: 20,
      flex:1
    },
    optionText: {
      fontSize: 16,
      fontWeight: "bold",
    },
    menuTrigger: {
      flexDirection: "row",
      alignItems: 'center',
      elevation: 5,
        paddingVertical: 12,
        paddingHorizontal: 25,
        backgroundColor: theme.colors.tertiary,
        borderRadius: 22,
        elevation: 5,
    },
    triggerText: {
      color: theme.colors.primary,
        fontSize: 16,
        fontWeight: "bold",
        marginRight: 12,
    },
    menuOptions: {
      zIndex: 1,
    },
  });