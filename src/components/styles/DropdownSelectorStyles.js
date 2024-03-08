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
    optionsText: {
      color: theme.colors.primary,
      fontSize: 16,
      fontWeight: "bold",
    },
    menuTrigger: {
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 25,
      backgroundColor: theme.colors.tertiary,
      borderRadius: 22,
      width: 200,
    },
    menuTriggerInter: {
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    triggerText: {
      color: theme.colors.primary,
        fontSize: 16,
        fontWeight: "bold",
        marginRight: 12,
    },
    optionsContainer: {
      paddingVertical: 15,
      marginTop: 55,
      marginLeft: 0,
      borderRadius: 20,
      width: 200,
      backgroundColor: theme.colors.tertiary,
    },
    optionsWrapper: {
      marginLeft: 20,
    },
  });