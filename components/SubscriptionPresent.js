import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SubscriptionPresent = () => {
  return (
    <View style={styles.container}>
      <Text>Subscription Already Active!</Text>
    </View>
  )
}

export default SubscriptionPresent

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        fontSize:20,
        fontWeight:'thin'
    }
})