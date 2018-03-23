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
import AddressItem from '../../components/AddressItem';
import { RED_COLOR } from '../../constants';
import {
  loadAllAddesses
} from '../../actions'

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
    isAuthorized: state.auth.isAuthorized,
    addresses: state.address.addresses
  }),
  dispatch => ({
    fetchAllAddress: (userId, token) => dispatch(loadAllAddesses(userId, token))
  })
)
export default class extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: <HeaderDefault title="地址管理" backToHome navigation={navigation} />
  })

  componentWillMount() {
    this.props.fetchAllAddress(this.props.userId, this.props.token)
  }

  handleCreateAddress = () => {
    this.props.navigation.navigate('PostAddress')
  }

  render() {
    const addresses = this.props.addresses ? this.props.addresses : []

    return (
      <Container>
        <Content>
          {
            addresses.length > 0 ? (
              addresses.map((item, id) => (
                <AddressItem
                  address={item}
                  key={id}
                />
              ))
            ) : null
          }
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
