import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HeaderText from '../../components/HeaderText'
import InfoScreen from '../InfoScreen'
import LoginScreen from '../LoginScreen'
import ClientScreen from '../ClientScreen'

const Stack = createStackNavigator();

const InfoStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Info"
                component={InfoScreen}
                options={{
                    headerTitle: () => <HeaderText text='Інформація' />,
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
        </Stack.Navigator>
    );
};

export default InfoStack