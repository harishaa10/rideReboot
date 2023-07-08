import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MiniDatePicker from '../components/MiniDatePicker'
import MiniSearch from '../components/MiniSearch'
import { SafeAreaView } from 'react-native-safe-area-context'

const SetOccurenceScreen = () => {
  return (
    <SafeAreaView style={{flex:1}}>
    <MiniSearch placeholdertext="From Where?" isOrigin={true}/>
    <MiniSearch placeholdertext="To Where?" isOrigin={false} />
    <MiniDatePicker />
    </SafeAreaView> 
  )
}

export default SetOccurenceScreen

const styles = StyleSheet.create({})