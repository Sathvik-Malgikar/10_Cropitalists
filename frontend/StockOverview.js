import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import { VictoryChart,VictoryLine } from 'victory-native'
import styles from "./styles"

const StockOverview=()=>{
    return(<View><VictoryChart minDomain={{ y: 0 }}>
        <VictoryLine data={sampleData}/>
      </VictoryChart></View>)
}
export default StockOverview;