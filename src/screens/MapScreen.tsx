import React from 'react'
import {Text, TouchableOpacity} from 'react-native'

// @ts-ignore
const MapScreen = ({navigation}) => {
    return <TouchableOpacity onPress={() => navigation.navigate('BicyclesScreen')}><Text>MapScreen</Text></TouchableOpacity>
};

export default MapScreen