import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  TouchableNativeFeedback
} from 'react-native';
import {
  Container,
  Footer,
  Content,
  Button,
  Text,
  View,
} from 'native-base';
import HeaderDefault from '../../components/HeaderDefault';
import { RED_COLOR } from '../../constants';

const styles = StyleSheet.create({
  footer: {
    height: 50,
    alignItems: 'center',
    backgroundColor: RED_COLOR
  },
  footerContent: {
    color: '#fff',
    fontSize: 18
  }
})

@connect(
  state => ({
    userId: state.auth.user.userId,
    token: state.auth.user.token,
    isAuthorized: state.auth.isAuthorized
  })
)
export default class extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: '地址管理',
    backBehavior: 'initialRoute'
  })

  handleCreateAddress = () => {
    this.props.navigation.navigate('PostAddress')
  }

  render() {
    return (
      <Container>
        <Content>

        </Content>
        <TouchableNativeFeedback onPress={this.handleCreateAddress}>
          <Footer style={styles.footer}>
            <Text style={styles.footerContent}>添加新收货地址</Text>
          </Footer>
        </TouchableNativeFeedback>
      </Container>
    )
  }
}
