import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome } from '@expo/vector-icons'

import MapScreen from '../MapScreen'
import BicyclesScreen from '../BicyclesScreen'
import RaceScreen from '../RaceScreen'
import InfoScreen from '../InfoScreen'
import ProfileScreen from '../ProfileScreen'
import HeaderText from '../../components/HeaderText'

const Tab = createBottomTabNavigator();
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

type IconNameTypes = 'bicycle' | 'map-marker' | 'info-circle' | 'user-circle-o'

const AppNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="Map"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let iconName: IconNameTypes, colorIcon, background;

                    if (route.name === 'Map') {
                        iconName = 'map-marker';
                        colorIcon = focused ? '#8675a9' : '#c3aed6';
                        background = focused ? '#eaffd0' : '#fff'
                    } else if (route.name === 'Race') {
                        iconName = 'bicycle';
                        colorIcon = focused ? '#8675a9' : '#c3aed6';
                        background = focused ? '#eaffd0' : '#fff'
                    } else if (route.name === 'Info') {
                        iconName = 'info-circle';
                        colorIcon = focused ? '#8675a9' : '#c3aed6';
                        background = focused ? '#eaffd0' : '#fff'
                    } else if (route.name === 'Profile') {
                        iconName = 'user-circle-o';
                        colorIcon = focused ? '#8675a9' : '#c3aed6';
                        background = focused ? '#eaffd0' : '#fff'
                    }

                    return <FontAwesome style={{
                        padding: 5,
                        backgroundColor: background,
                        borderRadius: 20,
                        overflow: 'hidden',
                        width: 40, height: 40, textAlign: 'center',
                        lineHeight: 30
                    }} name={iconName} size={24} color={colorIcon}/>;
                },
            })}
        >

            <Tab.Screen
                name="Map"
                component={MapStack}
                options={{
                    tabBarLabel: () => null,
                    title: 'Map'
                }}
            />

            <Tab.Screen
                name="Race"
                component={RaceScreen}
                options={{
                    tabBarLabel: () => null,
                    title: 'Race'
                }}
            />

            <Tab.Screen
                name="Info"
                component={InfoScreen}
                options={{
                    tabBarLabel: () => null,
                    title: 'Info'
                }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: () => null,
                    title: 'Profile'
                }}
            />

        </Tab.Navigator>
    );
};


export default AppNavigation