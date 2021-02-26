import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

type MapControlsPropsTypes = {
    currentLocation: () => void
}

const MapControls:React.FC<MapControlsPropsTypes> = ({ currentLocation }) => {
    return <TouchableOpacity style={styles.controlsBlock} onPress={() => currentLocation()}>
        <MaterialCommunityIcons name="crosshairs-gps" size={24} color="#8675a9" />
    </TouchableOpacity>
};

const styles = StyleSheet.create({
    controlsBlock: {
        backgroundColor: '#fff',
        position: 'absolute',
        padding: 10,
        borderRadius: 50,
        top: 25,
        right: 25
    }
});

export default MapControls