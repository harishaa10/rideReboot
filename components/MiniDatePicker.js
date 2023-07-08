import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Button } from '@rneui/base';
import DateTimePicker from '@react-native-community/datetimepicker';

const MiniDatePicker = () => {

    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(new Date());

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
      <TouchableOpacity style={styles.Button} >
        <Button onPress={showMode}>Choose Date</Button>
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
        padding: 10,
    },
    Button:{
        padding: 10,
        margin: 10,
    }
})