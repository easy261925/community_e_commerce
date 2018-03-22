import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Image,
  View
} from 'react-native';
import { Card } from 'react-native-elements';
import {
  Content,
  Text,
  H2,
  Grid,
  Col
} from 'native-base';

const styles = StyleSheet.create({
  wrapper: {
    // marginLeft: 5,
    // marginRight: 5,
    borderRadius: 3,
    marginBottom: 20
  },
  mediaItem: {
  },
  image: {
    height: 120,
    marginBottom: 10,
    borderRadius: 4
  },
  title: {
    // paddingBottom: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: '#efeff4',
    // marginBottom: 10,
    overflow: 'hidden',
    fontWeight: '500'
  },
  content: {
    paddingTop: 5,
    color: '#666',
    fontSize: 14
  }
})

export default class extends React.Component {
  static propTypes = {
    good: PropTypes.object
  }

  render() {
    const {
      good
    } = this.props

    return (
      <View style={styles.wrapper}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{uri: good.image}}
        />
        <Text style={styles.title} numberOfLine={1}>{good.goodName}</Text>
        <Text style={styles.content}>￥ {good.originalPrice} 每件</Text>
      </View>
    )
  }
}
