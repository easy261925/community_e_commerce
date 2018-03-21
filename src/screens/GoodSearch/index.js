import React from 'react';
import { connect } from 'react-redux';
import {
  Image,
  StyleSheet
} from 'react-native';
import {
  Content,
  Button,
  View,
  Text,
  Grid,
  Col
} from 'native-base';
import {
  Card,
  ListItem
} from 'react-native-elements';
import HeaderSearchbar from '../../components/HeaderSearchbar';
import {
  loadGoods
} from '../../actions';

const styles = {
  desc: {
    display: 'flex',
    alignItems: 'center',
    height: 40
    // paddingTop: 10,
    // paddingBottom: 10
  },
  descFirst: {
    fontSize: 18
  },
  descSecond: {
    fontSize: 16,
    // textDecorationLine: 'line-through',
  },
  originalPrice: {
    fontSize: 18,
    textDecorationLine: 'line-through'
  },
  buyBtn: {
    marginTop: 10
  }
}

@connect(
  state => ({
    inService: state.service.inService,
    goods: state.goods.goods
  }),
  dispatch => ({
    loadGoods: (goodName) => dispatch(loadGoods(1, 10, {goodName}))
  })
)
export default class extends React.Component {
  static navigationOptions = ({navigation}) => ({
    header: (
      <HeaderSearchbar back navigation={navigation}/>
    )
  })

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.loadGoods(this.props.navigation.state.params.searchText)
  }

  renderGoodList() {
    const {
      goods
    } = this.props

    if (goods.length !== 0) {
      goods.map((item, id) => {
        return (
          <View key={id} >
            <Image
              resizeMode="cover"
              source={{uri: item.image}}
            />
            <Text>{item.goodName}</Text>
          </View>
        )
      })
    } else {
      return null
    }
  }

  render() {
    // const goodList = this.renderGoodList()
    const {
      goods
    } = this.props

    return (
      <Content padder>
          {
            goods.length > 0 ? (
              goods.map((item, id) => {
                return (
                  <Card title={item.goodName} key={id} >
                    <View>
                      <Image
                        style={{height: 260}}
                        resizeMode="cover"
                        source={{uri: item.image}}
                      />
                      <Grid style={styles.desc}>
                        <Col>
                          <Text style={styles.originalPrice}>原价：{item.originalPrice} ￥</Text>
                        </Col>
                        <Col>
                          <Text style={styles.descSecond}>
                            库存: {item.inventory} 件
                          </Text>
                        </Col>
                      </Grid>
                      <Grid style={styles.desc}>
                        <Col>
                          <Text style={styles.descFirst}>规格：{item.spec} </Text>
                        </Col>
                        <Col>
                          <Text style={styles.descSecond}>
                            产地: {item.origin}
                          </Text>
                        </Col>
                      </Grid>
                      <Button
                        style={styles.buyBtn}
                        block
                        // icon={{name: 'code'}}
                        // backgroundColor='#03A9F4'
                        // fontFamily='Lato'
                        // buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      >
                        <Text>{item.price} ￥</Text>
                      </Button>
                    </View>
                  </Card>
                )
              })
            ) : null
          }
      </Content>
    )
  }
}
