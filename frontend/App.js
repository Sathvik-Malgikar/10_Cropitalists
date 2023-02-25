import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Register from "./Register";
import styles from "./styles"


export default function App() {
  const Drawer = createDrawerNavigator();


  return (
    <NavigationContainer>
         <Drawer.Navigator initialRouteName='Register'>

<Drawer.Screen name='Register' component={Register} />
<Drawer.Screen name='Helpline' component={Helpline} />
<Drawer.Screen name='About' component={About} />

      </Drawer.Navigator>
    </NavigationContainer>
   
  );
}

