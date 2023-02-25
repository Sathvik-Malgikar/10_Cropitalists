import { StatusBar } from 'expo-status-bar';

import styles from "./styles"
import React from 'react';
import {Text} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Register from "./Register"
import About from "./About"
import Helpline from "./Helpline"

const  App = ()  => {

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


  return (
    <>
<NavigationContainer>
      <Drawer.Navigator initialRouteName='Register'>

<Drawer.Screen name='Register' component={Register} />
<Drawer.Screen name='About' component={About} />
<Drawer.Screen name='Helpline' component={Helpline} />

      </Drawer.Navigator>
       

    </NavigationContainer>
    </>
  );
}

export default App;