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
    console.log('哈哈哈哈')
    return (
      <Content>
      </Content>
    )
  }
}
