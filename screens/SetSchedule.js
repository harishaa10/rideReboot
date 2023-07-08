import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import MiniDatePicker from '../components/MiniDatePicker'
import MiniSearch from '../components/MiniSearch'
import { SafeAreaView } from 'react-native-safe-area-context'
import MiniSwitch from '../components/MiniSwitch'
import MiniTimePicker from '../components/MiniTimePicker'
import MiniDayChooser from '../components/MiniDayChooser'
import MiniDropDown from '../components/MiniDropDown'


const SetSchedule = () => {
  return (
    <SafeAreaView style={{flex:1}}>
    <MiniSearch placeholdertext="From Where?" isOrigin={true}/>
    <MiniSearch placeholdertext="To Where?" isOrigin={false} />
    <MiniDatePicker />
    <MiniSwitch />
    <MiniTimePicker />
    <MiniDayChooser />
    <View style={{flexDirection:'row'}}>
    <TextInput style={{height:50, width:50, padding:10, borderWidth:1, margin:10, borderRadius:5}}
                keyboardType='numeric'
                defaultValue='1'
                maxLength={2}
                />
    <MiniDropDown />
    </View>
    </SafeAreaView> 
  )
}

export default SetSchedule

const styles = StyleSheet.create({})