import React, { useState } from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
// @ts-ignore
import { CreditCardInput } from 'react-native-credit-card-input'
import { Formik } from 'formik'
import { Input, Button } from 'react-native-elements'
import { MaterialIcons } from '@expo/vector-icons'
import FlashMessage, { showMessage } from 'react-native-flash-message'
import { useMutation } from '@apollo/client'
import { CREATE_USER } from '../graphql/autorization'

type errorsTypes = {
    email?: string
    password?: string
}

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
            birthdayUser: string
            tariffUser: string
        }
    }
}

const PayScreen:React.FC<PayScreenPropsTypes> = ({ route }) => {
    const { tariff, birthdayUser, tariffUser } = route.params;
    const [card, setCard] = useState<onChangeType>();
    const [createUser, { data }] = useMutation(CREATE_USER);

    const _onChange = (form: onChangeType) => setCard(form);

    return <ScrollView>
        <FlashMessage position="top" />
        <Text style={styles.header}>{tariff}</Text>
        <CreditCardInput allowScroll onChange={_onChange} />

        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors: errorsTypes = {};
                if (!values.email) {
                    errors.email = `Є обов'язковим`;
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Не правильний Email';
                }

                if (!values.password) {
                    errors.password = `Є обов'язковим`;
                } else if (values.password.length < 6) errors.password = 'Пароль не повинен бути коротший 6-ти символів';

                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                createUser({ variables: {
                        email: values.email,
                        password: values.password,
                        birthday: birthdayUser.toString(),
                        tarriff: tariffUser,
                        payCardNumber: card.values.number,
                        payCardDate: card.values.expiry,
                        patCardBackNumber: card.values.cvc
                } });
                console.log(JSON.stringify(data));
                setSubmitting(false);
                values.email = '';
                values.password = '';
            }}
        >
            {({ values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting }) => (
                <View style={{ padding: 15 }}>
                    <Input
                        placeholder='Email'
                        leftIcon={
                            <MaterialIcons name="email" size={24} color="rgba(51, 51, 51, .5)" />
                        }
                        errorStyle={{ color: 'red' }}
                        errorMessage={errors.email && touched.email && errors.email}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        autoCompleteType={"email"}
                        keyboardType={'email-address'}
                    />

                    <Input
                        placeholder="Пароль"
                        secureTextEntry={true}
                        leftIcon={
                            <MaterialIcons name="lock-outline" size={24} color="rgba(51, 51, 51, .5)" />
                        }
                        errorStyle={{ color: 'red', marginBottom: 50 }}
                        errorMessage={errors.password && touched.password && errors.password}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                    />

                    <Button
                        title={'Зареєструватись'}
                        loading={isSubmitting}
                        buttonStyle={{ backgroundColor: '#16c79a', height: 50, borderRadius: 50 }}
                        onPress={handleSubmit}
                    />
                </View>
            )}
        </Formik>
    </ScrollView>
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