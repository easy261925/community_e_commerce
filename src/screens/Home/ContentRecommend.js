import React from 'react';
import {
  StyleSheet,
  Image,
  View
} from 'react-native';
import {
  Content,
  Text,
  H2,
  Grid,
  Col
} from 'native-base';
import MediaItem from '../../components/MediaItem';

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 50,
    marginBottom: 20
  },
  header: {
    marginBottom: 20,
    fontWeight: '600'
  },
  itemImage: {
    height: 60
  }
})

export default class extends React.Component {
  renderGoodList = () => {
    const goods = this.props.goods ? this.props.goods : []
    const dealGoods = []
    const goodList = []

    if (goods.length > 0) {
      for (let i = 0, len = goods.length; i < len; i+=2) {
        dealGoods.push(goods.slice(i, i + 2))
      }

      dealGoods.map((row, id) => {
        const rows = []

        row.map((item, index) => {
          let style
          if (index % 2 === 0) {
            style = {
              marginRight: 5
            }
          } else {
            style = {
              marginLeft: 5
            }
          }
          rows.push(
            <Col key={index} style={style}>
              <MediaItem good={item} />
            </Col>
          )
        })

        goodList.push(
          <Grid key={id}>
            {rows}
          </Grid>
        )
      })

      return goodList
    } else {
      return null
    }
  }

  render() {
    const goodList = this.renderGoodList()

    return (
      <Content style={styles.wrapper}>
        <Text style={styles.header}>
          <H2>为您推荐</H2>
        </Text>
          {goodList}
      </Content>
    )
  }
}
