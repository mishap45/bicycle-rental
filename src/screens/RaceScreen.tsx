import React, { useRef } from 'react'
import { View, Text, StyleSheet, Dimensions, Button } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import RBSheet from 'react-native-raw-bottom-sheet'

import Header from '../components/Header'
import RaceButton from '../components/RaceButton'

type RaceScreenPropsTypes = {
    navigation: NavigationScreenProp<any, any>
}

const RaceScreen:React.FC<RaceScreenPropsTypes> = ({ navigation }) => {
    const refRBSheet = useRef();

    return <View>
        <Header text={'Поїздка'}/>
        <View style={styles.container}>
            <Text style={styles.headerTextRace}>У вас немає відкритих поїздок</Text>
            <RaceButton onPress={() => navigation.navigate('Map')}
                        text={'Найти велосипед'} color={'#323232'} icon={'marker'}/>
            {/*@ts-ignore*/}
            <RaceButton onPress={() => refRBSheet.current.open()} text={'Розблокувати велосипед'} color={'#ff1e56'} icon={'unlock'}/>

            <View>
                <RBSheet
                    ref={refRBSheet}
                    closeOnDragDown={true}
                    closeOnPressMask={false}
                    customStyles={{
                        wrapper: {
                            backgroundColor: "transparent",
                            marginHorizontal: 15,
                            marginBottom: 60
                        },
                        container: {
                            borderRadius: 25
                        },
                        draggableIcon: {
                            backgroundColor: "#000"
                        }
                    }}
                >
                    <Text style={styles.bottomText}>Підключайтесь до вашого існуючого акаунту
                        або створіть новий</Text>

                    <View style={{ marginTop: 30 }}>
                        <Button title={'Підключитись'} onPress={() => alert('connect')} />
                    </View>

                    <View style={{ marginTop: 30 }}>
                        <Button title={'Створити'} onPress={() => alert('create')} />
                    </View>
                </RBSheet>
            </View>
        </View>
    </View>
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height * .85
    },

    headerTextRace: {
        fontWeight: '600',
        fontSize: 32,
        textAlign: 'center',
        paddingBottom: 45
    },
    bottomText: {
        textAlign: 'center',
        paddingVertical: 10,
        color: 'rgba(51, 51, 51, .5)'
    }
});

export default RaceScreen