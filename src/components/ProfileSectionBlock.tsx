import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { NavigationScreenProp } from 'react-navigation'

type ProfileSectionBlockTypes = {
    text: string
    icon: 'login' | 'settings' | 'prices' | 'client' | 'version'
    rightType: 'empty' | 'arrow' | 'version'

    borderBottom?: boolean
    borderTop?: boolean

    navigation?: NavigationScreenProp<any, any>
    screen?: string
}

const ProfileSectionBlock:React.FC<ProfileSectionBlockTypes> = ({
                                                                    text,
                                                                    icon,
                                                                    rightType,
                                                                    borderBottom,
                                                                    borderTop,
                                                                    navigation,
                                                                    screen
                                                                }) => {
    return (
        <TouchableOpacity disabled={rightType === 'version'} onPress={() => navigation.navigate(screen)} style={[styles.block, styles.blockStyle,
            {
                borderBottomWidth: borderBottom ? 1 : 0.5,
                borderTopWidth: borderTop ? 1 : .5
            }]}>
            <View style={styles.block}>
                <View>
                    { icon === 'login'
                        ? <MaterialCommunityIcons name="login" size={24} color="rgba(51, 51, 51, .5)" />
                        : icon === 'settings'
                            ? <Ionicons name="md-settings" size={24} color="rgba(51, 51, 51, .5)" />
                            : icon === 'prices'
                            ? <Ionicons name="ios-pricetags" size={24} color="rgba(51, 51, 51, .5)" />
                            : icon === 'client'
                            ? <AntDesign name="customerservice" size={24} color="rgba(51, 51, 51, .5)" />
                            : <MaterialCommunityIcons name="cellphone" size={24} color="rgba(51, 51, 51, .5)" />
                    }
                </View>
                <View>
                    <Text style={styles.text}>
                        {text}
                    </Text>
                </View>
            </View>

            <View>
                { rightType === 'empty'
                    ? <Text> </Text>
                    : rightType === 'arrow'
                    ? <AntDesign name="right" size={16} color="rgba(51, 51, 51, .5)" />
                    : <Text style={styles.version}>
                            0.0.1
                        </Text>
                }

            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    blockStyle: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderTopColor: '#ddd',
        borderBottomColor: '#ddd'
    },

    text: {
        fontSize: 14,
        color: 'rgba(51, 51, 51, .5)',
        paddingLeft: 15
    },

    version: {
        fontSize: 14,
        color: 'rgba(51, 51, 51, .5)'
    }
});

export default ProfileSectionBlock