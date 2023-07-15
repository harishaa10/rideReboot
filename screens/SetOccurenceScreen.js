import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import MiniDatePicker from '../components/MiniDatePicker'
import MiniSearch from '../components/MiniSearch'
import { Divider } from '@rneui/base'
import { SafeAreaView } from 'react-native-safe-area-context'
import {useState} from 'react'
import MiniSwitch from '../components/MiniSwitch'
import { useDispatch, useSelector } from 'react-redux'
import { setSchedule, setHasSchedule } from '../slices/scheduleSlice'



const SetOccurenceScreen = ({navigation}) => {

  const travelTime= useSelector((state) => state.nav.travelTimeInformation);
  const origin= useSelector((state) => state.nav.origin);
  const destination= useSelector((state) => state.nav.destination);
  const [isEnabled, setIsEnabled] = useState("two-way");
  const [numrides, setNumrides] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const dispatch = useDispatch();

  function jsonBuilder(){
    var formData = {
      type:"occurence",
      from:origin.description,
      to: destination.description,
      isEnabled: isEnabled,
      startDate: startDate.toISOString().slice(0,10),
      endDate: endDate.toISOString().slice(0,10),
      numrides: numrides,
      //cost: travelTime.value*0.005*numrides
    };
    return formData;
}

  return (
    <SafeAreaView style={{flex:1}}>

    <View style={{flexDirection:'row', alignItems:"center",paddingRight:10, paddingBottom:10, justifyContent:"flex-end"}}>
    <MiniSwitch isEnabled={isEnabled} setIsEnabled={setIsEnabled}/>
    </View>

    <View style={{flexDirection:'row', alignItems:"center"}}>
    <MiniSearch placeholdertext="From Where?" isOrigin={true} width={350}/>
    </View>

    <View style={{flexDirection:'row', alignItems:"center"}}>
    <MiniSearch placeholdertext="To Where?" isOrigin={false} width={350}/>
    </View>

    <Divider />

    <View style={{flexDirection:'row', alignItems:"center", padding:10, justifyContent:"space-between"}}>
    <Text>Start Date</Text>
    <MiniDatePicker date={startDate} setDate={setStartDate} />
    </View>

    <View style={{flexDirection:'row', justifyContent:"space-between", alignItems:"center"}}>
    <Text style={{margin:10}}>Number of Occurences</Text>
    <TextInput style={{height:40, width:40, padding:10, marginTop:10,marginRight:15,  borderWidth:1, borderColor:"grey", borderRadius:5}}
                keyboardType='numeric'
                defaultValue='1'
                maxLength={2}
                onChangeText={(text) => setNumrides(text)}
                />
    </View>

    <View style={{flexDirection:'row', alignItems:"center", padding:10, justifyContent:"space-between"}}>
    <Text>End Date</Text>
    <MiniDatePicker date={endDate} setDate={setEndDate}/>
    </View>

    <Divider />

    <TouchableOpacity style={styles.TouchableOpacity} onPress={() => {
      console.log(jsonBuilder());
      dispatch(setSchedule(jsonBuilder()));
      dispatch(setHasSchedule(true));
      navigation.navigate("QuickActions");
      }}>
        <Text style={{color: 'white', textAlign: 'center', padding: 10}}>Schedule Rides {travelTime && "for "+
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

export default SetOccurenceScreen

const styles = StyleSheet.create({
  TouchableOpacity:{
    marginTop: 300,
    backgroundColor: 'black',
    flex:0,
    borderRadius:5,
    padding: 10
  }
})