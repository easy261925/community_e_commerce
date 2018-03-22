import React from 'react';
import {
  View,
  Text,
  StatusBar
} from 'react-native';

export default class extends React.Component {
  static navigationOptions = ({navigation}) => ({
    header: <StatusBar animated barStyle="dark-content" />
  })

  render() {
    return (
      <View>
      </View>
    )
  }
}
