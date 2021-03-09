import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Modal, TouchableHighlight } from 'react-native'
import { Fontisto } from '@expo/vector-icons'

type PricingCardPropsTypes = {
    price: string
    tariff: string
    setStep: (step: number) => void
    step: number
}

const PricingCard: React.FC<PricingCardPropsTypes> = ({price, tariff, setStep, step}) => {
    const [modalVisible, setModalVisible] = useState(false);

    return <> <View style={styles.priceCard_Container}>
        <Text style={styles.price}>{price + ' грн.'}</Text>

        <Text style={styles.price_Info}>{tariff}</Text>

        <TouchableOpacity onPress={() => { setModalVisible(true); setStep(3) }} style={styles.price_Button}>
            <Fontisto name="bicycle" style={styles.iconStyle} size={16} color={'white'}/>
            <Text style={styles.TextStyle}>Вибрати</Text>
        </TouchableOpacity>
    </View>

        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>

                        <TouchableHighlight
                            style={{...styles.openButton, backgroundColor: '#2196F3'}}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        </View>
    </>
};

const styles = StyleSheet.create({
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
        margin: 20,
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
    openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default PricingCard