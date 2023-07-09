import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Modal, TouchableOpacity } from 'react-native'
import { Icon} from '@rneui/base';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';

const miniTimePicker = () => {

    const [open, setOpen] = useState(false);
    const [time, setTime] = useState(new Date());

    const onChange = (selectedTime) => {
        const currentTime = selectedTime || time;
        setOpen(false);
        setTime(new Date(currentTime.nativeEvent.timestamp));
    };

    const showMode = () => {
        setOpen(true);
    };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Button} onPress={showMode}>
        <Icon name="clock" type='feather' color={"black"}/>
        <Text style={{marginLeft:5}}>{time.getHours()}:{time.getMinutes()}</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={open}
        >
            <DateTimePicker
                testID="dateTimePicker"
                value={time}
                mode={"time"}
                onChange={onChange}
                is24Hour={true}
                />
        </Modal>
    </View>
  )
}

export default miniTimePicker

const styles = StyleSheet.create({
    container:{
        flex: 0,
        margin: 10,
        paddingBottom:5
    },
    Button:{
        height: 45,
        width: 80,
        borderRadius: 5,
        flexDirection: "row",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    }
})