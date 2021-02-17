import React from 'react'
import { Text, StyleSheet } from 'react-native'

type HeaderTextPropsTypes = {
    text: string
}

const HeaderText:React.FC<HeaderTextPropsTypes> = ({ text }) => {
    return <Text style={styles.text}>{text}</Text>
};

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff'
    }
});

export default HeaderText