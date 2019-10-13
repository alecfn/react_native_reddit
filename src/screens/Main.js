import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class MyDataList extends Component {
  render() {
    return (
      <View style={styles.sectionContainer}>
        <FlatList
        data={[
          {key: 'Fill'},
          {key: 'This'},
          {key: 'With'},
          {key: 'Real'},
          {key: 'Data!'},
          ]}
        />
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      </View>
      );
  }
}
