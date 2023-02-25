import { StyleSheet, Text, View ,Image} from 'react-native'
import React, { useState } from 'react'
import styles from "./styles"
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

const Portfolio = ({cname ,navigation,route }) => {
  // const navigation = useNavigation(); 
  let deets = [ {"name" : "Ramesh" , "crop" : "wheat" , "rev" : 2416.2, "fut" : "UP" } , {"name" : "Ramchandra" , "crop" : "arecanut" , "rev" : 3516.2, "fut" : "DOWN" }, {"name" : "Govinda" , "crop" : "banana" , "rev" : 915.1, "fut" : "UP" }]
    //fetch from db
    let chosen = deets.filter(ele=>ele.name == route.params.name || cname)
    chosen = chosen[0]
let stars =  Math.ceil(Math.random()*5)
const arrayRange = (start, stop, step) => Array. from( { length: (stop - start) / step + 1 }, (value, index) => start + index * step );
stars = arrayRange(1,stars,1)
// console.log((navigation));
console.log("\n this works");
  return (
    <View style={styles.container}>
      <Text style={styles.titlecontain}>Portfolio - {chosen.name}</Text>
      <View style={styles.formbox}>
        <View style={styles.profilePhoto} >
          <Image style={{width : 100 , height : 100}} source={require("./assets/images/farmer.jpg")}></Image>
        </View>
          <Text>
          Crops : {chosen.crop} {"\n\n"}
         
          Annual revenue generated : {chosen.rev} {"\n\n"}
          Contact : <Text style={styles.link}>7019486115</Text> {"\n\n"}
          current growth : {chosen.fut=="UP"?<Ionicons name="arrow-up" size={24} color="black" />:<Ionicons name="arrow-down" size={24} color="black" />}
          </Text>
        <View style={styleslocal.row}>
         {stars.map(e=>{
          return(<>
            <AntDesign name="star" size={24} color="black" />
          </>)
         })}
        </View>
      </View>
    </View>
  )
}
const styleslocal = StyleSheet.create({
  row:{
    display : "flex",
    flexDirection : "row"
  }
})
export default Portfolio

