import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MiniSearch from '../components/MiniSearch'
import { Button, Icon } from '@rneui/base';
import { TextInput } from 'react-native';

const RideScreen = ({navigation}) => {

  return (
    <View style={{flex:0}}>
          <MiniSearch placeholdertext="From Where?" isOrigin={true}/>
          <MiniSearch placeholdertext="To Where?" isOrigin={false} />        
      <TextInput style={styles.textInput} placeholder="Where to?" />
      <Button style={styles.container} onPress={() => navigation.navigate("GetPass")}>Book a Ride</Button>
      </View>
  )
}

export default RideScreen

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
    margin:10,
    padding: 10,
  }
})