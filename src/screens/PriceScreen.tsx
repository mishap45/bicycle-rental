import React from 'react'
import { DataTable } from 'react-native-paper'
import { ScrollView } from 'react-native'

const PriceScreen = () => {
    return <ScrollView>
        <DataTable>
            <DataTable.Row>
                <DataTable.Cell>Три дні</DataTable.Cell>
                <DataTable.Cell numeric>100 грн</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Сім днів</DataTable.Cell>
                <DataTable.Cell numeric>250 грн</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Чотирнадцять днів</DataTable.Cell>
                <DataTable.Cell numeric>500 грн</DataTable.Cell>
            </DataTable.Row>
        </DataTable>
    </ScrollView>
};

export default PriceScreen