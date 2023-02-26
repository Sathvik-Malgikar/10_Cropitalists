import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BrowseFarms from "./BrowseFarms";
// import Portfolio from "./Portfolio";
import StockOverview from "./StockOverview"
import Portfolio from "./Portfolio"

import { createStackNavigator } from '@react-navigation/stack';

const InvestorPage = () => {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
    <Stack.Screen name="BrowseFarms" component={BrowseFarms} />
    <Stack.Screen name="Portfolio" component={Portfolio} />
   <Stack.Screen name="StockOverview" component={StockOverview} />
 </Stack.Navigator>
  )
}

export default InvestorPage

const styles = StyleSheet.create({})