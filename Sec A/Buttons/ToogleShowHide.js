import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const ToogleShowHide = () => {
    const [show, setShow]=useState(true);
  return (
    <View>
      <Text>ToogleShowHide</Text>
      <Button title='Hide Component' onPress={()=>setShow(false)}/>
      <Button title='Show Component' onPress={()=>setShow(true)}/>
      <Button title='Toogle Component' onPress={()=>setShow(!show)}/>
      {
        show ? <Data/>:null
      }
      
    </View>
  )
}

const Data=()=>{
    return<Text>This Is My Component</Text>
}

export default ToogleShowHide

const styles = StyleSheet.create({})