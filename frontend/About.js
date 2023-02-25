
import { useState  } from "react"
import { StyleSheet, Text, Image, View,TextInput, ScrollView ,TouchableOpacity} from 'react-native';

import styles from "./styles"

const About = () => {
  return (
    <ScrollView>
        
    <View style={styles.imgdisphl}>

    <Image style={styles.imgdisp} source={require("./logo.png")}/>
    </View>

    <View style={styles.formbox}>
      <Text style={styles.titlecontain}>What we are</Text>
      <Text>

    Cropitalists is an effort made towards making managing finances of a farm streamlined and burden free. Instead of the conventional loans taken to buy farm essentials, we aim to involve capital investments into land to cover the expenses.
      </Text>
      <Text style={styles.titlecontain}>How stock values are calculated</Text>
      <Text>This involves a number of parameters and data collected over a period of time. Our calculation algorithm is inspired by the stock market's concept. Based on current demand and local-supply, collected by both external sources as well as our other clients, a stock price is fixed.
      
      <Text style={styles.link}>Read more</Text>
      </Text>
      <Text style={styles.titlecontain}>Why us?</Text>
      <Text> In the best interest of both the landowner and investor, recommendations are made. We aim to provide an opportunity for investors to spend their idle money into landowners who desperately need money and in return get a share of revenue.
      </Text>
    

    </View>
    </ScrollView>
  )
}

export default About

