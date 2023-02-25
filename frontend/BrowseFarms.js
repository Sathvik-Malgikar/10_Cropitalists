import { StyleSheet, Text, View , ScrollView } from 'react-native'
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
 const [total, setTotal] =useState(0);
 function admnt (a){
  setTotal(total+a)
 }
  let deets = [ {"name" : "Ramesh" , "crop" : "wheat" , "rev" : 2416.2, "fut" : "UP" } , {"name" : "Ramchandra" , "crop" : "arecanut" , "rev" : 3516.2, "fut" : "DOWN" }, {"name" : "Govinda" , "crop" : "banana" , "rev" : 915.1, "fut" : "UP" },{"name" : "Ramesh" , "crop" : "wheat" , "rev" : 2416.2, "fut" : "UP" } , {"name" : "John" , "crop" : "Milk" , "rev" : 3516.2, "fut" : "DOWN" }, {"name" : "Abdul" , "crop" : "banana" , "rev" : 915.1, "fut" : "UP" }]
  //fetch some farmers deets from db
  return (<>
    
  
    <View style={styleslocal.sum} >

<Text>total investment : {total}</Text>
</View>
    <ScrollView style={styles.container}>
      <Text style={styles.titlecontain}>BrowseFarms</Text>
      <SimpleGrid 
       itemDimension={130}
  data={deets}
  renderItem={((ele)=>{
    console.log(ele)
    return (
        <Stockcard2 obj = {ele.item} cb = {navfunc} addamt={admnt} >  </Stockcard2>

    )
})}/>

    </ScrollView>
  </>
  )
}

const styleslocal = StyleSheet.create({
  sum :{
  
position : "fixed",
    display : "flex",
    justifyContent : "space-around",
    flexDirection : "column",
    alignItems : "center",
backgroundColor : "#77ff5c",
borderRadius : 20,
padding : 5,
marginLeft : 14,
marginBottom : 14,
marginTop : 20,

  }
})

export default BrowseFarms

