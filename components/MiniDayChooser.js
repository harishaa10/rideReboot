import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const MiniDayChooser = ({selectedDays,setSelectedDays}) => {

    const handlePress = (day) => {
        setSelectedDays({...selectedDays,[day]: !selectedDays[day]});
        }    

    const CheckMark = ({displayText, day}) => {
        return (
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity style={[styles.CheckMark, {backgroundColor:selectedDays[day]==true?"grey":"white"}]} onPress={()=>handlePress(day)}>
                    <Text>{displayText}</Text>
                </TouchableOpacity>
            </View>
        )
    }

  return (
    <View style={[styles.container, {flexDirection:"row"}]}>
    <CheckMark displayText="M" day={1}/>
    <CheckMark displayText="T" day={2}/>
    <CheckMark displayText="W" day={3}/>
    <CheckMark displayText="T" day={4}/>
    <CheckMark displayText="F" day={5}/>
    <CheckMark displayText="S" day={6}/>
    <CheckMark displayText="S" day={0}/>
    </View>
  )
}

export default MiniDayChooser

const styles = StyleSheet.create({
    container:{
        flex: 0,
        padding: 10,
        },
    CheckMark:{
        margin: 5,
        height: 30,
        width: 30,
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center",
        borderColor: "grey",
        borderWidth: 1,
    }
})