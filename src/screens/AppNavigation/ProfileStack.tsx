import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HeaderText from '../../components/HeaderText'
import ProfileScreen from '../ProfileScreen'
import LoginScreen from '../LoginScreen'
import RegisterScreen from '../RegisterScreen'
import PriceScreen from '../PriceScreen'
import SettingsScreen from '../SettingsScreen'
import ClientScreen from '../ClientScreen'
import PayScreen from "../PayScreen";

const Stack = createStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerTitle: () => <HeaderText text='Профіль' />,
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
                name="Price"
                component={PriceScreen}
                options={{
                    headerTitle: () => <HeaderText text='Ціни' />,
                    headerBackTitle: 'back',
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: '#C3AED6',
                    }
                }}
            />

            <Stack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    headerTitle: () => <HeaderText text='Мова' />,
                    headerBackTitle: 'back',
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: '#C3AED6',
                    }
                }}
            />

            <Stack.Screen
                name="Client"
                component={ClientScreen}
                options={{
                    headerTitle: () => <HeaderText text='Обслуговування клієнтів' />,
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