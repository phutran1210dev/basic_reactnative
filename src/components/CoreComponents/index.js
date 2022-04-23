import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const CoreComponents = () => {
  const name = 'Maru';

  const getFullName = (firstName, secondName, thirdName) => {
    return firstName + ' ' + secondName + ' ' + thirdName;
  };

  return (
    <View style={styles.container}>
      <View style={styles.demoBox}>
        <Text>REACT NATIVE UI COMPONENT</Text>
        <Text>View</Text>
        <Text>Text</Text>
        <Text>Image</Text>
        <Text>ScrollView</Text>
        <Text>TextInput</Text>
      </View>

      <View style={styles.demoBox}>
        <Text>ViewGroup</Text>
        <Text>TextView</Text>
        <Text>ImageView</Text>
        <Text>ScrollView</Text>
        <Text>EditText</Text>
      </View>

      <View style={styles.demoBox}>
        <Text style={styles.ColorCat}>Hello, I am your cat!</Text>
        <Text style={styles.nameCat}>My name is {name}</Text>
        <Text style={styles.getFullName}>
          Hello, I am {getFullName('Rum', 'Tum', 'Tugger')}!
        </Text>
      </View>

      <View style={styles.demoBox}>
        <Text>Hello, I am...</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          defaultValue="Name me!"
        />
      </View>
    </View>
  );
};

export {CoreComponents};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  demoBox: {
    marginVertical: 5,
    padding: 10,
    borderColor: '#000',
    borderWidth: 2,
  },
  ColorCat: {
    fontSize: 14,
  },
  nameCat: {
    fontSize: 14,
  },
});
