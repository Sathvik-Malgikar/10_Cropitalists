import { FlatList, StyleSheet, Text, View,Dimensions, Touchable, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'
// import { VictoryChart,VictoryLine,VictoryTheme } from 'victory-native'
// import {LineChart,XAxis,YAxis,CartesianAxis,CartesianGrid,Tooltip,Line} from "recharts";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import styles from "./styles"

import {onSnapshot,collection,doc,getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDzU6EqKvtgNwcnHxmpP_uaf07cArvlpQw",
    authDomain: "farmstockapp.firebaseapp.com",
    projectId: "farmstockapp",
    storageBucket: "farmstockapp.appspot.com",
    messagingSenderId: "870267862328",
    appId: "1:870267862328:web:18c30b080efa2e4c61d5cd",
    measurementId: "G-3QRDBEYDWD",
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
  const db = getFirestore(app);
  
  


const StockOverview=({navigation})=>{

  const[v10,setv10] =  useState(0)
  const[v0,setv0] =  useState(0)
  const[v20,setv20] =  useState(0)
  const[v5,setv5] =  useState(0)
    
    useEffect(()=>{
        
        // const colRef   = collection(db , "StockOverviewData")
    

    onSnapshot(doc(db,"StockOverviewData", "YELL123MZE"), docsSnap => {
        // docsSnap.forEach(doc => {
        //   console.log(doc.data());
        // })
        console.log(docsSnap.data()["-10 min"]);
        setv10(parseFloat( docsSnap.data()["-10 min"].close) )
        setv0(parseFloat( docsSnap.data()["0 min"].close) )
        setv20(parseFloat( docsSnap.data()["-20 min"].close) )
        setv5(parseFloat( docsSnap.data()["-5 min"].close) )
      });
},[])


    return(<>
        <View>
        <Text>Bezier Line Chart</Text>
        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  v20,
                  v10,
                  v5,
                  v0,
                ]
              }
            ]
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      </View>
      <View>
        <Text style={styles.titlecontain}>
            Analysis
        </Text>
        <TouchableOpacity onPress={()=>{
            navigation.navigate("Portfolio")
        }}>
            <Text style={styles.button}>Go to portfolio</Text>
        </TouchableOpacity>
      </View>
    </>)
}
export default StockOverview;