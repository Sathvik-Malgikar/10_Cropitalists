import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./styles"

const Stockcard2 = ({obj , navigation}) => {
    
  return (<TouchableOpacity onPress={()=>{
 navigation.navigate("Portfolio" , {"name" : obj.name})
  }}>

{obj.fut=="DOWN"?(
        <View style={[styleslocal.cont , styleslocal.red]}>
      <Text style= {styleslocal.subele}> Stock : {obj.name}</Text>
      <Text style= {styleslocal.subele}> Stock : {obj.crop}</Text>
      <Text style= {styleslocal.subele}>Price per stock {obj.rev}</Text>
      <Text style= {styleslocal.subele}>{obj.fut}</Text>
    </View>
    ) : 
    (<View style={styleslocal.cont}>
      <Text style= {styleslocal.subele}> Stock : {obj.name}</Text>
      <Text style= {styleslocal.subele}> Stock : {obj.crop}</Text>
      <Text style= {styleslocal.subele}>Price per stock {obj.rev}</Text>
      <Text style= {styleslocal.subele}>{obj.fut}</Text>
    </View>)}
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