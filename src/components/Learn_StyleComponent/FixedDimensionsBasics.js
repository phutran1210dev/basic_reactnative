import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FixedDimensionsBasics = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'powderblue',
        }}
      />
      <View
        style={{
          flex: 2,
          backgroundColor: 'skyblue',
        }}
      />
      <View
        style={{
          flex: 3,
          backgroundColor: 'steelblue',
        }}
      />
    </View>
  );
};

export default FixedDimensionsBasics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
