import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';

const HandleInput = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ')
          .map(word => word && '🐈')
          .join(' ')}
      </Text>
    </View>
  );
};

export default HandleInput;

const styles = StyleSheet.create({});
