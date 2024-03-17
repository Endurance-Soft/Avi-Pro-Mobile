import React, {useState} from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';
import { theme } from '../../constants';
import { Controller } from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';
import { formatDate } from 'date-fns';

const DateInputField = ({ control, name, title, type = 'default' }) => {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setSelectedDate(currentDate);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{title}</Text>
            <Controller
                control={control}
                name={name}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        style={styles.input}
                        onFocus={() => setShowDatePicker(true)}
                        onChangeText={onChange}
                        value={formatDate(selectedDate, 'dd/MM/yyyy', { awareOfUnicodeTokens: true })}
                        keyboardType={type === 'numeric' ? 'numeric' : 'default'}
                    />
                    
                )}
            />
            {showDatePicker && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={selectedDate}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={handleDateChange}
                />
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

export default DateInputField;