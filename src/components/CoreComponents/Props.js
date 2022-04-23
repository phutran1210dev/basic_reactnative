import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Cat = prop => {
  return (
    <View>
      <Text>I am {prop.name}</Text>
    </View>
  );
};

const Props = () => {
  return (
    <View style={styles.container}>
      <Text>Demo Props</Text>
      <Cat name="reksai" />
      <Cat name="Xinzhao" />
      <Cat name="Lee sin" />
    </View>
  );
};

export default Props;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
