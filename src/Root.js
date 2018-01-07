import React, { Component } from 'react';
import { AppLoading, Font } from 'expo'
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';

export default class Root extends Component {
  constructor(props) {
    super(props);
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
      return <AppLoading />;
    } else {
      return (
        <Container>
          <Header />
          <Content />
          <Footer>
            <FooterTab>
              <Button badge vertical>
                <Badge><Text>2</Text></Badge>
                <Icon name="apps" />
                <Text>Apps</Text>
              </Button>
              <Button vertical>
                <Icon name="camera" />
                <Text>Camera</Text>
              </Button>
              <Button active badge vertical>
                <Badge ><Text>51</Text></Badge>
                <Icon active name="navigate" />
                <Text>Navigate</Text>
              </Button>
              <Button vertical>
                <Icon name="person" />
                <Text>用户中心</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      );
    }
  }
}
