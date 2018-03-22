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
import Search from './screens/Search';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import GoodSearch from './screens/GoodSearch/';
import GoodDetail from './screens/GoodDetail/';

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
    headerTintColor: '#333',
    headerLeft: null,
    headerStyle: {
      height: 20 + 44,
      paddingTop: 20,
      backgroundColor: '#fff',
    }
  }
})

const AppNavigator = StackNavigator({
  Main: {
    screen: Main,
  },
  Signin: {
    screen: Signin
  },
  Signup: {
    screen: Signup
  },
  Search: {
    screen: Search
  },
  GoodSearch: {
    screen: GoodSearch
  },
  GoodDetail: {
    screen: GoodDetail
  }
}, {
  initialRouteName: 'Main',
  navigationOptions: {
    headerTitleAllowFontScaling: false,
    headerTintColor: '#333',
    headerStyle: {
      height: 20 + 44,
      paddingTop: 20,
      backgroundColor: '#fff',
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
