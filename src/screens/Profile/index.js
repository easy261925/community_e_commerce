import React from 'react';
import { connect } from 'react-redux';
import {
  Content,
  Grid,
  Col,
  Button,
  Text,
  Icon,
  View,
  Toast,
  H3
} from 'native-base';
import {
  StyleSheet,
  StatusBar,
  TouchableNativeFeedback
} from 'react-native';
import { PRIMARY_COLOR, SERVICE_CONTENT, SUGGEST_CONTENT, GITHUB_CONTENT } from '../../constants';
import UserInfoHeader from './UserInfoHeader';
import {
  loadUser
} from '../../actions';

const styles = StyleSheet.create({
  absoluteTop: {
    position: 'absolute',
    top: 0,
    height: 50,
    width: '100%',
    backgroundColor: PRIMARY_COLOR
  },
  signinBtn: {
    padding: 20,
    marginTop: 60,
    marginBottom: 20
  },
  contentHeader: {
    backgroundColor: '#fff',
    padding: 10,
    display: 'flex',
    // borderRadius: 3,
    // borderWidth:1,
    // borderColor:'#efeff4',
    // shadowColor:'green',
    // shadowOffset:{h:10,w:10},
    // shadowRadius:3,
    // shadowOpacity:0.8,
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
  },
  firstListRow: {
    marginTop: 40,
    borderTopWidth: 1,
    borderColor: '#efeff4',
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 20,
    paddingRight: 5,
    paddingBottom: 20,
  },
  listRow: {
    borderTopWidth: 1,
    borderColor: '#efeff4',
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 20,
    paddingRight: 5,
    paddingBottom: 20
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
    isAuthorized: state.auth.isAuthorized,
    userId: state.auth.user.userId,
    token: state.auth.user.token,
    user: state.userInfo.user
  }),
  dispatch => ({
    loadUser: (userId, token) => dispatch(loadUser(userId, token))
  })
)
export default class Profile extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: <StatusBar animated barStyle="dark-content" />
  })

  handleGotoSignin = () => {
    this.props.navigation.navigate('Signin')
  }

  handleGoToAddress = () => {
    if (this._checkAuthorization()) {
      this.props.navigation.navigate('Address')
    } else {
      this._shadowToast('请先登录')
      this.handleGotoSignin()
    }
  }

  componentWillMount() {
    const {
      isAuthorized,
      userId,
      token,
      loadUser
    } = this.props

    if (isAuthorized) {
      loadUser(userId, token)
    }
  }

  _checkAuthorization = () => {
    if (this.props.isAuthorized) {
      return true
    } else {
      return false
    }
  }

  _shadowToast = (text, type = "warning") => {
    Toast.show({
      text,
      type,
      position: 'top'
    })
  }

  _concatWithService = () => {
    alert(SERVICE_CONTENT)
  }

  _handleSuggest = () => {
    alert(SUGGEST_CONTENT)
  }

  _handleGithubLink = () => {
    alert(GITHUB_CONTENT)
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
      isAuthorized,
      user
    } = this.props

    const signinBtn = this.renderSigninButton()

    return (
      <Content padder style={{backgroundColor: '#fff'}}>
        {
          !isAuthorized ? (
            signinBtn
          ) : <UserInfoHeader user={user}/>
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
        <TouchableNativeFeedback onPress={this.handleGoToAddress}>
          <Grid style={styles.firstListRow}>
            <Col>
              <Text>地址管理</Text>
            </Col>
            <Col>
              <Text style={{textAlign: 'right'}}>
                <Icon name="ios-pin-outline" />
              </Text>
            </Col>
          </Grid>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={this._concatWithService}>
          <Grid style={styles.listRow}>
            <Col>
              <Text>联系客服</Text>
            </Col>
            <Col>
              <Text style={{textAlign: 'right'}}>
                <Icon name="ios-chatbubbles-outline" />
              </Text>
            </Col>
          </Grid>
        </TouchableNativeFeedback>
        <Grid style={styles.listRow}>
          <Col>
            <Text>推荐好友</Text>
          </Col>
          <Col>
            <Text style={{textAlign: 'right'}}>
              <Icon name="ios-share-alt-outline" />
            </Text>
          </Col>
        </Grid>
        <TouchableNativeFeedback onPress={this._handleSuggest}>
          <Grid style={styles.listRow}>
            <Col>
              <Text>意见反馈</Text>
            </Col>
            <Col>
              <Text style={{textAlign: 'right'}}>
                <Icon name="ios-text-outline" />
              </Text>
            </Col>
          </Grid>
        </TouchableNativeFeedback>
        <Grid style={styles.listRow}>
          <Col>
            <Text>喜欢我们</Text>
          </Col>
          <Col>
            <Text style={{textAlign: 'right'}}>
              <Icon name="ios-star-outline" />
            </Text>
          </Col>
        </Grid>
        { isAuthorized ? (
          <Grid style={styles.listRow}>
            <Col>
              <Text>设置</Text>
            </Col>
            <Col>
              <Text style={{textAlign: 'right'}}>
                <Icon name="ios-settings-outline" />
              </Text>
            </Col>
          </Grid> ) : null
        }
        <TouchableNativeFeedback onPress={this._handleGithubLink}>
          <Grid style={styles.listRow}>
            <Col>
              <Text>Github</Text>
            </Col>
            <Col>
              <Text style={{textAlign: 'right'}}>
                <Icon name="logo-github" />
              </Text>
            </Col>
          </Grid>
        </TouchableNativeFeedback>
      </Content>
    )
  }
}
