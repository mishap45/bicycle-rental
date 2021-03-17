import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { CreditCardInput } from 'react-native-credit-card-input'

type onChangeType = {
    status: {
        cvc: string
        expiry: string
        number: string
    }
    valid: boolean
    values: {
        cvc: string
        expiry: string
        number: string
        type: string
    }
}

type PayScreenPropsTypes = {
    route: {
        params: {
            tariff: string
        }
    }
}

const PayScreen:React.FC<PayScreenPropsTypes> = ({ route }) => {
    const { tariff } = route.params;
    const [card, setCard] = useState<onChangeType>();

    const _onChange = (form: onChangeType) => setCard(form);

    return <View>
        <Text style={styles.header}>{tariff}</Text>
        <CreditCardInput autoFocus allowScroll onChange={_onChange} />
    </View>
};

const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        marginBottom: 50,
        fontWeight: '600',
        fontSize: 20,
        marginVertical: 25
    }
});

export default PayScreen