import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const StyleText = () => {
  const [textValue, setTextVualue] = useState('Press me pls...!');

  const onPressTitle = () => {
    setTextVualue('Yeah man');
  };
  return (
    <View style={styles.container}>
      {/* <Text style={styles.red}>just red</Text>
      <Text style={styles.bigBlue}>just bigBlue</Text>
      <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
      <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text> */}
      <Text style={styles.Touched} onPress={onPressTitle}>
        {textValue}
      </Text>
    </View>
  );
};

export default StyleText;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  Touched: {
    color: 'blue',
    textAlign: 'center',
  },
});
