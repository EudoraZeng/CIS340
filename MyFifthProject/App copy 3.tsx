import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'red'}}/>
      <View style={{flex: 1, backgroundColor: 'yellow'}}/>
      <View style={{flex: 1, backgroundColor: 'blue'}}/>
    </View>
  );
}