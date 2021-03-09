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
    navigation: NavigationScreenProp<any, any>
}

const LoginScreen: React.FC<LoginScreenPropsTypes> = ({ navigation }) => {
    return (
        <View style={styles.container}>
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
                        />

                        <Input
                            placeholder="Пароль"
                            secureTextEntry={true}
                            leftIcon={
                                <MaterialIcons name="lock-outline" size={24} color="rgba(51, 51, 51, .5)" />
                            }
                            errorStyle={{ color: 'red' }}
                            errorMessage={errors.password && touched.password && errors.password}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                        />

                        <Button
                            title="Loading button"
                            loading={isSubmitting}
                            buttonStyle={{ backgroundColor: '#16c79a' }}
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
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 25
    }
});

export default LoginScreen