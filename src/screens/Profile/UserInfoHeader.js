import React from 'react';
import PropTypes from 'prop-types';
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

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 60,
    marginBottom: 50,
    marginLeft: 20,
    marginRight: 20,
    display: 'flex'
  }
})

export default class UserInfoHeader extends React.Component {
  static propTypes = {
    user: PropTypes.object
  }

  render() {
    const user = this.props.user ? this.props.user : {}
    const nickName = user.nickName ? user.nickName : ""
    const imageUri = user.avatar ? user.avatar : ""

    return (
      <View style={styles.wrapper}>
        <Grid>
          <Col style={{display: 'flex', flexDirection: 'column', height: 80, flex: 1}}>
            <Text style={{fontWeight: '500', fontSize: 18}} numberOfLines={1}>{nickName}</Text>
            <Text style={{marginTop: 'auto', color: PRIMARY_COLOR}}>查看并编辑个人资料</Text>
          </Col>
          <Col style={{display: 'flex', width: 90}}>
              {
                imageUri === "" ? (
                  <Text style={{textAlign: 'right'}}>
                    <Icon name="person" style={{fontSize: 70}}/>
                  </Text>
                ) : (
                  <Thumbnail large source={{uri: imageUri}} style={{marginLeft: 'auto'}}/>
                )
              }
          </Col>
        </Grid>
      </View>
    )
  }
}
