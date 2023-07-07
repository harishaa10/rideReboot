import {Provider} from 'react-redux';
import store from './store';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import RideScreen from './screens/RideScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetPassScreen from './screens/GetPassScreen';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
    <NavigationContainer>
    <SafeAreaProvider>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Ride" component={RideScreen} />
        <Stack.Screen name="GetPass" component={GetPassScreen} />
      </Stack.Navigator>    
    </SafeAreaProvider>
    </NavigationContainer>
    </Provider>
  );
}




