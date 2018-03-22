import React from 'react';
import {
  StatusBar
} from 'react-native';
import {
  Header,
  Item,
  Input,
  Icon,
  View
} from 'native-base';
import { SearchBar } from 'react-native-elements';

export default class HeaderSearchbar extends React.Component {

  handleGoToSearch = () => {
    this.props.navigation.navigate('Search')
  }

  handleGoToHome = () => {
    this.props.navigation.navigate('Home')
  }

  render() {
    const {
      back
    } = this.props

    return (
      <Header searchBar rounded style={{paddingTop: 25, paddingBottom: 10, height: 70, backgroundColor: '#fff'}}>
        <StatusBar
          animated
          barStyle="dark-content"
        />
        <Item onPress={this.handleGoToSearch}>
          {
            back ? (
              <Icon name="ios-arrow-round-back" onPress={this.handleGoToHome} />
            ) : (
              <Icon name="ios-search" />
            )
          }
          <Input placeholder="搜索试试" disabled/>
        </Item>
      </Header>
    )
  }
}
