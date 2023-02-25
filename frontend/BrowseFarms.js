import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from "./styles"
import { useNavigation } from '@react-navigation/native';

import Stockcard2 from "./Stockcard2"
import { SimpleGrid } from 'react-native-super-grid';



const BrowseFarms = () => {
  const navigation = useNavigation(); 
 function navfunc(n){
  console.log(("nav func called!"));
  navigation.navigate("Portfolio" , {"name" : n})
 }
    
  let deets = [ {"name" : "Ramesh" , "crop" : "wheat" , "rev" : 2416.2, "fut" : "UP" } , {"name" : "Ramchandra" , "crop" : "arecanut" , "rev" : 3516.2, "fut" : "DOWN" }, {"name" : "Govinda" , "crop" : "banana" , "rev" : 915.1, "fut" : "UP" }]
  //fetch some farmers deets from db
  return (
  
    <View style={styles.container}>
      <Text style={styles.titlecontain}>BrowseFarms</Text>
      <SimpleGrid 
       itemDimension={130}
  data={deets}
  renderItem={((ele)=>{
    console.log(ele)
    return (
        <Stockcard2 obj = {ele.item} cb = {navfunc} >  </Stockcard2>

    )
})}
  />
    </View>
  )
}

const styleslocal = StyleSheet.create({
  suggestGrid :{
   
  }
})

export default BrowseFarms

