import React from 'react'
import { NavigationScreenProp } from 'react-navigation'
import { MarkerAnimated } from 'react-native-maps'
import { Image } from 'react-native'

type CustomMarkerPropsTypes = {
    navigation: NavigationScreenProp<any,any>

    latitude: number
    longitude: number

    bicycles: Array<{
        id_bicycle: number
        name: string
        status: boolean
        weight: number
        diameter: number
        countGear: number
        type: string
        price: number
    }>
}

const CustomMarker:React.FC<CustomMarkerPropsTypes> = ({ navigation, latitude, longitude, bicycles }) => {

    return <MarkerAnimated coordinate={{ latitude: latitude, longitude: longitude }}
                   onPress={() => navigation.navigate('BicyclesScreen', { bicycles: bicycles })}>
        <Image
            style={{ width: 64, height: 64 }}
            source={require('../assets/icons/bicyclePoint.png')}
        />
    </MarkerAnimated>
};

export default CustomMarker