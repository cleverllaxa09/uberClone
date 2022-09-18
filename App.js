import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";


export default function App() {
  state ={
    count:0
  }
  return (
    <Provider store={}>    
      <View style={styles.container}>
        <Text>Let build {this.state.count}</Text>
      </View>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
