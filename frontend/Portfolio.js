import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from "./styles"


const Portfolio = ({cname , navigation}) => {
  let deets = [ {"name" : "Ramesh" , "crop" : "wheat" , "rev" : 2416.2, "fut" : "UP" } , {"name" : "Ramchandra" , "crop" : "arecanut" , "rev" : 3516.2, "fut" : "DOWN" }, {"name" : "Govinda" , "crop" : "banana" , "rev" : 915.1, "fut" : "UP" }]
    //fetch from db
    let chosen = deets.filter(ele=>ele.name == cname)
    chosen = chosen[0]

  return (
    <View style={styles.container}>
      <Text style={styles.titlecontain}>Portfolio - {navigation.getParam("name") || cname}</Text>
      <View style={styles.formbox}>
        <View style={styles.profilePhoto} >
          <Image source={require("./farmer.jpg")}></Image>
        </View>
      </View>
    </View>
  )
}

export default Portfolio

