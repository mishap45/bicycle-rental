import React, { useState } from 'react'
import { View, StyleSheet, ScrollView, Text } from 'react-native'

import DatePiker from '../components/DatePiker'
import PricingCard from '../components/PricingCard'
import { NavigationScreenProp } from 'react-navigation'

type RegisterScreenPropsTypes = {
    navigation: NavigationScreenProp<any, any>
}

const RegisterScreen:React.FC<RegisterScreenPropsTypes> = ({ navigation }) => {
    const [step, setStep] = useState(1);

    return (
        <View style={styles.container}>
            {step === 1 && <DatePiker setStep={setStep} />}
            {step === 2 && <ScrollView>
                <Text style={styles.header}>Виберіть тариф</Text>

                <PricingCard ChooseTariff={() => navigation.navigate('Pay', { tariff: 'gg' })} price={'100'} tariff={'Тариф на три дні'}/>
                <PricingCard ChooseTariff={() => navigation.navigate('Pay', { tariff: 'gg' })} price={'100'} tariff={'Тариф на три дні'}/>
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