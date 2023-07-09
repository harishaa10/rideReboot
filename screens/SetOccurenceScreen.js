import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import MiniDatePicker from '../components/MiniDatePicker'
import MiniSearch from '../components/MiniSearch'
import MiniTimePicker from '../components/MiniTimePicker'
import { Divider } from '@rneui/base'
import { SafeAreaView } from 'react-native-safe-area-context'

const SetOccurenceScreen = () => {
  return (
    <SafeAreaView style={{flex:1}}>

    <View style={{flexDirection:'row', alignItems:"center"}}>
    <MiniSearch placeholdertext="From Where?" isOrigin={true} width={275}/>
    <MiniTimePicker />
    </View>

    <View style={{flexDirection:'row', alignItems:"center"}}>
    <MiniSearch placeholdertext="To Where?" isOrigin={false} width={275}/>
    <MiniTimePicker />
    </View>

    <Divider />

    <View style={{flexDirection:'row', alignItems:"center", padding:10, justifyContent:"space-between"}}>
    <Text>Start Date</Text>
    <MiniDatePicker />
    </View>

    <View style={{flexDirection:'row', justifyContent:"space-between", alignItems:"center"}}>
    <Text style={{margin:10}}>Number of Occurences</Text>
    <TextInput style={{height:40, width:40, padding:10, marginTop:10,marginRight:15,  borderWidth:1, borderColor:"grey", borderRadius:5}}
                keyboardType='numeric'
                defaultValue='1'
                maxLength={2}
                />
    </View>

    <View style={{flexDirection:'row', alignItems:"center", padding:10, justifyContent:"space-between"}}>
    <Text>End Date</Text>
    <MiniDatePicker />
    </View>

    <Divider />


    </SafeAreaView> 
  )
}

export default SetOccurenceScreen

const styles = StyleSheet.create({})