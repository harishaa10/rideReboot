import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'

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
    <CheckMark displayText="M" day="Monday"/>
    <CheckMark displayText="T" day="Tuesday"/>
    <CheckMark displayText="W" day= "Wednesday"/>
    <CheckMark displayText="T" day="Thursday"/>
    <CheckMark displayText="F" day="Friday"/>
    <CheckMark displayText="S" day="Saturday"/>
    <CheckMark displayText="S" day="Sunday"/>
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