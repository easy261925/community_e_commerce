import React from 'react';
import { Container } from 'native-base';
import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';
import FooterTab from './screens/FooterTab';
import Home from './screens/Home';
import Category from './screens/Category';
import Cart from './screens/Cart';
import Profile from './screens/Profile';

const Main = TabNavigator({
  Home: {
    screen: Home
  },
  Category: {
    screen: Category
  },
  Cart: {
    screen: Cart
  },
  Profile: {
    screen: Profile
  }
}, {
  tabBarComponent: FooterTab,
  backBehavior: 'none',
  tabBarPosition: 'bottom',
  swipeEnabled: false
})

const AppNavigator = StackNavigator({
  Main: {
    screen: Main
  }
})

export default class Routes extends React.Component {
  render() {
    return (
      <Container>
        <AppNavigator />
      </Container>
    )
  }
}
