import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Dimensions, Platform } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { NavigationScreenProp } from 'react-navigation'
import Constants from 'expo-constants'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'

import CustomMarker from '../components/CustomMarker'
import MapControls from '../components/MapControls'
import data from '../data/data'

type MapScreenPropsTypes = {
    navigation: NavigationScreenProp<any, any>
}

const MapScreen:React.FC<MapScreenPropsTypes> = ({ navigation }) => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loc, setLoc] = useState({ coords: {latitude: 49.553517, longitude: 25.594767} });

    let map: MapView;

    const currentLocation = () => {
        if (errorMsg) {
            alert(errorMsg);
        } else if (location) {
            map.animateToRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }, 2000);
            setLoc(location);
        }
    };

    const onRegionChange = (region: any) => {
        setLoc({ coords: region })
    };

    useEffect(() => {
        (async () => {
            if (Platform.OS === 'android' && !Constants.isDevice) {
                setErrorMsg(
                    'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
                );
                return;
            }
            let { status } = await Permissions.askAsync(Permissions.LOCATION);
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    const markers = data.map( d => <CustomMarker key={d.id} navigation={navigation}
                                                 latitude={d.latitude} longitude={d.longitude} bicycles={d.bicycles} />);

    return <View style={styles.container}>
        <MapView style={styles.mapStyle}
                 ref = {ref => map = ref}
                 provider={PROVIDER_GOOGLE}
                 showsUserLocation
                 initialRegion={{
                     latitude: loc.coords.latitude,
                     longitude: loc.coords.longitude,
                     latitudeDelta: 0.0922,
                     longitudeDelta: 0.0421
                 }}
                 onRegionChange={onRegionChange}
        >
            {markers}
        </MapView>
        <MapControls currentLocation={currentLocation} />
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },

    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },

    text: {
        position: 'absolute'
    }
});

export default MapScreen