import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import {
  PRIMARY_COLOR
} from '../../constants'
import {
  Thumbnail,
  Button,
  Icon,
  Content,
  View,
  Text,
  Grid,
  Col
} from 'native-base';
import {
  loadUser
} from '../../actions';

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 30,
    marginBottom: 30,
    paddingLeft: 30,
    paddingRight: 30,
    display: 'flex'
  }
})

@connect(
  state => ({
    userId: state.auth.user.userId,
    token: state.auth.user.token,
    user: state.userInfo.user
  }),
  dispatch => ({
    loadUser: (userId, token) => dispatch(loadUser(userId, token))
  })
)
export default class UserInfoHeader extends React.Component {
  componentDidMount() {
    this.props.loadUser(this.props.userId, this.props.token)
  }

  render() {
    const {
      user
    } = this.props

    return (
      <View style={styles.wrapper}>
        <Grid>
          <Col style={{display: 'flex', flexDirection: 'column', height: 80}}>
            <Text style={{fontWeight: '500'}}>{user.nickName}</Text>
            <Text>{user.avatar}</Text>
            <Text style={{marginTop: 'auto', color: PRIMARY_COLOR}}>查看个人资料</Text>
            {/* <Text style={{marginTop: 'auto'}}>点击</Text> */}
          </Col>
          <Col style={{display: 'flex'}}>
              {
                user.avatar === "" ? (
                  <Text style={{textAlign: 'right'}}>
                    <Icon name="person" style={{fontSize: 70}}/>
                  </Text>
                ) : (
                  <Thumbnail large source={{uri: user.avatar}} style={{marginLeft: 'auto'}}/>
                )
              }
          </Col>
        </Grid>
      </View>
    )
  }
}
