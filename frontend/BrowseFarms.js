import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from "./styles"


const BrowseFarms = () => {
    
    //fetch some farmers deets from db
  return (
    <View style={styles.container}>
      <Text style={styles.titlecontain}>BrowseFarms</Text>
      <View style={styleslocal.suggestGrid}>
        
      </View>
    </View>
  )
}

const styleslocal = StyleSheet.create({
  suggestGrid :{
   
  }
})

export default BrowseFarms

