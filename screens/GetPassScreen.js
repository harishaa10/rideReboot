import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SetSchedule from './SetSchedule'
import SetOccurenceScreen from './SetOccurenceScreen'
import { useDispatch } from 'react-redux'
import { clearNav } from '../slices/navSlice'

const GetPassScreen = () => {

  const Stack= createMaterialTopTabNavigator();
  const dispatch = useDispatch();

  return (
    <Stack.Navigator initialRouteName='Schedule-Based' screenListeners={{
      state: (e) => {
        dispatch(clearNav());
      }
    }}>
      <Stack.Screen name= "Schedule-Based" component={SetSchedule} />
      <Stack.Screen name= "Occurence-Based" component={SetOccurenceScreen} />
    </Stack.Navigator>)}
  

export default GetPassScreen