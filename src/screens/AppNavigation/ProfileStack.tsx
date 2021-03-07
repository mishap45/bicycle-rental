import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HeaderText from '../../components/HeaderText'
import ProfileScreen from '../ProfileScreen'
import {View, Text} from "react-native";

const Stack = createStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    headerTitle: () => <HeaderText text='Профіль' />,
                    headerStyle: {
                        backgroundColor: '#C3AED6',
                    }
                }}
            />

            <Stack.Screen
                name="BicyclesScreen"
                component={() => <View><Text>gg</Text></View>}
                options={{
                    headerTitle: () => <HeaderText text='Велосипеди' />,
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