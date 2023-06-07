import { Button, StyleSheet, Text, View } from 'react-native'
import React,{useEffect,useState} from 'react'

const Hooks = () => {

 const [v,setV]=useState(1)   
useEffect(()=>{
    console.warn("Hello")
},[])

  return (
    <View>
      <Text>Hooks {v}</Text>
      <Button title='Press' onPress={()=>setV(v+1)}/>
    </View>
  )
}

export default Hooks

const styles = StyleSheet.create({})