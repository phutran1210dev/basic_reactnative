import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const data = {
  column: [
    {
      label: 'ltr',
      value: {
        alignItems: 'flex-start',
      },
    },
    {
      label: 'rtl',
      value: {
        alignItems: 'flex-end',
      },
    },
  ],
  row: [],
};

const FlexDirection = () => {
  const [direction, setDirection] = useState(data.column[0]);
  const PreviewLayout = ({
    label,
    children,
    values,
    selectedValue,
    setSelectedValue,
  }) => {
    return (
      <View style={{padding: 10, flex: 1}}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.row}>
          {values.map((value, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedValue(value)}
              style={[
                styles.button,
                selectedValue.label === value.label && styles.selected,
              ]}>
              <Text
                style={[
                  styles.buttonLabel,
                  selectedValue.label === value.label && styles.selectedLabel,
                ]}>
                {value.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={[styles.container, selectedValue.value]}>{children}</View>
      </View>
    );
  };
  console.log('column', data.column);
  return (
    <PreviewLayout
      label="direction"
      selectedValue={direction}
      values={data.column}
      setSelectedValue={setDirection}>
      <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
      <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
      <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
    </PreviewLayout>
  );
};

export default FlexDirection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
});
