import { ScrollView, StyleSheet, Text,Image, Touchable,TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from "./styles"
import { SimpleGrid } from 'react-native-super-grid';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const CroptoStock = ({navigation}) => {
  // navigator - useNavigation();
    let deets = [{"name" : "carrot" , "img" : require("./assets/images/carrot.png")}, { "name" : "dairy" , "img" : require("./assets/images/cow.jpg") } , { "name" : "poultry" , "img" :require("./assets/images/hen.jpg") }, { "name" : "banana" , "img" :require("./assets/images/banana.jpg") } , { "name" : "redapple" , "img" : require("./assets/images/redapple.jpg") }
    , { "name" : "honey" , "img" : require("./assets/images/honey.jpg") }]
    // deets = deets.map(ele=>require(ele))

const [box,setBox] = useState(false)
const [pop,setPop] = useState(false)
const [summary,setSummary]= useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.titlecontain}>Crops2Stocks !</Text>
      <ScrollView styles={styles.formbox} >
      <SimpleGrid 
       itemDimension={130}
  data={deets}
  renderItem={((ele)=>{
    console.log(ele.item.name)
    return (<>

        <TouchableOpacity onPress={()=>{
setBox(true)
        }}>
            <Image style={styleslocal.imgmmin} source={ele.item.img }></Image>
            <Text>{ele.item.name}</Text>
        </TouchableOpacity>
        {box?
            
                <TextInput placeholder='Enter in kgs' onChangeText={(val)=>{
                    let ival = parseInt(val)
  setSummary(summary+`\n${ele.item.name} ${ival} kgs -- ${ival*10} stocks ${672 + Math.fround(Math.random()*100) } each -- total ${ 698 * ival} rupees`)
                }} ></TextInput>
             : <></>
        }


    </>
        

    )
})}/>

<TouchableOpacity onPress={()=>{
    setPop(true)
}} style={styleslocal.button}>
    <Text>Submit</Text> 
</TouchableOpacity>
      </ScrollView>
      <Dialog
    visible={pop}
    onTouchOutside={() => {
      setPop(false)
    }}
  >
    <DialogContent>
      <Text>Are you sure to publish this many stocks ? </Text>
      <View>
<Text>Summary : {summary}</Text>

  <TouchableOpacity onPress={()=>{
  setPop(false)
 Toast.show({
  type : "success",
  text1 : "Stocks created!",
  text2 : "New stocks are published!",
})
setTimeout(()=>{
 setSummary("")
 navigation.navigate("Dashboard")

},1000)


  }} style={styleslocal.button}>
      <Text>Confirm</Text> 
  </TouchableOpacity>

</View>
    </DialogContent>
  </Dialog>
 <Toast/>
    </View>
  )
}

export default CroptoStock

const styleslocal = StyleSheet.create({
    imgmmin : {
        width : 100,
        height : 100,
    },
   
    button :{
        backgroundColor : "#f4f2fd",
        margin : 6,
        padding : 6,
        textAlign : "center",
        color : "#77ff5c",
        borderRadius : 4,
      },
})