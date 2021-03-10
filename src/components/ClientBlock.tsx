import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type ClientBlockPropsTypes = {
    text: string
    contactText: string
    onPress: () => void
}

const ClientBlock:React.FC<ClientBlockPropsTypes> = ({ text, contactText, onPress }) => {
    return <View>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.contactBlock}>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.contactText}>{contactText}</Text>
            </TouchableOpacity>
        </View>
    </View>
};

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'rgba(51, 51, 51, .5)',
        paddingTop: 15,
        paddingLeft: 15,
        paddingBottom: 10,
        textTransform: 'uppercase'
    },

    contactBlock: {
        padding: 15,
        backgroundColor: '#ddd',
        marginBottom: 30
    },

    contactText: {
        color: '#0275d8',
        fontSize: 16
    }
})

export default ClientBlock