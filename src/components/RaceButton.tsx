import React from 'react'
import { Button } from 'react-native-elements'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { StyleSheet } from 'react-native'

type RaceButtonPropsTypes = {
    text: string
    color: string
    icon: 'marker' | 'unlock'
    onPress: () => void
}

const RaceButton:React.FC<RaceButtonPropsTypes> = ({ text, color, icon, onPress }) => {
    return <Button
        icon={
            icon === 'marker'
                ? <MaterialCommunityIcons name="map-marker" size={24} color="#fff" style={styles.icon} />
                : <FontAwesome5 name="unlock" size={24} color="#fff" style={styles.icon} />
        }
        onPress={() => onPress()}
        title={text}
        buttonStyle={[{ backgroundColor: color }, styles.block]}
    />
};

const styles = StyleSheet.create({
    block: {
        paddingHorizontal: 35,
        paddingVertical: 15,
        borderRadius: 50,
        marginBottom: 15
    },

    icon: {
        paddingRight: 10
    }
});

export default RaceButton