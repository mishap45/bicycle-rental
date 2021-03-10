import React from 'react'
import { View, Image, StyleSheet, Linking } from 'react-native'

import ClientBlock from '../components/ClientBlock'

const ClientScreen = () => {
    return (
        <View>
            <View style={styles.logoBlock}>
                <Image source={require('../../assets/bicycleLogo.png')} style={styles.logo} />
            </View>

            <ClientBlock text={'Телефон'} contactText={'+380 66 34 92 454'} onPress={() => Linking.openURL('tel:+380663492454')} />
            <ClientBlock text={'Email'} contactText={'misha.pavlov@hive.com'} onPress={() => Linking.openURL('mailto:misha.pavlov@hive.com')} />
        </View>
    )
};

const styles = StyleSheet.create({
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'stretch'
    },

    logoBlock: {
        alignItems: 'center',
        marginVertical: 50
    }
})

export default ClientScreen