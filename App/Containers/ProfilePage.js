/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import moment from 'moment'

//lodash
import isEmpty from 'lodash/isEmpty'

const LoginPage = (props) => {

    const { response } = props?.route?.params
    const date = moment().format('MMMM Do YYYY, h:mm:ss a')
    console.log(date)

    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center', marginTop: 70 }}>
                <Image source={require('../assets/PorfileLogo.jpg')} style={styles.imageLogo} />
            </View>
            <View style={styles.containerProfile}>
                <Text style={styles.title}>
                    Date: 
                    <Text style={styles.content}>
                        {date}
                    </Text>
                </Text>
            </View>
            <View style={styles.containerProfile}>
                <Text style={styles.title}>
                    Name: 
                    <Text style={styles.content}>
                        {response?.data[0]?.name}
                    </Text>
                </Text>
            </View>
            <View style={styles.containerProfile}>
                <Text style={styles.title}>
                    Email: 
                    <Text style={styles.content}>
                        {response?.data[0]?.email}
                    </Text>
                </Text>
            </View>
            <View style={styles.containerProfile}>
                <Text style={styles.title}>
                    Role: 
                    <Text style={styles.content}>
                        {response?.data[0]?.role}
                    </Text>
                </Text>
            </View>
        </View>
    )
}

export default LoginPage

const styles = StyleSheet.create({
    container:{
        paddingTop: 10,
        backgroundColor: '#FFF',
        flex: 1
    },
    imageLogo: {
        width: 350,
        height: 180
    },
    containerProfile: {
        marginTop: 20,
        alignSelf: 'center'
    },
    title: {
        fontFamily: 'Roboto-Medium'
    },
    content: {
        fontFamily: 'Roboto-Regular'
    }
})