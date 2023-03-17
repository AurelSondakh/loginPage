/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler'

//lodash
import isEmpty from 'lodash/isEmpty'

const LoginPage = () => {
    const navigation = useNavigation()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [response, setResponse] = useState(null)
    // const [error, setError] = useState(false)

    const loginAPI = async () => {
        const jsonBody = JSON.stringify({
            'email' : `${username}`,
            'password' : `${password}`
        })
        console.log(jsonBody)
        await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {'Content-Type': 'application/json',
                'Accept': '*/*'
                    },
          body: jsonBody
        })
          .then(response => response.json())
          .then((responseJson) => {
            console.log('Response: ', responseJson)
            setResponse(responseJson)
            navigateProfile(responseJson)
          })
          .catch(error => console.log(error))
    }

    const navigateProfile = (response) => {
        console.log(response, 'NAVIGATE')
        if(response?.status) navigation.navigate('ProfilePageClass', { response })
    }

    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center', marginTop: 70 }}>
                <Image source={require('../assets/LoginLogo.png')} style={styles.imageLogo} />
            </View>
            <View style={ styles.usernameContainer }>
                <Text style={styles.titleTextInput}>
                    Username
                </Text>
                <TextInput
                    underlineColorAndroid='transparent'
                    value={username}
                    onChangeText={(e) => setUsername(e)}
                    style={[styles.textInput, { borderBottomColor: (isEmpty(username) ? '#000' : '#407BFF') }]}
                    autoCorrect={false}
                    placeholder='input your username'
                />
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={styles.titleTextInput}>
                    Password
                </Text>
                <TextInput
                    underlineColorAndroid='transparent'
                    value={password}
                    onChangeText={(e) => setPassword(e)}
                    style={[styles.textInput, { borderBottomColor: (isEmpty(password) ? '#000' : '#407BFF') }]}
                    autoCorrect={false}
                    placeholder='input your password'
                />
            </View>
            {(!response?.status)
                ? <Text style={styles.errorText}>{response?.error?.message}</Text>
                : null
            }
            <View style={{ marginTop: 30 }}>
                <TouchableOpacity style={styles.button} onPress={() => loginAPI()}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginPage

const styles = StyleSheet.create({
    container:{
        paddingTop: 20,
        backgroundColor: '#FFF',
        flex: 1
    },
    imageLogo: {
        width: 250,
        height: 250
    },
    errorText: {
        fontFamily: 'Roboto-Regular',
        color: '#ff3333',
        marginTop: 20,
        marginLeft: 50
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
    },
    usernameContainer: {
        marginTop: 30
    },
    titleTextInput: {
        fontFamily: 'Roboto-Medium',
        marginLeft: 46
    },
    textInput: {
        fontFamily: 'Roboto-Regular',
        marginHorizontal: 15,
        fontSize: 14,
        color: '#407BFF',
        width: 300,
        height: 40,
        paddingVertical: 0,
        alignSelf: 'center',
        textAlignVertical: 'center',
        textDecorationLine: 'none',
        borderBottomWidth: 1
    }
})