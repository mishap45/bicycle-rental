import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native'
import { Fontisto } from '@expo/vector-icons'

import LoginScreen from '../screens/LoginScreen'

type PricingCardPropsTypes = {
    price: string
    tariff: string

    ChooseTariff: () => void
}

const PricingCard: React.FC<PricingCardPropsTypes> = ({ price, tariff, ChooseTariff }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return <View style={styles.priceCard_Container}>
        <Text style={styles.price}>{price} грн.</Text>

        <Text style={styles.price_Info}>{tariff}</Text>

        <TouchableOpacity onPress={() => {
            //setModalVisible(true)
            ChooseTariff()
        }} style={styles.price_Button}>
            <Fontisto name="bicycle" style={styles.iconStyle} size={16} color={'white'}/>
            <Text style={styles.TextStyle}>Вибрати</Text>
        </TouchableOpacity>

        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                alert('Modal has been closed.');
                setModalVisible(!modalVisible)
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Введіть пошту і пароль</Text>
                    <LoginScreen marginT={10} marginH={10} textButton={'Зареєструватись'} />

                    <TouchableOpacity style={styles.close} onPress={() => setModalVisible(!modalVisible)}>
                        <Fontisto name="close" size={24} color="rgba(51, 51, 51, .5)" />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    </View>
};

const styles = StyleSheet.create({
    close: {
        position: 'absolute',
        top: 10,
        right: 10
    },

    priceCard_Container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        borderWidth: 0.5,
        borderColor: '#ffd5cd',
        paddingVertical: 75,
        marginBottom: 50
    },

    price: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#8675a9'
    },

    price_Info: {
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 5,
        color: '#B0BEC5',
        fontSize: 18
    },

    price_Button: {
        width: '90%',
        marginTop: 15,
        marginBottom: 10,
        backgroundColor: '#c3aed6',
        borderRadius: 50,
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    iconStyle: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginRight: 15
    },

    TextStyle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 15
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },

    modalView: {
        width: '85%',
        margin: 5,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    modalText: {
        marginBottom: 18,
        textAlign: 'center',
    },
});

export default PricingCard