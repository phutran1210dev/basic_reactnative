import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {
            id: 1,
            name: 'bulbasaur',
            image:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
            type: 'grass',
          },
          {
            id: 2,
            name: 'ivysaur',
            image:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
            type: 'grass',
          },
          {
            id: 3,
            name: 'venusaur',
            image:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
            type: 'grass',
          },
        ]}
        renderItem={({item}) => (
          <View style={styles.container} key={item.id}>
            <View
              style={{
                flex: 1,
                marginVertical: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image style={styles.CardImg} source={{uri: item.image}} />
              <View>
                <Text style={styles.item}>{item.name}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default FlatListBasics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
  },
  CardImg: {
    width: 200,
    height: 200,
    transform: [{rotateY: '180deg'}],
  },
});
