
import { useState  } from "react"
import { StyleSheet, Text, Image, View,TextInput, ScrollView ,TouchableOpacity} from 'react-native';
import Form from './Form';
import styles from "./styles"


const Register = () =>{

const [ isFarmer , setIsFarmer ] = useState(-1)
const [ sectors , setSectors] = useState([])
let carrot = require("./assets/images/carrot.png")
let investor = require("./assets/images/investor.png")
  return (
    
    <ScrollView style={styles.container}>
   


    { isFarmer==1? (<Form img={carrot} setIsFarmer={setIsFarmer}></Form>):(isFarmer==0?(
    <Form img={investor} setIsFarmer={setIsFarmer}></Form>):(
      <View style={styles.formbox}>
      <TouchableOpacity onPress={()=>{setIsFarmer(1)}}>
<Text>Farmer</Text>
      <Image style={styles.imgdisp} source={carrot} ></Image>
      </TouchableOpacity>
      <Text> OR </Text>
      <TouchableOpacity onPress={()=>{setIsFarmer(0)}}>
<Text>Retailer</Text>
      <Image style={styles.imgdisp} source={investor} ></Image>
      </TouchableOpacity>
      </View>
    )) }
    
    
    </ScrollView>

  );
}


export default Register
