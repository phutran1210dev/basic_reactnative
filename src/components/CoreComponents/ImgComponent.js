import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const ImgComponent = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.Image}
        source={{
          url: 'https://images.unsplash.com/photo-1492370284958-c20b15c692d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9tZXN0aWMlMjBjYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        }}
      />
      <Text>Hello, I am your cat!›</Text>
    </View>
  );
};

export default ImgComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image: {
    width: '100%',
    height: 400,
  },
});
