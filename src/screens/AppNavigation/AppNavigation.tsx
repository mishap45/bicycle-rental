import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MapScreen from '../MapScreen'
import BicyclesScreen from '../BicyclesScreen'
import HeaderText from '../../components/HeaderText'

const Stack = createStackNavigator();

const AppNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: '#2A86FF',
                headerStyle: {
                    elevation: .8,
                    shadowOpacity: .8
                }
            }}
            headerMode="screen"
        >
            <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                    headerTitle: () => <HeaderText text='Bicycle Rental' />,
                    headerStyle: {
                        backgroundColor: '#C3AED6',
                    }
                }}
            />

            <Stack.Screen
                name="BicyclesScreen"
                component={BicyclesScreen}
                options={{
                    headerTitle: () => <HeaderText text='Bicycles' />,
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

export default AppNavigation