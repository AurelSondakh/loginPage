/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const LandingPage = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Welcome to ABZ App
            </Text>
            <Text style={styles.tagline}>
                Your Future Is Here
            </Text>
            <View style={{ alignItems: 'center', marginTop: 70 }}>
                <Image source={require('../assets/Logo.png')} style={styles.imageLogo} />
            </View>
            <View style={{ marginTop: 60 }}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginPage')}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LandingPage

const styles = StyleSheet.create({
    container:{
        paddingTop: 20,
        backgroundColor: '#407BFF',
        flex: 1
    },
    title: {
        fontSize: 36,
        fontFamily: 'Roboto-Bold',
        color: '#FFF',
        marginLeft: 10
    },
    imageLogo: {
        width: 330,
        height: 330
    },
    tagline: {
        fontSize: 24,
        fontFamily: 'Roboto-Medium',
        color: '#FFF',
        marginLeft: 20
    },
    button: {
        paddingVertical: 9,
        marginHorizontal: 20,
        backgroundColor: '#DEEFFD',
        borderRadius: 50
    },
    buttonText: {
        fontSize: 22,
        fontFamily: 'Roboto-Bold',
        color: '#407BFF',
        textAlign: 'center'
    }
})