import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
// import {CoreComponents} from './src/components/CoreComponents';
// import ImgComponent from './src/components/CoreComponents/ImgComponent';
// import Props from './src/components/CoreComponents/Props';
// import DemoState from './src/components/CoreComponents/DemoState';
// import HandleInput from './src/components/CoreComponents/HandleInput';
// import ScroolView from './src/components/CoreComponents/ScrollViews';
// import FlatListBasics from './src/components/CoreComponents/FlatListBasics';
// import StyleText from './src/components/Learn_StyleComponent/StyleText';
// import FixedDimensionsBasics from './src/components/Learn_StyleComponent/FixedDimensionsBasics';
// import FlexLayout from './src/components/Learn_StyleComponent/FlexLayout';

const App = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.inner}>
          {/* <CoreComponents /> */}
          {/* <ImgComponent /> */}
          {/* <Props /> */}
          {/* <DemoState /> */}
          {/* <HandleInput /> */}
          {/* <ScroolView /> */}
          {/* <FlatListBasics /> */}
          {/* <StyleText /> */}

          {/* Flex box React native */}
          {/* <FixedDimensionsBasics /> */}
          {/* <FlexLayout /> */}
        </View>
      </SafeAreaView>
      <View style={styles.footer} />
    </KeyboardAvoidingView>
  );
};

export default App;

const styles = StyleSheet.create({
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
