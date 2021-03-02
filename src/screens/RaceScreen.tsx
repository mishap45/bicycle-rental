import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

import Header from '../components/Header'
import RaceButton from '../components/RaceButton'

const RaceScreen = () => {
    return <View>
        <Header text={'Поїздка'}/>
        <View style={styles.container}>
            <Text style={styles.headerTextRace}>У вас немає відкритих поїздок</Text>
            <RaceButton text={'Найти велосипед'} color={'#323232'} icon={'marker'}/>
            <RaceButton text={'Розблокувати велосипед'} color={'#ff1e56'} icon={'unlock'}/>
        </View>
    </View>
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height * .85
    },

    headerTextRace: {
        fontWeight: '600',
        fontSize: 32,
        textAlign: 'center',
        paddingBottom: 45
    }
});

export default RaceScreen