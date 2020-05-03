import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View>
      <View style={{width: 50, height: 50, backgroundColor: 'red'}}/>
      <View style={{width: 100, height: 100, backgroundColor: 'yellow'}}/>
      <View style={{width: 100, height: 100, backgroundColor: 'blue'}}/>
    </View>
  );
}