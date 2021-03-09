import React from 'react'
import { StyleSheet, View } from 'react-native'

import HeaderText from './HeaderText'

type HeaderTextPropsTypes = {
    text: string
}

const Header:React.FC<HeaderTextPropsTypes> = ({ text }) => {
    return <View style={styles.block}><HeaderText text={text}/></View>
};

const styles = StyleSheet.create({
    block: {
        alignItems: 'center',
        backgroundColor: '#C3AED6',
        paddingBottom: 10,
        paddingTop: 30
    }
});

export default Header