import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native'
import React from 'react'

const data = [
    {
        id:"ride",
        title:"Book a Ride",
        image: "https://links.papareact.com/3pn",
        screen: "RideScreen",
    },
    {
        id:"schedule",
        title:"Get RidePass",
        image: "https://links.papareact.com/28w",
        screen: "ScheduleScreen",

    },
    {
        id: "home",
        title: "Home",
        image: "https://links.papareact.com/3pn",
        screen: "HomeScreen",

    }
];


const Navcard = () => {
  return (
    <View style={styles.container}>
    <FlatList horizontal data={data} renderItem={({item}) => (
        <TouchableOpacity style={styles.item}>
            <Image style={{height: 40, width: 50, resizeMode: "contain", alignSelf: "flex-start"}} source={{uri: item.image}} />
            <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
    )}
        />
    </View>
  )
}

export default Navcard

const styles = StyleSheet.create({
    container: {
        flex: 0,
        margin: 10,
    },
    item:{
        backgroundColor: 'grey',
        padding: 10,
        height: 75,
        width: 110,
        borderRadius: 10,
        marginRight: 10,
        justifyContent: "flex-end"
    },
    text:{
        color: 'white',
        fontWeight: 'semibold',
    }
})
