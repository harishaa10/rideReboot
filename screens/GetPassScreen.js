import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MiniDatePicker from '../components/MiniDatePicker'

const GetPassScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
    <TextInput style= {styles.textInput} placeholder="To Where?" />
    <TextInput style= {styles.textInput} placeholder="From Where?" />
    <MiniDatePicker />
    </SafeAreaView>
  )
}

export default GetPassScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textInput: {
        height: 40,
        margin: 12,
        borderRadius:5,
        padding: 10,
        color: "white",
        backgroundColor: "grey",
    },
})