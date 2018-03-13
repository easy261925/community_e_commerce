import React from 'react';
import { AppLoading, Font } from 'expo';
import Routes from './src/Routes';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isReady: false
    }
  }

  async componentWillMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });

    this.setState({
      isReady: true
    })
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />
    } else {
      return (
        <Routes />
      )
    }
  }
}
