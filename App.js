import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Route from './Route';

export default class App extends Component {
  render(){
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
    <Route />
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
