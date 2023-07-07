import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { Button } from '@rneui/base';

const MiniDatePicker = () => {

    const [open, setOpen] = useState(false);

    function handleOnPress() {
        setOpen(!open);
    }

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Button style={styles.Button} onPress={handleOnPress}>Choose Date</Button>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={open}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText} onPress={handleOnPress}>Hello World!</Text>
                </View>
            </View>
        </Modal>
    </View>
  )
}

export default MiniDatePicker

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
    },
    Button:{
        backgroundColor: "black",
        padding: 10,
        margin: 10,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "grey",
        opacity: 0.5,
        },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        },

})