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
import { PRIMARY_COLOR } from '../constants';

const styles = StyleSheet.create({
  absoluteTop: {
    position: 'absolute',
    top: 40,
    height: 30,
    width: '100%',
    backgroundColor: PRIMARY_COLOR
  },
  signinBtn: {
    paddingLeft: 20
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
    fontSize: 12
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
    title: '会员中心',
    // headerRight: <HeaderRight isAuthorized={this.props.isAuthorized} />
  })

  handleGotoSignin = () => {
    this.props.navigation.navigate('Signin')
  }

  renderSigninButton = () => {
    return (
      <Button transparent style={styles.signinBtn}>
        <H3>
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
      <Content padder>
        <View style={styles.contentHeader}>
          {
            !isAuthorized ? (
              signinBtn
            ) : null
          }
          <View style={styles.buttonGroup}>
            <Button vertical transparent style={{flex: 1}}>
              <Icon name="grid" />
              <Text style={styles.buttonItemText}>待发货</Text>
            </Button>
            <Button vertical transparent style={styles.buttonItem}>
              <Icon name="grid" />
              <Text style={styles.buttonItemText}>配送中</Text>
            </Button>
            <Button vertical transparent style={styles.buttonItem}>
              <Icon name="grid" />
              <Text style={styles.buttonItemText}>退款中</Text>
            </Button>
            <Button vertical transparent style={styles.buttonItem}>
              <Icon name="grid" />
              <Text style={styles.buttonItemText}>全部订单</Text>
            </Button>
          </View>
        </View>
      </Content>
    )
  }
}
