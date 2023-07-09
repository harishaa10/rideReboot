import {Provider} from 'react-redux';
import store from './store';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetPassScreen from './screens/GetPassScreen';
import ScheduledRidesScreen from './screens/ScheduledRidesScreen';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
    <NavigationContainer>
    <SafeAreaProvider>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="GetPass" component={GetPassScreen} />
        <Stack.Screen name="ScheduledRides" component={ScheduledRidesScreen} />
      </Stack.Navigator>   
    </SafeAreaProvider>
    </NavigationContainer>
    </Provider>
  );
}




