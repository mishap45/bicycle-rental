import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Button } from 'react-native-elements'

type DatePikerPropsTypes = {
    setStep: (step: number) => void
    setBirthdayUser: (date: string) => void
}

const DatePiker:React.FC<DatePikerPropsTypes> = ({ setStep, setBirthdayUser }) => {
    const [date, setDate] = useState(new Date(1598051730000));

    const onPress = () => {
        setBirthdayUser(date.toString());
        setStep(2)
    }

    // @ts-ignore
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Виберіть дату народження</Text>

            <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode='date'
                is24Hour={true}
                display="spinner"
                onChange={onChange}
                style={{ marginBottom: 50 }}
            />

            <Button
                title="Далі"
                buttonStyle={{ backgroundColor: '#222', height: 50, borderRadius: 50 }}
                onPress={onPress}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 25
    },

    header: {
        textAlign: 'center',
        marginBottom: 50,
        fontWeight: '600',
        fontSize: 20
    }
});

export default DatePiker