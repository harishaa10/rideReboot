import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const EventRender = ({ date, dets }) => {
  const dateOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };

  return (
    <View style={styles.container}>

      <Text style={styles.textDate}>{new Date(date).toLocaleDateString('en-US', dateOptions)}</Text>

      <View style={styles.eventContainer}>
        <Text style={styles.textTime}>{dets.l1Time.slice(0,5)}</Text>

        <View style={styles.eventDetails}>
          <Text style={styles.textTitle}>{dets.from.split(",")[0] + " to " + dets.to.split(",")[0]}</Text>
          <View style={{flexDirection:"row"}}>

            <TouchableOpacity style={[styles.button, styles.buttonReschedule]}>
              <Text>Re-schedule</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button]}>
              <Text>Cancel</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    </View>
  );
};

export default EventRender;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#f2f3f4',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  eventContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    height: 100,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,

  },
  textDate: {
    color: 'grey',
    fontSize: 14,
    padding: 10,
    fontWeight: 'thin',
    alignSelf: 'flex-start',
  },
  textTime: {
    color: 'grey',
    fontSize: 20,
    padding: 10,
    height: 80,
    fontWeight: 'semibold',
    marginRight: 10,
    borderRightColor: '#222742',
    borderRightWidth: 3,
  },
  eventDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: 16,
    color: "grey",
    fontWeight: 'thin',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 5,
    paddingVertical: 10,
  },
  buttonReschedule: {
    borderColor: "green",
    borderWidth:1
  },
});
