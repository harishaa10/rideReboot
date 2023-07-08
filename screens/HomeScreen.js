import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import Map from '../components/Map'
import Navcard from '../components/Navcard'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RideScreen from './RideScreen';
import QuickActions from '../components/QuickActions';

const HomeScreen = ({navigation}) => {

  const Stack= createNativeStackNavigator();

  return (
    <SafeAreaView style={{flex: 1}}>
        <Map />
        <Navcard navigation={navigation}/>
        <Stack.Navigator>
          <Stack.Screen name="Ride" component={RideScreen} options={{headerShown: false}}/>
          <Stack.Screen name="QuickActions" component={QuickActions} options={{headerShown: false}}/>
        </Stack.Navigator>
      </SafeAreaView>
  )
}

export default HomeScreen
