import React from 'react'
import { ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'

import ProfileSectionHeader from '../components/ProfileSectionHeader'
import ProfileSectionBlock from '../components/ProfileSectionBlock'

type ProfileScreenPropsTypes = {
    navigation: NavigationScreenProp<any, any>
}

const ProfileScreen:React.FC<ProfileScreenPropsTypes> = ({ navigation }) => {
    return <ScrollView>
        <ProfileSectionHeader text={'Обліковий запис'} />
        <ProfileSectionBlock navigation={navigation} screen={'Login'} text={'Логін'} icon={'login'} rightType={'empty'} borderBottom borderTop />

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.greenText}>Підписатись</Text>
        </TouchableOpacity>

        <ProfileSectionHeader text={'Інше'} />
        <ProfileSectionBlock navigation={navigation} screen={'Settings'} text={'Налаштування'} icon={'settings'} rightType={'arrow'} borderTop />
        <ProfileSectionBlock navigation={navigation} screen={'Price'} text={'Ціни'} icon={'prices'} rightType={'arrow'} />
        <ProfileSectionBlock navigation={navigation} screen={'Client'} text={'Обслуговування клієнтів'} icon={'client'} rightType={'arrow'} />
        <ProfileSectionBlock text={'Версія'} icon={'version'} rightType={'version'} borderBottom />
    </ScrollView>
};

const styles = StyleSheet.create({
    greenText: {
        color: '#16c79a',
        fontWeight: '600',
        textAlign: 'right',
        paddingTop: 10,
        paddingRight: 25
    }
});

export default ProfileScreen