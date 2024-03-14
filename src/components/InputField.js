import React from 'react';
import { Controller, TextInput, Text } from 'react-native';

const inputField = ({ control, name, label, rules }) => (
    <View>
        <Text >{label}</Text>
        <Controller
            control={control}
            name={name}
            defaultValue=""
            rules={rules}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextInput
                    onChangeText={onChange}
                    value={value}
                    keyboardType="numeric"
                />
            )}
        />
        {errors[name] && (
            <Text >{errors[name].message}</Text>
        )}
    </View>
);

export default inputField;