import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
// import {CoreComponents} from './src/components/CoreComponents';
// import ImgComponent from './src/components/CoreComponents/ImgComponent';
// import Props from './src/components/CoreComponents/Props';
// import DemoState from './src/components/CoreComponents/DemoState';
import HandleInput from './src/components/CoreComponents/HandleInput';
import ScroolView from './src/components/CoreComponents/ScrollViews';

const App = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={style.container}>
      <SafeAreaView style={style.container}>
        <View style={style.inner}>
          {/* <CoreComponents /> */}
          {/* <ImgComponent /> */}
          {/* <Props /> */}
          {/* <DemoState /> */}
          {/* <HandleInput /> */}
          <ScroolView />
        </View>
      </SafeAreaView>
      <View style={style.footer}></View>
    </KeyboardAvoidingView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    paddingHorizontal: 5,
  },
  footer: {
    paddingVertical: 10,
    marginHorizontal: 5,
    overflow: 'hidden',
  },
});
