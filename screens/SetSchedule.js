import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'
import MiniDatePicker from '../components/MiniDatePicker'
import MiniSearch from '../components/MiniSearch'
import { SafeAreaView } from 'react-native-safe-area-context'
import MiniSwitch from '../components/MiniSwitch'
import MiniTimePicker from '../components/MiniTimePicker'
import MiniDayChooser from '../components/MiniDayChooser'
import MiniDropDown from '../components/MiniDropDown'
import { Divider } from '@rneui/base'
import { useSelector } from 'react-redux'
import {useState} from 'react'

const SetSchedule = ({navigation}) => {

  const travelTime= useSelector((state) => state.nav.travelTimeInformation);
  const [numrides, setNumrides] = useState(1);

  return (
    <SafeAreaView style={{flex:1}}>

    <View style={{flexDirection:'row', alignItems:"center",paddingRight:10, paddingBottom:10, justifyContent:"flex-end"}}>
    <MiniSwitch />
    </View>

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

    <Divider />

    <View>
    <Text style={{margin:10}}>Repeats Every</Text>
    <View style={{flexDirection:'row'}}>
    <TextInput style={{height:40, width:40, padding:10, borderWidth:1, borderColor:"grey", margin:10, borderRadius:5}}
                keyboardType='numeric'
                defaultValue='1'
                maxLength={2}
                onChangeText={(text) => setNumrides(text)}
                />
    <MiniDropDown />
    </View>
    </View>

    <Divider />

    <View>
    <Text style={{margin:10}}>Repeats On</Text>
    <MiniDayChooser />
    </View>

    <Divider />

    <View style={{flexDirection:'row', alignItems:"center", padding:10, justifyContent:"space-between"}}>
    <Text>End Date:</Text>
    <MiniDatePicker />
    </View>

    <Divider />

    <TouchableOpacity style={styles.TouchableOpacity} onPress={() => navigation.navigate("Home")}>
        <Text style={{color: 'white', textAlign: 'center', padding: 10}}>Schedule Rides {travelTime && "for " +
          new Intl.NumberFormat("en-gb",{
            style: "currency",
            currency: "GBP"}).format(
              travelTime.value*0.005*numrides
            )}
        </Text>
      </TouchableOpacity>

    </SafeAreaView> 
  )
}

export default SetSchedule

const styles = StyleSheet.create({
  TouchableOpacity:{
    marginTop: 100,
    backgroundColor: 'black',
    flex:0,
    borderRadius:5,
    padding: 10
  }
})