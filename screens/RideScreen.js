import { StyleSheet, TouchableOpacity, View, Text} from 'react-native'
import React from 'react'
import MiniSearch from '../components/MiniSearch'
import { TextInput } from 'react-native';

const RideScreen = ({navigation}) => {

  return (
    <View style={{flex:0, paddingTop: 10}}>
    <View style={{padding:5}}>
    <MiniSearch placeholdertext="From Where?" isOrigin={true}/>
    </View>

    <View style={{padding:5}}>
    <MiniSearch placeholdertext="To Where?" isOrigin={false} />        
    </View>
          
      <TextInput style={styles.textInput} placeholder="Where to?" />
      <TouchableOpacity style={styles.TouchableOpacity} onPress={() => navigation.navigate("ScheduledRides")}>
        <Text style={{color: 'white', textAlign: 'center', padding: 10}}>Book a Ride</Text>
      </TouchableOpacity>
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
    marginBottom:10,
    marginHorizontal:20,
    padding: 10,
  },
  TouchableOpacity:{
    backgroundColor: 'black',
    flex:0,
    borderRadius:5,
    padding: 10,
  }
})