import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'

import InfoButton from '../components/InfoButton'

type InfoScreenPropsTypes = {
    navigation: NavigationScreenProp<any, any>
}

const InfoScreen:React.FC<InfoScreenPropsTypes> = ({ navigation }) => {
    return <View>
        <Text style={styles.headerTextRace}>Маркер</Text>
        <View style={styles.infoMarkerContainer}>
            <Image source={require('../assets/icons/bicyclePoint.png')}
                   style={{
                       width: 65,
                       height: 65
                   }}
            />

            <Text style={styles.infoText}>Станція</Text>
        </View>

        <Text style={styles.grayText}>
            Нажміть на будь-яку станцію для перегляду точної кількості вільних
            велосипедів.
            {'\n'}
            {'\n'}
            Якщо у вас є вже акаунт то нажміть авторизуватись.
        </Text>
        
        <InfoButton onPress={() => navigation.navigate('Login')} text={'Авторизуватись'}/>
        <InfoButton onPress={() => navigation.navigate('Client')} text={'Зв`язатись з нами'}/>

    </View>
};

const styles = StyleSheet.create({
    headerTextRace: {
        fontWeight: '600',
        fontSize: 18,
        padding: 25
    },

    infoMarkerContainer: {
        paddingLeft: 13,
        flexDirection: 'row',
        alignItems: 'center'
    },

    infoText: {
        paddingLeft: 15,
        color: '#8675a9',
        fontWeight: '700',
        fontSize: 18
    },

    grayText: {
        marginTop: 40,
        marginBottom: 40,
        color: 'rgba(51, 51, 51, .5)',
        padding: 25,
        fontSize: 18
    }
});

export default InfoScreen