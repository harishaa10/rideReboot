import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';

const actions = [
    {
        id: "HomeWork",
        title: "Home to Work",
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
        screen: "RideArriving"
    },
    {
        id: "WorkHome",
        title: "Work to Home",
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
        screen: "RideArriving"
    },
    {
        id: "ScheduledRides",
        title: "Scheduled Rides",
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
        screen: "Scheduled Rides"
    }
];

const QuickActions = ({navigation}) => {
    return (
        <View style={styles.container}>
        <FlatList horizontal data={actions} renderItem={({item}) => (
            <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate(item.screen)}>
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
