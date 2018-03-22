import React from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  Body,
  Title,
  Left,
  Right,
  Icon
} from 'native-base';
import {
  StyleSheet,
  StatusBar
} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 25,
    paddingBottom: 10,
    height: 70,
    backgroundColor: '#fff',
  }
})

export default class HeaderDefault extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
  }

  render() {
    const {
      title,
      icon
    } = this.props

    return (
      <Header
        style={styles.wrapper}
        rounded
      >
        <StatusBar
          animated
          barStyle="dark-content"
        />
        <Left />
        <Body>
          <Title style={{color: '#333'}}>
            {title}
          </Title>
        </Body>
        <Right>
          {icon ? (
            <Icon name={icon} />
          ): null}
        </Right>
      </Header>
    )
  }
}
