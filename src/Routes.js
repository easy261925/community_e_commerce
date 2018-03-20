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
import Signin from './screens/Signin';

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
  swipeEnabled: false,
  mode: 'card',
  headerMode: 'float',
  navigationOptions: {
    headerTitleAllowFontScaling: false,
    headerTintColor: '#fff',
    headerLeft: null,
    headerStyle: {
      // height: 20 + 44,         // iPhone x  44 + 44,
      // paddingTop: 20,     // iPhone x  44
      // borderBottomColor: 'red',
      borderBottomWidth: 0,
      backgroundColor: '#3f51b5'
    }
  }
})

const AppNavigator = StackNavigator({
  Main: {
    screen: Main,
  },
  Signin: {
    screen: Signin
  }
}, {
  initialRouteName: 'Main',
  navigationOptions: {
    headerTitleAllowFontScaling: false,
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#3f51b5',
      borderBottomWidth: 0
    }
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
