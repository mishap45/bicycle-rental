import React, { useState } from 'react'
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { Button } from 'react-native-elements'

type BicycleBlockPropsTypes = {
    name: string
    weight: number
    diameter: number
    countGear: number
    type: string
    price: number
    status: boolean
}

const BicycleBlock:React.FC<BicycleBlockPropsTypes> = ({ weight, diameter, countGear, type, price, name, status }) => {
    const [statusBike, setStatusBike] = useState(status);
    const [changed, setChanged] = useState(false);

    return <View style={[styles.block, { opacity: statusBike ? 1 : .5 }]}>
        <View>
            <Image style={{ width: 120, height: 120 }}
                   source={require('../assets/images/bicycle.png')}/>
        </View>

        <View style={styles.charactersBlock}>
            { changed &&
                <TouchableOpacity style={{ width: 42, height: 42, position: 'absolute', right: 75, zIndex: 10 }}
                                  onPress={() => { setChanged(false); setStatusBike(!statusBike) }}>
                    <Image source={require('../assets/icons/close.png')}
                           style={{ width: 42, height: 42 }}
                    />
                </TouchableOpacity>}
            <View>
                <Text style={styles.header}>{name}</Text>
            </View>

            <View style={styles.characters}>
                <Text>Вага: {weight} кг</Text>
                <Text>Діаметр коліс: {diameter}"</Text>
                <Text>Кількість передач: {countGear}</Text>
                <Text>Тип: {type}</Text>
            </View>

            <View>
                <Text style={styles.price}>Ціна за годину {price} грн/год</Text>
                <Button title={statusBike ? 'Замовити' : 'Замовлено'} buttonStyle={{ width: 150, marginTop: 15,
                        marginLeft: 25, backgroundColor: '#C3AED6' }}
                        disabled={!statusBike} onPress={() => { setStatusBike(!statusBike); setChanged(true) }} />
            </View>
        </View>
    </View>
};

const styles = StyleSheet.create({
    block: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#C3AED6',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        marginHorizontal: 16,
        marginTop: 16
    },
    charactersBlock: {
        padding: 8,
        overflow: 'hidden'
    },
    header: {
      color: '#C3AED6',
      fontWeight: 'bold',
        marginBottom: 8
    },
    characters: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '72%',
        marginBottom: 12,
        fontSize: 12
    },
    price: {
        color: '#E40017',
        textAlign: 'right',
        width: '75%'
    },
    text: {
        fontSize: 12,
        width: '72%',
        borderWidth: 1,
        borderColor: 'red'
    }
});

export default BicycleBlock