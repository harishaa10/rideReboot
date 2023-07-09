import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState}from 'react'

const MiniSwitch = () => {

    const [isEnabled, setIsEnabled] = useState("two-way");
    const toggleSwitch = mode => setIsEnabled(mode);


  return (
    <View>

        <View style={{flexDirection:"row", borderRadius:25, height:24, width:164, backgroundColor:"white", justifyContent:"center", alignItems:"center"}}>

            <TouchableOpacity 
                onPress={()=>toggleSwitch("one-way")}
                style={[styles.TouchableOpacity,
                    {backgroundColor: isEnabled=="one-way" ? "black" : "white"}]}
                >
                    <Text style={{color: isEnabled=="one-way" ? "white" : "black", fontWeight:"thin"}}>One- Way</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>toggleSwitch("two-way")}
            style={[styles.TouchableOpacity,
                    {backgroundColor: isEnabled=="two-way" ? "black" : "white"}]}
            >
                <Text style={{color: isEnabled=="two-way" ? "white" : "black", fontWeight:"thin"}}>Two- Way</Text>
            </TouchableOpacity>

        </View>

    </View>
  )
}

export default MiniSwitch

const styles = StyleSheet.create({
    TouchableOpacity:{
        height:20,
        width:80,
        borderRadius:25,
        justifyContent:"center",
        alignItems:"center"
        }
})