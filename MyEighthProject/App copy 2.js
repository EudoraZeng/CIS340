import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class myApp extends Component {

  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  onTap = () => {
    this.setState({
      count: this.state.count +1
    });
  }

  render() {
    const {count} =this.state;
  return (
    <View style={styles.container}>
      <View> style={styles.counterText}>
      <Text>Tap Counter: {count} </Text>      
      </View>
      <TouchableOpacity style={styles.button} onPress={this.onTap}>
        <Text>Touch Me</Text>
      </TouchableOpacity>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#FFFFE0",
    paddingHorizontal: 20
  },

  button: {
    alignItems: "center",
    backgroundColor: "#778899",
    padding: 10
  },

  counterText: {
    alignItems: "center",
    padding: 10
  }
});
