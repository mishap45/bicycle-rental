import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HeaderText from '../../components/HeaderText'
import RaceScreen from '../RaceScreen'
import LoginScreen from '../LoginScreen'
import RegisterScreen from '../RegisterScreen'
import PayScreen from '../PayScreen'

const Stack = createStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Race"
                component={RaceScreen}
                options={{
                    headerTitle: () => <HeaderText text='Поїздка' />,
                    headerStyle: {
                        backgroundColor: '#C3AED6',
                    }
                }}
            />

            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    headerTitle: () => <HeaderText text='Логін' />,
                    headerBackTitle: 'back',
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: '#C3AED6',
                    }
                }}
            />

            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{
                    headerTitle: () => <HeaderText text='Реєстрація' />,
                    headerBackTitle: 'back',
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: '#C3AED6',
                    }
                }}
            />

            <Stack.Screen
                name="Pay"
                component={PayScreen}
                options={{
                    headerTitle: () => <HeaderText text='Оплата' />,
                    headerBackTitle: 'back',
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: '#C3AED6',
                    }
                }}
            />
        </Stack.Navigator>
    );
};

export default ProfileStack