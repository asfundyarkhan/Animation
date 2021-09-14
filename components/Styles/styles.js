import React from 'react';
import { StyleSheet ,Dimensions} from 'react-native';



const {height,width} = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      //alignItems: 'center',
      justifyContent: 'flex-end',
    },
    Button:{
      backgroundColor:'white',
      height:70,
      marginHorizontal:20,
      borderRadius:35,
      alignItems:'center',
      justifyContent:'center',
      marginVertical: 5 ,
      //bottom:50,
      shadowOffset:{width:2,height:2,},
      shadowColor:'black',
      shadowOpacity:0.2,
    },
    button:{
      backgroundColor:'white',
      height:70,
      marginHorizontal:20,
      borderRadius:35,
      alignItems:'center',
      justifyContent:'center',
      marginVertical: 5 ,
      //shadowOffset: {width: 2 ,height: 2 ,},
      //shadowColor:'black',
      //shadowOpacity:0.2,
      shadowColor: "#000",
      shadowOffset: {
	    width: 0,
	    height: 4,
        },
      shadowOpacity: 0,
      shadowRadius: 4.65,

      elevation: 8,
    },
    textInput:{
     height:50,
     borderRadius:25,
     borderWidth:0.5,
     marginHorizontal:20,
     paddingLeft:10, 
     marginVertical:5,
     //bottom:50,
    },
    closeButton:{
      height:40,
      width:40,
      backgroundColor:'white',
      borderRadius:20,
      alignItems:'center',
      justifyContent:'center',
      position:'absolute',
      top:-height/11,
      left:width/2-20,
      shadowOffset:{ width:2 , height:2 },
      shadowColor:'black',
      shadowOpacity:0.2,
    },
  });