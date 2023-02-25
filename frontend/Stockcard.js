import { StyleSheet, Text, SafeAreaView ,Image,TouchableOpacity,
      View} from 'react-native';


function Stockcard() {
return (
  
  <SafeAreaView style={styles.container}>
    
    {/* <Text  onPress={handlePress} >Hello !</Text> */}
    {/* <Image source={require('./assets/adaptive-icon.png')}/> */}
    <TouchableOpacity onPress={()=>console.log("Image clicked")}  style={styles.card}>
      <Image 
      
      fadeDuration={1000}
      source={
        {
          width:250,
          height:150,
          uri:"https://img.freepik.com/premium-photo/stock-market-forex-trading-graph-graphic-concept_73426-104.jpg?w=2000"}}/>
         
        <View styles={{display : "flex" ,alignItems : "center"}}>
        <Text style={styles.titleText}> Stock  </Text>
        <Text style={styles.titleText}> Price  </Text>
        <Text style={styles.titleText}> %  </Text>
        </View>
    </TouchableOpacity>

  </SafeAreaView>

);

}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  
},
card:{
  borderWidth: 5,
  backgroundColor: '#fff',
},
 titleText: {
  fontSize: 15,
  fontWeight: 'bold',
 
},
});

export default Stockcard;
