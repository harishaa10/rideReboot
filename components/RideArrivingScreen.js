import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const RideArrivingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Ride is Arriving</Text>
    </View>
  );
};

export default RideArrivingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'semibold',
    color: 'grey',
    textAlign: 'center',
  },
});
