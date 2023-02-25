import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from "./styles"


const Dashboard = () => {
    const [name , setName] = useState("Loading..")
    //fetch from db



    const [select , setSelect] = useState(-1)
   


  return (
    <View style={styles.container}>
      <Text style={styles.titlecontain}>Dashboard - {name}</Text>
      <View style={styles.formbox}>
        <View style={styles.button}>
<Text onPress={()=>{setSelect(0)}}>Revenue</Text>
        </View>
        <View style={styles.button}>
        
<Text onPress={()=>{setSelect(1)}}>Seasonal Revenue</Text>
        </View>
        <View style={styles.button}>
<Text onPress={()=>{setSelect(2)}}>Highest Revenue Crop </Text>
        </View>
        {select==-1? (<></>): select==0? (<RevenueDropdown></RevenueDropdown>) : select==1? (<RevenueDropdown></RevenueDropdown>) : (<Revpercrop></Revpercrop>)}
       
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

    let cropmap = [ {"crop" : "wheat" , "rev" : 2416.2} , {"crop" : "arecanut" , "rev" : 3516.2}, {"crop" : "banana" , "rev" : 915.1}]
  return (
    <View style={styleslocal.dropdown}>
     
{cropmap.map((ele,i)=>{
    return (
        <Text>{ele.crop} -- {ele.rev} </Text>

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

