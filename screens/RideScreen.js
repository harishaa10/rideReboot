import { StyleSheet, TouchableOpacity, View, Text} from 'react-native'
import React from 'react'
import MiniSearch from '../components/MiniSearch'
import {useSelector} from 'react-redux'

const RideScreen = ({navigation}) => {

  const travelTime= useSelector((state) => state.nav.travelTimeInformation);

  return (
    <View style={{flex:0, paddingTop: 10}}>
    <View style={{padding:5}}>
    <MiniSearch placeholdertext="From Where?" isOrigin={true}/>
    </View>

    <View style={{padding:5}}>
    <MiniSearch placeholdertext="To Where?" isOrigin={false} />        
    </View>
          
      <Text style={styles.textInput}>{travelTime?"Travel Time: "+travelTime.text:"Choose"}</Text>
      <TouchableOpacity style={styles.TouchableOpacity} onPress={() => navigation.navigate("RideArriving")}>
        <Text style={{color: 'white', textAlign: 'center', padding: 10}}>Book a Ride {travelTime && "for "+
          new Intl.NumberFormat("en-gb",{
            style: "currency",
            currency: "GBP"}).format(
              travelTime.value*0.005
            )}
        </Text>
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
    backgroundColor: 'white',
    fontWeight: "semibold",
    height: 44,
    borderRadius:5,
    marginBottom:10,
    marginHorizontal:20,
    padding: 10,
    textAlign: 'center',
  },
  TouchableOpacity:{
    backgroundColor: 'black',
    flex:0,
    borderRadius:5,
    padding: 10,
  }
})