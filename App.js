import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'antd-mobile';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button type="primary" size="large"> button </Button>
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
  colorRed: {
    color: 'red'
  }
});
