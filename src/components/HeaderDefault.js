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
import { StyleSheet } from 'react-native';

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
      <Header>
        <Left />
        <Body>
          <Title>
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
