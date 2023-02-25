import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

link : {
color : "blue"
},
  titlecontain : {
    textAlign : "center",
    fontSize : 20,
    padding : 5,
    top : 4,
    backgroundColor : "#77ff5c",
    flex : 0
    
      },
    
      container: {
        flex: 1,
        backgroundColor: '#f4f2fd',
        padding : "auto"
        
      },
     
      button :{
        backgroundColor : "#f4f2fd",
        margin : 6,
        padding : 6,
        textAlign : "center",
        color : "#000000",
        borderRadius : 4,
      },

    imgdisp :{
      width : 100,
      height: 100,
        },
    imgdisphl :{

  flex :1,
  alignItems : "center",
  justifyContent : "center",
  borderRadius : 10,
  overflow : "hidden",
  margin : 5,
        },

        formbox : {

          display : "flex",
          justifyContent : "space-around",
          flexDirection : "column",
          alignItems : "center",
      backgroundColor : "#77ff5c",
      borderRadius : 20,
      padding : 5,
      marginLeft : 34,
      marginTop : 20,
      width : 260,
      minHeight : 350
    },
    input : {
      backgroundColor : '#f4f2fd',
      borderRadius : 10,
      textAlign : "center",
      minWidth : 60
    },
  
  })


export default styles;