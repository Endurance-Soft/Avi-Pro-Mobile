import React from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';
import { theme } from '../../constants';
import { Controller } from 'react-hook-form';

const InputField = ({ control, name, title, type = 'default', rules, errors }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{title}</Text>
            <Controller
                control={control}
                name={name}
                defaultValue=""
                rules={rules}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        style={styles.input}
                        onChangeText={onChange}
                        value={value}
                        keyboardType={type === 'numeric' ? 'numeric' : 'default'}
                    />
                )}
            />
            {errors[name] && (
                <Text style={styles.error}>{errors[name].message}</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginBottom: 10,
    },
    label: {
        color: 'gray',
        fontSize: 18,
        marginBottom: 5,
        paddingLeft: 10
    },
    input: {
      height: 46,
      borderColor: 'gray',
      paddingHorizontal: 10,
      backgroundColor: theme.colors.otherWhite,
      borderRadius: 12,
      fontSize: 18,
      fontWeight: "bold",
    },
    error: {
        color: 'red',
        fontSize: 12,
        marginTop: 1,
        paddingLeft: 10
    },
});

export default InputField;
