import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity,Button } from 'react-native'
import {React, useState} from 'react'

import { Ionicons } from '@expo/vector-icons'; 
import Toast from 'react-native-toast-message';
import styles from "./styles"


const Form = ({img,setIsFarmer}) => {
  const [ name , setName] = useState("")
const [ region, setRegion] = useState("")
const [ phno , setPhno] = useState("")
const [ email , setEmail] = useState("")
const [ btntext , setBtntext] = useState("Register")



const register = ()=>{
console.log("registering with details :",name,region,phno,email);

verfyemail(email)
setBtntext("PROCEED")
Toast.show({
  type : "success",
  text1 : "You have registered!",
  text2 : "Please check email for verification link",
})
}


  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={()=>setIsFarmer(-1)} >
<Ionicons name="arrow-back" size={54} color="black" />
      
    </TouchableOpacity>
    <View style = {styles.formbox}>
    <Image style={styles.imgdisp} source={img}>
    
    </Image>
        <Text numberOfLines={1}>               
        _________________________
    </Text>
    <Text>Name:</Text><TextInput style={styles.input} onChangeText={setName} >
      {name}
    </TextInput>
    <Text>Region:</Text><TextInput style={styles.input} onChangeText={setRegion} >
      {region}
    </TextInput>
    <Text>Phone number:</Text><TextInput  style={styles.input}onChangeText={setPhno} >
      {phno}
    </TextInput>
    <Text>Email (optional):</Text><TextInput  style={styles.input}onChangeText={setEmail} >
      {email}
    </TextInput>
    <TouchableOpacity onPress={register}>

    <Text  style={styles.button}>
    {btntext}
    </Text>
    </TouchableOpacity>

        </View>
        <Toast />
    </View>
  )
}



export default Form

