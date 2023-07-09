import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';


const data = [
    {
        id: "home",
        title: "Home",
        image: "https://links.papareact.com/3pn",
        screen: "QuickActions",

    },
    {
        id:"ride",
        title:"Book a Ride",
        image: "https://links.papareact.com/3pn",
        screen: "Ride",
    },
    {
        id:"schedule",
        title:"Get RidePass",
        image: "https://links.papareact.com/28w",
        screen: "GetPass",

    }
];

const Navcard = ({navigation}) => {

    const hasRidePass = useSelector(state => state.nav.hasRidePass);

  return (
    <View style={styles.container}>
        <FlatList horizontal data={data} renderItem={({item}) => {
            if (item.id=="home" && hasRidePass==false) return null;
            return(
            <TouchableOpacity style={styles.item} 
                onPress={()=> (navigation.navigate(item.screen))}>

                <Image style={{height: 40, width: 50, resizeMode: "contain", alignSelf: "flex-start"}} source={{uri: item.image}} />
                <Text style={styles.text}>{item.title}</Text>
                
            </TouchableOpacity>)
            }}
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
        backgroundColor: 'white',
        padding: 10,
        height: 75,
        width: 110,
        borderRadius: 10,
        marginRight: 10,
        justifyContent: "flex-end"
    },
    text:{
        color: 'grey',
        fontWeight: 'semibold',
    }
})
