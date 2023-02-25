import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from "./styles"


const Dashboard = () => {
    const [name , setName] = useState("Loading..")
    //fetch from db
  return (
    <View style={styles.container}>
      <Text style={styles.titlecontain}>Dashboard - {name}</Text>
      <View style={styles.formbox}>
        <View style={styles.button}>
<Text>Revenue</Text>
        </View>
        <View style={styles.button}>
        
<Text>Seasonal Revenue</Text>
        </View>
        <View style={styles.button}>
<Text>Highest Revenue Crop </Text>
        </View>
      </View>
    </View>
  )
}
const RevenueDropdown = () => {

  return (
    <View style={styleslocal.dropdown}>
     <Text>Stocks remaining</Text>
     <View>
        <Text>item 1 - 1 stocks</Text>
        <Text>item 2 - 2 stocks</Text>
        
     </View>
     <Text>Stocks sold</Text>
     <View>
        <Text>item 1 - 3 stocks</Text>
        <Text>item 2 - 5 stocks</Text>
        
     </View>
     <Text style={styles.titlecontain}> Revenue made : 12600  </Text>
    </View>
  )
}
const Revpercrop = () => {

    let cropmap = { {} ,  "arcenaut" : "3183.7" , "Banana" : "1002.3" }
  return (
    <View style={styleslocal.dropdown}>
     
{cropmap.map((ele,i)=>{
    return (
        <Text>{ele} -- {ele} </Text>

    )
})}

     <Text style={styles.titlecontain}> Revenue made : 12600  </Text>
    </View>
  )
}

const styleslocal = StyleSheet.create({
    dropdown :{
     
    }
  })

export default Dashboard

