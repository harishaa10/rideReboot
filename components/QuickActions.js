import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';

const actions = [
    {
        id: "HomeWork",
        title: "Home to Work",
        image: "https://links.papareact.com/3pn",
        screen: "RideArrivingScreen"
    },
    {
        id: "WorkHome",
        title: "Work to Home",
        image: "https://links.papareact.com/28w",
        screen: "RideArrivingScreen"
    },
    {
        id: "ScheduledRides",
        title: "Scheduled Rides",
        image: "https://links.papareact.com/3pn",
        screen: "ScheduleScreen"
    }
];

const QuickActions = () => {
    return (
        <View style={styles.container}>
        <FlatList horizontal data={actions} renderItem={({item}) => (
            <TouchableOpacity style={styles.item}>
                <Image style={{height:40, width:40, resizeMode:"contain"}} source={{uri:item.image}} />
                <Text style={styles.text}>{item.title}</Text>
            </TouchableOpacity>
        )}
            />
        </View>
      )
}

export default QuickActions

const styles = StyleSheet.create({
    container:{
        flex: 0,
    },
    item:{
        backgroundColor: 'black',
        padding: 10,
        height: 120,
        width: 120,
        borderRadius: 10,
        marginLeft: 10,
        marginTop:10,
        justifyContent: "flex-end"
    },
    text:{
        color: 'white',
        fontWeight: 'semibold',
    }
})
