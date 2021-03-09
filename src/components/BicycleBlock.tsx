import React from 'react'
import { Text, View, StyleSheet, Image, ImageSourcePropType } from 'react-native'

type BicycleBlockPropsTypes = {
    name: string
    img: ImageSourcePropType
    weight: number
    diameter: number
    countGear: number
    type: string
    price: number
}

const BicycleBlock:React.FC<BicycleBlockPropsTypes> = ({ img, weight, diameter, countGear, type, price, name }) => {
    return <View style={styles.block}>
        <View>
            <Image style={{ width: 120, height: 120 }}
                   source={img}/>
        </View>

        <View style={styles.charactersBlock}>
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