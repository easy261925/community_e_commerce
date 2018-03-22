import React from 'react';
import {
  Content,
  View,
} from 'native-base';
import HeaderDefault from '../../components/HeaderDefault';

export default class extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: '地址管理'
  })

  render() {
    return (
      <Content>
      </Content>
    )
  }
}
