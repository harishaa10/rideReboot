import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState}from 'react'

const MiniSwitch = () => {

    const [isEnabled, setIsEnabled] = useState("one-way");
    const toggleSwitch = mode => setIsEnabled(mode);


  return (
    <View>

        <View style={{flexDirection:"row", borderRadius:25, height:54, width:204, backgroundColor:"white", justifyContent:"center", alignItems:"center"}}>

            <TouchableOpacity 
                onPress={()=>toggleSwitch("one-way")}
                style={[styles.TouchableOpacity,
                    {backgroundColor: isEnabled=="one-way" ? "green" : "white"}]}
                >
                    <Text>One- Way</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>toggleSwitch("two-way")}
            style={[styles.TouchableOpacity,
                    {backgroundColor: isEnabled=="two-way" ? "green" : "white"}]}
            >
                <Text>Two- Way</Text>
            </TouchableOpacity>

        </View>

    </View>
  )
}

export default MiniSwitch

const styles = StyleSheet.create({
    TouchableOpacity:{
        height:50,
        width:100,
        borderRadius:25,
        justifyContent:"center",
        alignItems:"center",
        padding:10,
    }
})