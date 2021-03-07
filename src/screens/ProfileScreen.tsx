import React from 'react'
import { ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native'
import ProfileSectionHeader from '../components/ProfileSectionHeader'
import ProfileSectionBlock from '../components/ProfileSectionBlock'

const ProfileScreen = () => {
    return <ScrollView>
        <ProfileSectionHeader text={'Обліковий запис'} />
        <ProfileSectionBlock text={'Логін'} icon={'login'} rightType={'empty'} borderBottom borderTop />

        <TouchableOpacity>
            <Text style={styles.greenText}>Підписатись</Text>
        </TouchableOpacity>

        <ProfileSectionHeader text={'Інше'} />
        <ProfileSectionBlock text={'Налаштування'} icon={'settings'} rightType={'arrow'} borderTop />
        <ProfileSectionBlock text={'Ціни'} icon={'prices'} rightType={'arrow'} />
        <ProfileSectionBlock text={'Обслуговування клієнтів'} icon={'client'} rightType={'arrow'} />
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