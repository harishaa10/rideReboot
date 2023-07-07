import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import {GOOGLE_MAPS_API_KEY} from '@env';
import Map from '../components/Map'
import Navcard from '../components/Navcard'
import { Button, Icon } from '@rneui/base';

const HomeScreen = ({navigation}) => {

    const dispatch = useDispatch();

  return (
    <SafeAreaView style={{flex: 1}}>
    <Map />

      <View>
          <Navcard />
        <GooglePlacesAutocomplete
        enablePoweredByContainer={false}
        styles={styles}
        placeholder='From'
        minLength	={3}
        debounce={400}
        renderLeftButton={() => ( <Icon
                name='disc'
                type='feather'
                color='#517fa4'
                style={{margin: 10}}
              />
        )}
        fetchDetails={true}
        onPress={(data, details = null) => {
          dispatch(setOrigin({
            location: details.geometry.location,
            description: data.description
            }));
            console.log(details.geometry.location);
        }}
        query={{
          key:  GOOGLE_MAPS_API_KEY,
          language: 'en',
        }}
      />
      <GooglePlacesAutocomplete
        enablePoweredByContainer={false}
        styles={styles}
        placeholder='To'
        debounce={400}
        minLength	={3}
        fetchDetails={true}
        renderLeftButton={() => ( <Icon
                name='disc'
                type='feather'
                color='#f50'
                style={{margin: 10}}
              />
        )}
        onPress={(data, details = null) => {
          dispatch(setDestination({
            location: details.geometry.location,
            description: data.description
            }));
            console.log(details.geometry.location);
        }}
        query={{
          key:  GOOGLE_MAPS_API_KEY,
          language: 'en',
        }}
      />
      <TextInput style={styles.textInput} placeholder="Where to?" />
      <Button style={styles.container} onPress={() => navigation.navigate("GetPass")}>Book a Ride</Button>
      </View>
      </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex: 0,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding:10,
    },
    textInput: {
      backgroundColor: 'grey',
      height: 44,
      borderRadius:5,
      marginBottom:10,
      marginRight: 10,
      marginLeft: 10,
    }
})