import React, { useState } from 'react'
import {View, StyleSheet, ScrollView, Text} from 'react-native'

import DatePiker from '../components/DatePiker'
import PricingCard from "../components/PricingCard";

const RegisterScreen = () => {
    const [step, setStep] = useState(1);
    const [birthdayUser, setBirthdayUser] = useState('');
    const [tarriffUser, setTarriffUser] = useState('');

    const [newUserData, setNewUserData] = useState({data: {
        email: '',
        password: '',
        birthday: birthdayUser,
        tarriff: tarriffUser,
        payCardNumber: '',
        payCardDate: '',
        payCardBackNumber: ''
    }})
    console.log('data', birthdayUser, 'dataa', newUserData)
    return (
        <View style={styles.container}>
            {step === 1 && <DatePiker setStep={setStep} setBirthdayUser={setBirthdayUser} />}
            {step === 2 && <ScrollView>
                <Text style={styles.header}>Виберіть тариф</Text>

                <PricingCard setTarriffUser={setTarriffUser} price={'100'} tariff={'Тариф на три дні'}/>
                <PricingCard setTarriffUser={setTarriffUser} price={'100'} tariff={'Тариф на три дні'}/>
            </ScrollView>}
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
        fontSize: 20,
        marginTop: 25
    }
});

export default RegisterScreen