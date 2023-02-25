import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Register from "./Register";
import About from "./About";
import Helpline from "./Helpline";
import Dashboard from "./Dashboard";
import styles from "./styles"


export default function App() {
  const Drawer = createDrawerNavigator();


  return (
    <NavigationContainer>
         <Drawer.Navigator initialRouteName='Register'>

<Drawer.Screen name='Register' component={Register} />
<Drawer.Screen name='Helpline' component={Helpline} />
<Drawer.Screen name='About' component={About} />
<Drawer.Screen name='Dashboard' component={Dashboard} />

      </Drawer.Navigator>
    </NavigationContainer>
   
  );
}

