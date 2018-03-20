import React from 'react';
import {
  Content,
  Text,
  Header,
  Body,
  Title,
  View
} from 'native-base';
import { StyleSheet } from 'react-native';
import HeaderDefault from '../components/HeaderDefault';
import { PRIMARY_COLOR } from '../constants';


export default class Home extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: '主页'
  })

  render() {
    return (
      <Content>
        <View>
        </View>
      </Content>
    )
  }
}
