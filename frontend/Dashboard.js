import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import styles from "./styles"

const Dashboard = () => {
    const [name , setName] = useState("Loading..")
    //fetch from db



    const [select , setSelect] = useState(-1)
   


  return (
    <View style={styles.container}>
      <Text style={styles.titlecontain}>Dashboard - {name}</Text>
      <View style={styles.formbox}>
        <View style={styles.button}>
<Text onPress={()=>{setSelect(0)}}>Revenue</Text>
        </View>
        <View style={styles.button}>
        
<Text onPress={()=>{setSelect(1)}}>Seasonal Revenue</Text>
        </View>
        <View style={styles.button}>
<Text onPress={()=>{setSelect(2)}}>Highest Revenue Crop </Text>
        </View>
        {select==-1? (<></>): select==0? (<RevenueDropdown></RevenueDropdown>) : select==1? (<RevenueDropdown></RevenueDropdown>) : (<Revpercrop></Revpercrop>)}
       <View>
       <InvestorHistory/>
       </View>
      </View>
    </View>
  )
}
const RevenueDropdown = () => {

  return (
    <View style={styleslocal.dropdown}>
     <Text>Stocks remaining</Text>
     <View>
        <Text>item 1 - 1 stocks</Text>
        <Text>item 2 - 2 stocks</Text>
        
     </View>
     <Text>Stocks sold</Text>
     <View>
        <Text>item 1 - 3 stocks</Text>
        <Text>item 2 - 5 stocks</Text>
        
     </View>
     <Text style={styles.titlecontain}> Revenue made : 12600  </Text>
    </View>
  )
}
const Revpercrop = () => {

    let cropmap = [ {"crop" : "wheat" , "rev" : 2416.2} , {"crop" : "arecanut" , "rev" : 3516.2}, {"crop" : "banana" , "rev" : 915.1}]
  return (
    <View style={styleslocal.dropdown}>
     
{cropmap.map((ele,i)=>{
    return (
        <Text>{ele.crop} -- {ele.rev} </Text>

    )
})}

     <Text style={styles.titlecontain}> Revenue made : 12600  </Text>
    </View>
  )
}

const styleslocal = StyleSheet.create({
    dropdown :{
     
    }
  })


  const InvestorHistory=()=>{
    const [invtarr,setinvtarr]=useState([])
  // Amt
  // INvName
  // TxID
  // AMtStck
  // NameStck

const arrtemp = [{amount:'184.3223',invstrname:'Govinda',txId:'12323',amtStock:'200',nameStock:'YELL123MZE'},{amount:'191.3223',invstrname:'JamaBhai',txId:'12393',amtStock:'180',nameStock:'YELL123BNS'},{amount:'146.3223',invstrname:'Scandy',txId:'11993',amtStock:'180',nameStock:'YELL123MZE'},{amount:'189.38823',invstrname:'Jack',txId:'12813',amtStock:'180',nameStock:'YELL123MZE'}]


function foo(){
  if(arrtemp.length==0){
  return (<Text>Loading</Text>)
    }else{
return( <View>
  


    <FlatList data={arrtemp} renderItem={(stock)=>{
      return (<InvestorTile amount={stock.amount} invstrname={stock.invstrname} txId={stock.txId} amtStock={stock.amtStock} nameStock={stock.nameStock}/>)
    }}  />

    
    
    </View>)
    }
  
}

    // useEffect(()=>{
    //   setinvtarr([{amount:'184.3223',invstrname:'Govinda',txId:'12323',amtStock:'200',nameStock:'YELL123MZE'},{amount:'191.3223',invstrname:'JamaBhai',txId:'12393',amtStock:'180',nameStock:'YELL123BNS'},{amount:'146.3223',invstrname:'Scandy',txId:'11993',amtStock:'180',nameStock:'YELL123MZE'},{amount:'189.38823',invstrname:'Jack',txId:'12813',amtStock:'180',nameStock:'YELL123MZE'}])
    // },[])
    return(<View style={{width:'100%'}}><Text>{foo()}</Text></View>);
  }
  
  const InvestorTile=({amount,invstrname,txId,amtStock,nameStock})=>{
    return(
 <></>
    )
  }





export default Dashboard

