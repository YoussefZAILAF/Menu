import React, { useState }  from "react";
import { StyleSheet,View ,TextInput, Button} from "react-native";


export default function Formulaire({submitHandler}){
    const [text,setText]=useState('');

    const textHandler=(val)=>{
        setText(val);
    }


   return(
    <View style={myStyle.container}>
    <View>
    <TextInput style={myStyle.inputStyle} keyboardType='default'
    onChangeText={textHandler} placeholder="Enter your next object to do"/>
    </View>
    <View style={myStyle.ButtonStyle}>
        <Button title="to Do"  color="orange" onPress={()=>submitHandler(text)}/>
    </View>
</View>
   );

}

const myStyle=StyleSheet.create(
 {
    container:{
        margin:10,

    },
    inputStyle:{
        padding:15,
        borderColor:'white',
        borderBottomWidth:1,
        fontWeight:'italic',
        borderRadius:10,
    },

    ButtonStyle:{
        marginTop:30,
        width:'50%',
        marginLeft:'25%'
    
    }
 }

)