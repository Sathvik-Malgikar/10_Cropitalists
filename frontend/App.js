import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Register from "./Register";


export default function App() {
  const Drawer = createDrawerNavigator();


  return (
    <NavigationContainer>
         <Drawer.Navigator initialRouteName='Register'>

<Drawer.Screen name='Register' component={Register} />

      </Drawer.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
 
});
