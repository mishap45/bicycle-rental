import React, { useState } from 'react'
import { View } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { Entypo } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

const SettingsScreen = () => {
    const [checked, setChecked] = useState(true)

    return <View>
        <CheckBox
            center
            title='Українська'
            checkedIcon={<Entypo name="check" size={24} color="black" />}
            uncheckedIcon={<MaterialIcons name="radio-button-unchecked" size={24} color="black" />}
            checked={!checked}
            onPress={() => setChecked(!checked)}
        />

        <CheckBox
            center
            title='English'
            checkedIcon={<Entypo name="check" size={24} color="black" />}
            uncheckedIcon={<MaterialIcons name="radio-button-unchecked" size={24} color="black" />}
            checked={checked}
            onPress={() => setChecked(!checked)}
        />
    </View>
};

export default SettingsScreen