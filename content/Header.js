import React  from "react";
import { StyleSheet,Text,View } from "react-native";

export default function Header(){
   return(
    <View style={myStyle.containerHeader}>
        <Text style={myStyle.textStyle}>Mo.X Todos</Text>
    </View>

   );

}

const myStyle=StyleSheet.create({
    containerHeader:{
        height:80,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"orange"
    },
    textStyle:{
     fontWeight:'bold',
     fontStyle:'italic',
     fontFamily:'Verdana',
     fontSize:30
    }

})