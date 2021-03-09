import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MapScreen from '../MapScreen'
import HeaderText from '../../components/HeaderText'
import BicyclesScreen from '../BicyclesScreen'

const Stack = createStackNavigator();

const MapStack = () => {
    return (
        <Stack.Navigator>
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
                    headerTitle: () => <HeaderText text='Велосипеди' />,
                    headerBackTitle: 'назад',
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: '#C3AED6',
                    }
                }}
            />
        </Stack.Navigator>
    );
};

export default MapStack