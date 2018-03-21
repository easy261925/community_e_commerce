import React from 'react';
import TouchableHighlight from 'react-native';
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
      <View>
        <Header searchBar rounded style={{paddingTop: 25, paddingBottom: 10, height: 70}}>
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
      </View>
      // <Header>
        // <SearchBar
        //   showLoading
        //   platform="android"
        //   placeholder='Search'
        // />
      // </Header>
    )
  }
}
