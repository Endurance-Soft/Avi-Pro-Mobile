import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../constants';
const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    maxContainer: {
     backgroundColor: theme.colors.secondary,
     marginBottom: 5,
   },
   acountContainer: {
     flexDirection: 'row',
     backgroundColor: theme.colors.skyBlue,
     marginHorizontal: 20,
     padding: 5,
     borderRadius: 20,
     marginBottom: 10,
   },
   letter: {
     backgroundColor: theme.colors.tertiary,
     borderRadius: 17,
     justifyContent: 'center',
     alignItems: 'center',
     width: 55,
     height: 55,
   },
   initialLetter: {
     color: theme.colors.primary,
     fontSize: 22,
   },
   info: {
     marginLeft: 10,
   },
   welcomeText: {
     color: theme.colors.primaryText,
     fontSize: 15,
     fontWeight: 'normal',
   },
   userName: {
     color: theme.colors.primaryText,
     fontSize: 17,
     fontWeight: 'bold',
   },
   buttonContainer: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     paddingHorizontal: 10,
     marginBottom: 15,
   },
   button: {
     marginTop: 8,
     backgroundColor: theme.colors.skyBlue,
     borderRadius: 20,
     width: screenWidth*0.25,
     height: screenWidth*0.22,
     flex: 1,
     marginHorizontal: 10,
     justifyContent: 'flex-end',
     paddingVertical: 10,
     paddingLeft: 13,
     elevation:5,
   },
   buttonText: {
     marginTop: 3,
     fontWeight: 'bold',
   },
 });