/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import moment from 'moment'

class ProfilePageClass extends Component {

    constructor(props){
        super()
        this.state = {
            response: props?.route?.params,
            date: moment().format('MMMM Do YYYY, h:mm:ss a')
        }
    }
    
    render(){
        return(
            <View style={styles.container}>
                <View style={{ alignItems: 'center', marginTop: 70 }}>
                    <Image source={require('../assets/PorfileLogo.jpg')} style={styles.imageLogo} />
                </View>
                <View style={styles.containerProfile}>
                    <Text style={styles.title}>
                        Date: 
                        <Text style={styles.content}>
                            {this?.state?.date}
                        </Text>
                    </Text>
                </View>
                <View style={styles.containerProfile}>
                    <Text style={styles.title}>
                        Name: 
                        <Text style={styles.content}>
                            {this?.state?.response?.response?.data[0]?.name}
                        </Text>
                    </Text>
                </View>
                <View style={styles.containerProfile}>
                    <Text style={styles.title}>
                        Email: 
                        <Text style={styles.content}>
                            {this?.state?.response?.response?.data[0]?.email}
                        </Text>
                    </Text>
                </View>
                <View style={styles.containerProfile}>
                    <Text style={styles.title}>
                        Role: 
                        <Text style={styles.content}>
                            {this?.state?.response?.response?.data[0]?.role}
                        </Text>
                    </Text>
                </View>
            </View>
        )
    }
}

export default ProfilePageClass

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
