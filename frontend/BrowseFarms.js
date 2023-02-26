import { StyleSheet, Text, View , ScrollView ,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import styles from "./styles"
import { useNavigation } from '@react-navigation/native';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import Toast from 'react-native-toast-message';
import Stockcard2 from "./Stockcard2"
import { SimpleGrid } from 'react-native-super-grid';



const BrowseFarms = () => {
  const [pop,setPop] = useState(false)
const [summary,setSummary]= useState('');
  const navigation = useNavigation(); 
 function navfunc(n){
  navigation.navigate("StockOverview" , {"name" : n})
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
  
    <ScrollView  style={styles.container}>
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
    <View style={styleslocal.button}>

    <TouchableOpacity onPress={()=>{
    setPop(true)
}} >
    <Text>Submit</Text> 
</TouchableOpacity>

    <Dialog
    visible={pop}
    onTouchOutside={() => {
      setPop(false)
    }}
  >
    <DialogContent>
      <Text>Are you sure you want to invest ? </Text>
      <View>
<Text>Summary : {summary}</Text>

  <TouchableOpacity onPress={()=>{
  setPop(false)
 Toast.show({
  type : "success",
  text1 : "Stocks purchased!",
  text2 : "Your investment has been made !",
})
setTimeout(()=>{
 setSummary("")
 setTotal(0)
 
 navigation.navigate("StockOverview")

},1000)


  }} style={styleslocal.button}>
      <Text>Confirm</Text> 
  </TouchableOpacity>

</View>
    </DialogContent>
  </Dialog>
 <Toast/>

    </View>
  </>
  )
}

const styleslocal = StyleSheet.create({
  button :{
    backgroundColor : "#f4f2fd",
    margin : 6,
    padding : 6,
    textAlign : "center",
    color : "#77ff5c",
    borderRadius : 4,
  },
  sum :{

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

