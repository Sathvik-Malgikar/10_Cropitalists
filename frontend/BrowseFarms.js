import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from "./styles"
import Stockcard from "./Stockcard"

const BrowseFarms = () => {
    
  let deets = [ {"crop" : "wheat" , "rev" : 2416.2, "fut" : "UP" } , {"crop" : "arecanut" , "rev" : 3516.2, "fut" : "UP" }, {"crop" : "banana" , "rev" : 915.1, "fut" : "UP" }]
  //fetch some farmers deets from db
  return (
    <View style={styles.container}>
      <Text style={styles.titlecontain}>BrowseFarms</Text>
      <View style={styleslocal.suggestGrid}>
      {deets.map((ele,i)=>{
    return (
        <Stockcard obj = {ele}> </Stockcard>

    )
})}
      </View>
    </View>
  )
}

const styleslocal = StyleSheet.create({
  suggestGrid :{
   
  }
})

export default BrowseFarms

