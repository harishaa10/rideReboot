import { StyleSheet, Text, Button, Input } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const AuthScreen = ({navigation}) => {

  return (
    <SafeAreaView>
         <Text>AuthScreen</Text>
            <Button title='Login'/>
    </SafeAreaView>
  )
}

export default AuthScreen

const styles = StyleSheet.create({})