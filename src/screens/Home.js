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
import HeaderSearchbar from '../components/HeaderSearchbar';

export default class Home extends React.Component {
  static navigationOptions = ({navigation}) => ({
    header: <HeaderSearchbar navigation={navigation}/>
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
