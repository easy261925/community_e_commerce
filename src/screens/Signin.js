import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import {
  Content,
  Text,
  Form,
  Item,
  Label,
  Input,
  Button,
  Toast
} from 'native-base';
import {
  signin
} from '../actions';
import HeaderDefault from '../components/HeaderDefault';

const styles = StyleSheet.create({
  submitButton: {
    marginTop: 30
  },
  content: {
    padding: 10
  }
})

@connect(
  state => ({
    userId: state.auth.user.userId,
    token: state.auth.user.token,
    errorMessage: state.auth.errorMessage,
    isFetching: state.auth.isFetching
  }),
  dispatch => ({
    signin: (username, password) => dispatch(signin(username, password))
  })
)
export default class Signin extends React.Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    userId: PropTypes.number,
    token: PropTypes.string,
    errorMessage: PropTypes.string
  }

  static navigationOptions = ({ navigation }) => ({
    title: '登录',
    tabBarComponent: null
  })

  state = {
    username: 'greyu',
    password: '111111'
  }

  handleSubmit = (e) => {
    this.signin()
  }

  signin = async () => {
    await this.props.signin(this.state.username, this.state.password)

    if (this.props.errorMessage) {
      Toast.show({
        text: this.props.errorMessage,
        position: 'top',
        type: 'danger'
      })
    } else {
      const {
        navigation
      } = this.props

      navigation.navigate('Main')
      Toast.show({
        text: '登录成功',
        position: 'top',
        type: 'success'
      })
    }
  }

  render() {
    return (
      <Content
        style={styles.content}
      >
        <Form>
          <Item floatingLabel>
            <Label>用户名</Label>
            <Input
              value={this.state.username}
              onChangeText={(text) => this.setState({username: text})}
            />
          </Item>
          <Item floatingLabel last>
            <Label>密码</Label>
            <Input
              value={this.state.password}
              type="password"
              onChangeText={(text) => this.setState({password: text})}
            />
          </Item>
          <Button
            style={styles.submitButton}
            block
            onPress={this.handleSubmit}
          >
            <Text>登录</Text>
          </Button>
        </Form>
      </Content>
    )
  }
}
