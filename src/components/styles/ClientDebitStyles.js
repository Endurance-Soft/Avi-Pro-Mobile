//clientDebitStyles
import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../constants';
const screenWidth = Dimensions.get('window').width;

export const clientDebitStyles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.skyBlue,
        borderRadius:22,
        width: screenWidth-40,
        alignSelf: 'center',
        marginBottom: 20,
    },
    spaceButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: 15,
    },
    button:{
        backgroundColor: theme.colors.tertiary,
        borderRadius: 22,
        paddingVertical: 12,
        padding: 10,
        width: screenWidth*0.4,
    },
    textButton:{
        color: theme.colors.primary,
        fontSize: 16,
        alignSelf: 'center',
        fontWeight: "bold",
    }
})