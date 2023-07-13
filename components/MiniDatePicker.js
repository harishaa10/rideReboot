import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Icon } from '@rneui/base';
import DateTimePicker from '@react-native-community/datetimepicker';

const MiniDatePicker = ({date, setDate}) => {

    const [open, setOpen] = useState(false);
    
    const dateOptions = {
      weekday: 'short',
      month: 'long',
      day: 'numeric',
    };

    const onChange = (selectedDate) => {
        const currentDate = selectedDate || date;
        setOpen(false);
        setDate(new Date(currentDate.nativeEvent.timestamp));
    };

    const showMode = () => {
        setOpen(true);
    };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Button} onPress={showMode}>
      <Icon name="calendar" type='feather' color={"black"}/>
        <Text style={{marginLeft:10}}>{date.toLocaleDateString('en-US', dateOptions)}</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={open}
        >
            <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={"date"}
                onChange={onChange}
                minimumDate={new Date()}
                maximumDate={new Date(new Date().getTime() + (90*24*60*60*1000))}
                />
        </Modal>
    </View>
  )
}

export default MiniDatePicker

const styles = StyleSheet.create({
    container:{
        flex: 0,
        marginHorizontal: 5,
        marginVertical: 0,
    },
    Button:{
      flex:0,
      paddingHorizontal:10,
      paddingVertical:5,
      height: 45,
      width:200,
      borderRadius: 5,
      flexDirection: "row",
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center",
    }
})