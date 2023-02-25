import { ScrollView, StyleSheet, Text,Image, Touchable,TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from "./styles"
import { SimpleGrid } from 'react-native-super-grid';


const CroptoStock = () => {
    let deets = [{"name" : "carrot" , "img" : require("./assets/images/carrot.png")}, { "name" : "dairy" , "img" : require("./assets/images/cow.jpg") } , { "name" : "poultry" , "img" :require("./assets/images/hen.jpg") }, { "name" : "banana" , "img" :require("./assets/images/banana.jpg") } , { "name" : "redapple" , "img" : require("./assets/images/redapple.jpg") }
    , { "name" : "honey" , "img" : require("./assets/images/honey.jpg") }]
    // deets = deets.map(ele=>require(ele))

const [box,setBox] = useState(false)

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
            
                <TextInput placeholder='Enter in kgs'></TextInput>
             : <></>
        }


    </>
        

    )
})}/>
<View>
<Text>Summary</Text>

</View>
<TouchableOpacity onPress={()=>{
    
}} style={stylesloc.button}>
    <Text>Submit</Text> 
</TouchableOpacity>
      </ScrollView>
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