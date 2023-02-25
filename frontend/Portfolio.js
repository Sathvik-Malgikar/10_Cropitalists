import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from "./styles"


const Portfolio = () => {
    const [name , setName] = useState("Loading..")
    //fetch from db
  return (
    <View style={styles.container}>
      <Text style={styles.titlecontain}>Portfolio - {name}</Text>
      <View style={styles.formbox}>
        <View style={styles.profilePhoto} >
          <Image source={require("./farmer.jpg")}></Image>
        </View>
      </View>
    </View>
  )
}

export default Portfolio

