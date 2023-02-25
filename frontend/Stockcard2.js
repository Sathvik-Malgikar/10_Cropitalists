import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from "./styles"

const Stockcard2 = ({obj}) => {
    
  return (
    <View style={styleslocal.cont}>
      <Text> Stock : {obj.crop}</Text>
      <Text>Price per stock {obj.rev}</Text>
      <Text>{obj.fut}</Text>
    </View>
  )
}

export default Stockcard2

const styleslocal = StyleSheet.create({
 cont : {
    justifyContent : "center",
    alignItems : "center",
    display : "flex",
    flexDirection : "row",

 }
})