
import { useState  } from "react"
import { StyleSheet, Text, Image, View,TextInput, ScrollView ,TouchableOpacity} from 'react-native';

import styles from "./styles"

const Helpline = () => {
  return (
    <ScrollView>
        
  
    <View style={styles.formbox}>
      <Text style={styles.titlecontain}>Helpline</Text>
      <Text >For any issues or help : </Text>
      <Text style={styles.link}>7019486115</Text>
      <Text style={styles.link}>Cropitalists@outlook.com</Text>


    </View>
    </ScrollView>
  )
}

export default Helpline

