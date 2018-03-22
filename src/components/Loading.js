import React from 'react';
import { View, Spinner } from 'native-base';

export default (props) => {
  const color = props.color ? props.color : ""

  return (
    <View style={{display: 'flex', height: 400, alignItems: 'center'}}>
      <Spinner color={color}/>
    </View>
  )
}
