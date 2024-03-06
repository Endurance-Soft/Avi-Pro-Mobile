// SearchBarStyles.js
import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../constants';

const windowWidth = Dimensions.get("window").width;

export const searchBarStyles = StyleSheet.create({
    container: {
      marginBottom: 20,
      flexDirection: "row",
      padding: 8,
      paddingLeft: 12,
      backgroundColor: theme.colors.skyBlue,
      borderRadius: 22,
      alignItems: "center",
      marginHorizontal: windowWidth * 0.05,
      elevation: 5,
    },
    searchTextInput: {
      flex: 1,
      marginLeft: 7,
      marginRight: 10,
      fontSize: 17,
      color: theme.colors.primaryText,
    },
    trigger: {
      elevation: 5,
      paddingVertical: 12,
      paddingHorizontal: 25,
      backgroundColor: theme.colors.tertiary,
      borderRadius: 22,
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
      width: 142,
      backgroundColor: theme.colors.tertiary,
      elevation: 5,
    },
    optionsWrapper: {
      marginLeft: 20,
    },
    optionsText: {
      color: theme.colors.primary,
      fontSize: 16,
      fontWeight: "bold",
    },
  });