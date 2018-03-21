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
import Signup from './screens/Signup';

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
      height: 20 + 44,         // iPhone x  44 + 44,
      paddingTop: 20,     // iPhone x  44
      // borderBottom: null,
      // borderBottomWidth: 0,
      // borderBottomColorr: '#3f51b5',
      backgroundColor: '#3f51b5',
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
  }
}, {
  initialRouteName: 'Signin',
  navigationOptions: {
    headerTitleAllowFontScaling: false,
    headerTintColor: '#fff',
    headerStyle: {
      height: 20 + 44,
      paddingTop: 20,
      backgroundColor: '#3f51b5',
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
