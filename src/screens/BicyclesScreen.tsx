import React from 'react'
import { FlatList, ImageSourcePropType } from 'react-native'

import BicycleBlock from '../components/BicycleBlock'

type BicyclesScreenPropsTypes = {
    route: {
        params: {
            bicycles: Array<{
                id_bicycle: number
                name: string
                img: ImageSourcePropType
                weight: number
                diameter: number
                countGear: number
                type: string
                price: number
            }>
        }
    }
}

const BicyclesScreen:React.FC<BicyclesScreenPropsTypes> = ({ route }) => {
    const { bicycles } = route.params;

    return <FlatList
        data={bicycles}
        renderItem={({ item }) => (
            <BicycleBlock img={item.img} type={item.type} price={item.price} countGear={item.countGear}
                          diameter={item.diameter} weight={item.weight} name={item.name} />
        )}
        keyExtractor={item => item.id_bicycle.toString()}
    />
};

export default BicyclesScreen