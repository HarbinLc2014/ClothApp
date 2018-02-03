import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Background from './Background';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Background />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
