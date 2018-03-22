import React from 'react';
import { View, Text } from 'react-native';
import HeaderDefault from '../components/HeaderDefault';

export default class extends React.Component {
  static navigationOptions = ({navigation}) => ({
    header: <HeaderDefault title="购物车" />
  })

  render() {
    return (
      <View style={{backgroundColor: '#3f51b5', borderTopWidth: 0, borderTopColor: '#3f51b5'}}>
        <Text>Cart</Text>
      </View>
    )
  }
}
