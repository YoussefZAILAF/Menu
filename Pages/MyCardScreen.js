import { Text, View,StyleSheet } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import React, { Component } from 'react'


export default function Recharge(){
    return (
      <View>
        <Text style={myStyle.textS}>My cards</Text>
      </View>
    )
  
}
const myStyle=StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
    height:'100%'
  },
  textS:{
    color:'black'
  }
})