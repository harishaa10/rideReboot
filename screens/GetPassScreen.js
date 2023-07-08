import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MiniDatePicker from '../components/MiniDatePicker'
import MiniSearch from '../components/MiniSearch'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SetSchedule from './SetSchedule'
import SetOccurenceScreen from './SetOccurenceScreen'

const GetPassScreen = () => {

  const Stack= createMaterialTopTabNavigator();

  return (
    <Stack.Navigator initialRouteName='Schedule-Based'>
      <Stack.Screen name= "Schedule-Based" component={SetSchedule} />
      <Stack.Screen name= "Occurence-Based" component={SetOccurenceScreen} />
    </Stack.Navigator>)}
  

export default GetPassScreen