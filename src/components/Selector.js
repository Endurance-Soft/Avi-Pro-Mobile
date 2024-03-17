import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { theme } from '../../constants';
import { StyleSheet } from 'react-native';

const Selector = ({ title, options = [], selectedOption, onOptionChange }) => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(prevState => !prevState);
    };
  
    return (
        <View style={styles.container}>
            <Menu opened={menuVisible} onBackdropPress={() => setMenuVisible(false)}>
                <MenuTrigger onPress={toggleMenu} style={styles.inputContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.input}>
                        <Text style={styles.selectedOption}>{selectedOption}</Text>
                        <FontAwesome5 name={menuVisible ? "chevron-up" : "chevron-down"} size={20} color="gray" />
                    </View>
                </MenuTrigger>
                <MenuOptions customStyles={options.length > 0 ? menuStyles : null}>
                    {options.map((option) => (
                        <MenuOption key={option} onSelect={() => { onOptionChange(option); setMenuVisible(false); }}>
                            <Text style={styles.optionText}>{option}</Text>
                        </MenuOption>
                    ))}
                </MenuOptions>
            </Menu>
        </View>
    );
};

const menuStyles = {
    optionsContainer: {
        borderRadius: 12,
        backgroundColor: 'white',
        paddingHorizontal: 10,
    },
    optionText: {
        fontSize: 16,
        paddingVertical: 10,
    },
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginBottom: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 10,
        height: 50,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'gray',
    },
    input: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    selectedOption: {
        fontSize: 16,
        color: 'black',
        marginRight: 5,
    },
});

export default Selector;
