import React from 'react'
import { Text, StyleSheet } from 'react-native'

type ProfileSectionHeaderTypes = {
    text: string
}

const ProfileSectionHeader:React.FC<ProfileSectionHeaderTypes> = ({ text }) => {
    return <Text style={styles.text}>{text}</Text>
};

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 14,
        color: 'rgba(51, 51, 51, .5)',
        paddingTop: 15,
        paddingLeft: 15,
        paddingBottom: 10
    }
});

export default ProfileSectionHeader