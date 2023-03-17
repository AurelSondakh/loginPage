/* eslint-disable prettier/prettier */
import React from 'react'
import { SafeAreaView, Dimensions, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Components
import LandingPage from './App/Containers/LandingPage'
import LoginPage from './App/Containers/LoginPage'
import ProfilePage from './App/Containers/ProfilePage'

const width = Dimensions.get('screen').width

const App = () => {

  const horizontalAnimation = {
    cardStyleInterpolator: ({ current, next, layouts }) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [width, 0]
              })
            }
          ]
        }
      }
    }
  }

  const Stack = createStackNavigator()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={'#407BFF'} barStyle='light-content' />
        <NavigationContainer>
          <Stack.Navigator initialRouteName='LandingPage' headerMode='none'>
            <Stack.Screen name='LandingPage' component={LandingPage} options={horizontalAnimation} />
            <Stack.Screen name='LoginPage' component={LoginPage} options={horizontalAnimation} />
            <Stack.Screen name='ProfilePage' component={ProfilePage} options={horizontalAnimation} />
          </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>
  )
}

export default App