import React from 'react';
import { connect } from 'react-redux';
import {
  Content,
  Button,
  Text,
  Icon,
  View,
  H3
} from 'native-base';
import { StyleSheet } from 'react-native';
import { PRIMARY_COLOR } from '../../constants';
import UserInfoHeader from './UserInfoHeader';

const styles = StyleSheet.create({
  absoluteTop: {
    position: 'absolute',
    top: 0,
    height: 50,
    width: '100%',
    backgroundColor: PRIMARY_COLOR
  },
  signinBtn: {
    padding: 20
  },
  contentHeader: {
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 10,
    display: 'flex',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
  },
  buttonItem: {
    flex: 1,
  },
  buttonItemText: {
    fontSize: 12,
    color: '#333333'
  }
})

// const HeaderRight = ({ isAuthorized }) => {
//   if (isAuthorized) {
//     return <Icon name="settings" style={{color: '#fff'}} />
//   } else {
//     return <View></View>
//   }
// }

@connect(
  state => ({
    isAuthorized: state.auth.isAuthorized
  })
)
export default class Profile extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
    // headerRight: <HeaderRight isAuthorized={this.props.isAuthorized} />
  })

  handleGotoSignin = () => {
    this.props.navigation.navigate('Signin')
  }

  renderSigninButton = () => {
    return (
      <Button
        transparent
        style={styles.signinBtn}
        onPress={this.handleGotoSignin}
      >
        <H3 style={{color: '#222222'}}>
          点击登录
        </H3>
      </Button>
    )
  }

  render() {
    const {
      isAuthorized
    } = this.props

    const signinBtn = this.renderSigninButton()

    return (
      <Content padder style={{backgroundColor: '#fff'}}>
        {
          !isAuthorized ? (
            signinBtn
          ) : <UserInfoHeader />
        }
        <View style={styles.contentHeader}>
          <View style={styles.buttonGroup}>
            <Button vertical transparent dark style={styles.buttonItem}>
              <Icon name="ios-briefcase" style={{color: '#646464'}} />
              <Text style={styles.buttonItemText}>待发货</Text>
            </Button>
            <Button vertical transparent dark style={styles.buttonItem}>
              <Icon name="md-archive" style={{color: '#646464'}} />
              <Text style={styles.buttonItemText}>待收货</Text>
            </Button>
            <Button vertical transparent dark style={styles.buttonItem}>
              <Icon name="ios-cash" style={{color: '#646464'}} />
              <Text style={styles.buttonItemText}>退款中</Text>
            </Button>
            <Button vertical transparent dark style={styles.buttonItem}>
              <Icon name="ios-paper" style={{color: '#646464'}} />
              <Text style={styles.buttonItemText}>全部订单</Text>
            </Button>
          </View>
        </View>
      </Content>
    )
  }
}
