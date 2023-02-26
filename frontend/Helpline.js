
import { useState  } from "react"
import { StyleSheet, Text, Image, View,TextInput, ScrollView ,TouchableOpacity,Linking,Alert,Platform} from 'react-native';

import styles from "./styles"

const Helpline = () => {
  return (
    <ScrollView>
        
  
    <View style={styles.formbox}>
      <Text style={styles.titlecontain}>Helpline</Text>
      <Text >For any issues or help : </Text>

       <TouchableOpacity onPress={()=>{
      if(Platform.OS == "android"){
        phoneNumber = `telprompt:7019486115`;
      }else{

        phoneNumber = `tel:7019486115`;
      }

      Linking.canOpenURL(phoneNumber)
  .then(supported => {
    if (!supported) {
      Alert.alert('Phone number is not available');
    } else {
      return Linking.openURL(phoneNumber);
    }
  })
  .catch(err => console.log(err));

     }}>
     <Text style={styles.link}>7019486115</Text>
     </TouchableOpacity> 
       <TouchableOpacity onPress={()=>{
      if(Platform.OS == "android"){
        phoneNumber = `telprompt:7019486115`;
      }else{

        phoneNumber = `tel:7019486115`;
      }

      Linking.canOpenURL('message:')
    .then(supported => {
        if (!supported) {
          console.log('Cant handle url')
        } else {
          return Linking.openURL('message:')
        }
      })
      .catch(err => {
        console.error('An error occurred', err)
      })

     }}>
     <Text style={styles.link}>Cropitalists@outlook.com</Text>
     </TouchableOpacity> 


    </View>
    </ScrollView>
  )
}

export default Helpline

