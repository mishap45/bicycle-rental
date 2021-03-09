import React, { useState } from 'react'
import {View, StyleSheet, ScrollView, Text} from 'react-native'

import DatePiker from '../components/DatePiker'
import PricingCard from "../components/PricingCard";

const RegisterScreen = () => {
    const [step, setStep] = useState(1);

    return (
        <View style={styles.container}>
            {step === 1 && <DatePiker setStep={setStep} />}
            {step === 2 && <ScrollView>
                <Text style={styles.header}>Виберіть тариф</Text>

                <PricingCard step={step} setStep={setStep} price={'100'} tariff={'Тариф на три дні'}/>
                <PricingCard step={step} setStep={setStep} price={'100'} tariff={'Тариф на три дні'}/>
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