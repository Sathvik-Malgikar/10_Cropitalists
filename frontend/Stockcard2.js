import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from "./styles"

const Stockcard2 = ({obj , cb , addamt}) => {

  const [quant, setQuant] =useState(0)
    
  return (<TouchableOpacity onPress={()=>{
cb(obj.name)
  }}>

{obj.fut=="DOWN"?(
        <View style={[styleslocal.cont , styleslocal.red]}>
      <Text style= {styleslocal.subele}> Stock : {obj.name}</Text>
      <Text style= {styleslocal.subele}> Stock : {obj.crop}</Text>
      <Text style= {styleslocal.subele}>Price per stock {obj.rev}</Text>
      <Text style= {styleslocal.subele}>{obj.fut}</Text>
      <TouchableOpacity onPress={()=>{
  setQuant(quant+1)
  addamt(parseFloat( obj.rev))
      }}>

    <Text  style={styles.button}>
    ADD TO CART
    </Text>
    </TouchableOpacity>
      <Text>{quant} stocks </Text> 
    </View> 
    ) : 
    (
        <View style={styleslocal.cont}>
      <Text style= {styleslocal.subele}> Stock : {obj.name}</Text>
      <Text style= {styleslocal.subele}> Stock : {obj.crop}</Text>
      <Text style= {styleslocal.subele}>Price per stock {obj.rev}</Text>
      <Text style= {styleslocal.subele}>{obj.fut}</Text>
      <TouchableOpacity onPress={()=>{
  setQuant(quant+1)
  addamt(parseFloat( obj.rev))
      }}>

    <Text  style={styles.button}>
    ADD TO CART
    </Text>
    </TouchableOpacity>
      <Text>{quant} stocks </Text> 
    </View> 
    ) }
  </TouchableOpacity>
    
    
    
  )
}

export default Stockcard2

const styleslocal = StyleSheet.create({
 cont : {
    justifyContent : "center",
    alignItems : "center",
    display : "flex",
    flexDirection : "column",
    backgroundColor : "#77ff5c",
    borderRadius: 10,
    padding : 4,
    margin  : 8,
    
},
red :{
    backgroundColor : "#ff7777",
 },
 subele : {
    padding : 4
 }
})