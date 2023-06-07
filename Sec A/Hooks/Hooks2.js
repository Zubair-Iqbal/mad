import { Button, StyleSheet, Text, View } from 'react-native'
import React ,{useEffect,useState} from 'react'

const Hooks2 = () => {
    const [c, setC]=useState(1);
    const [v, setV]=useState(1);

    // useEffect(()=>{
    //     console.warn("Call on component Mount and on every State Prop Update");
    // },)

    // useEffect(()=>{
    //     console.warn("Only Call When Component Mount");
    // },[])

    // useEffect(()=>{
    //     console.warn("Only Call When 2 states update");
    // },[c,v])

    // useEffect(()=>{
    //     console.warn("Only Call When 1 state update");
    // },[c])
  return (
    <View>
      
      <Text>Counter:{c}</Text>
      <Text>Value:{v}</Text>

      <Button title="Counter" onPress={()=>setC(c+1)}/>
      <Button title="Value" onPress={()=>setV(v+1)}/>

      <User info={c}/>
    </View>
  )
}

//Child Component

const User=(props)=>{
    useEffect(()=>{
        console.warn("On Prop Pass");
    },[props.info])
    return(
        <View>
            <Text>Hello{props.info}</Text>
        </View>
    );
}

export default Hooks2

const styles = StyleSheet.create({})