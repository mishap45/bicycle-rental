import React from 'react'
import { Button } from 'react-native-elements'
import { StyleSheet } from 'react-native'

type InfoButtonPropsTypes = {
    text: string
}

const InfoButton:React.FC<InfoButtonPropsTypes> = ({ text }) => {
    return <Button
        title={text}
        buttonStyle={styles.block}
        titleStyle={styles.textStyle}
    />
};

const styles = StyleSheet.create({
    block: {
        paddingVertical: 15,
        borderRadius: 50,
        marginBottom: 15,
        backgroundColor: '#ddd',
        marginHorizontal: 25
    },

    textStyle: {
        color: '#222',
        fontWeight: '500'
    }
});

export default InfoButton