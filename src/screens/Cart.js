import React from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  TouchableNativeFeedback,
  StyleSheet
} from 'react-native';
import {
  Toast,
  CheckBox,
  Text,
  Button,
  Container,
  Footer,
  Icon,
  View
} from 'native-base';
import HeaderDefault from '../components/HeaderDefault';
import {
  getCart
} from '../actions';
import { RED_COLOR } from '../constants';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff'
  },
  footer: {
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20
  },
  footerFirstItem: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  footerSecondItem: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  submitBtn: {
    marginTop: 5,
    backgroundColor: RED_COLOR,
    marginLeft: 'auto'
  }
})

@connect(
  state => ({
    cart: state.cart.cart,
    userId: state.auth.user.userId,
    token: state.auth.user.token,
    isAuthorized: state.auth.isAuthorized,
    isFetchingCart: state.cart.isFetchingCart
  }),
  dispatch => ({
    getCart: (userId) => dispatch(getCart(userId))
  })
)
export default class extends React.Component {
  static navigationOptions = ({navigation}) => ({
    header: <HeaderDefault title="购物车" />
  })

  componentWillMount() {
    // if (!this.props.isAuthorized) {
    //   this._showToast('请先登录', 'danger')
    //   this.props.navigation.navigate('Signin')
    // } else {
    //   this.props.getCart(this.props.userId)
    // }
  }

  _showToast = (text, type = "warning") => {
    Toast.show({
      text,
      type,
      position: 'top'
    })
  }

  _handleSignin = () => {
    this.props.navigation.navigate('Signin')
  }

  render() {
    const {
      isAuthorized,
      cart
    } = this.props
    return (
      <Container style={styles.wrapper}>
        <ScrollView>
          {
            !isAuthorized ? (
              <View style={{display: 'flex'}}>
                <Button
                  block
                  style={{backgroundColor: RED_COLOR}}
                  onPress={this._handleSignin}
                >
                  <Text>请先登录</Text>
                </Button>
              </View>
            ) : (
              null
            )
          }
        </ScrollView>
        <Footer style={styles.footer}>
          <View style={{display: 'flex', flexDirection: 'row', flex: 1}}>
            <View style={styles.footerFirstItem}>
              <Text>商品合计： ￥ 789</Text>
            </View>
            <View style={styles.footerSecondItem}>
              <Button
                style={styles.submitBtn}
              >
                <Text>去结算</Text>
              </Button>
            </View>
          </View>
        </Footer>
      </Container>
    )
  }
}
