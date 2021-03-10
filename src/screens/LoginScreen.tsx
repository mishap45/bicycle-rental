import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { MaterialIcons } from '@expo/vector-icons'
import { Formik } from 'formik'
import { NavigationScreenProp } from 'react-navigation'

type errorsTypes = {
    email?: string
    password?: string
}

type LoginScreenPropsTypes = {
    navigation?: NavigationScreenProp<any, any>
    marginT: number
    marginH: number
    textButton: string
}

const LoginScreen: React.FC<LoginScreenPropsTypes> = ({ navigation, marginT = 150, marginH = 20, textButton = 'Увійти' }) => {
    return (
        <View style={[styles.container, {marginTop: marginT, paddingHorizontal: marginH}]}>
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
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        navigation.navigate('Race')
                    }, 400);
                }}
            >
                {({ values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting }) => (
                    <View>
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
                            title={textButton}
                            loading={isSubmitting}
                            buttonStyle={{ backgroundColor: '#16c79a', height: 50, borderRadius: 50 }}
                            onPress={handleSubmit}
                        />
                    </View>
                )}
            </Formik>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%'
    }
});

export default LoginScreen