//clientDebitStyles
import { StyleSheet } from 'react-native';
import { theme } from '../../../constants';

export const clientDebitStyles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.skyBlue,
        borderRadius:22,
        alignItems: 'center',
        padding: 10,
        width: '90%',
        alignSelf: 'center',
        display: 'flex',
    },
    spaceButtons: {
        flexDirection: 'row',
        alignContent: 'space-between',
        gap: 15,
        marginTop: 20,
    },
    text: {
        fontSize: 36,
        fontWeight: 'bold',
    },
    button:{
        paddingHorizontal: 30,
        backgroundColor: theme.colors.tertiary,
        borderRadius: 22,
        padding: 10,
    },
    textButton:{
        color: theme.colors.primary,
        fontSize:20,
        fontWeight: '500',
    }
})