import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const PropsExample = () => {
    const [name,setName]=useState("Owais")
    let varUni="SHU";
  return (
    <View>
      <Text>PropsExample</Text>
      <Child1 name="Owais"  />
      <Child2 name="Owais"  />
      <Child3 Uni={varUni} location="Khi"/> 

      <Button title='Pass Props using State' onPress={()=>setName("Owais Ansari")}/>
      <Child4 name={name}/>
    </View>
  )
}

const Child1=(props)=>{
    return(
        <View>
            <Text>Name (Props):{props.name}</Text>
        </View>
    );
}

const Child2=(data)=>{
    return(
        <View>
            <Text>Name (Data):{data.name}</Text>
        </View>
    );
}

const Child3=(props)=>{
    const {Uni , location}=props
    return(
        <View>
            <Text>Name (Props Destrutre ):{Uni}</Text>
            <Text>Name (Props Destrutre ):{location}</Text>
        </View>
    );
}

const Child4=(props)=>{
    
    return(
        <View>
            <Text>Name (State Update):{props.name}</Text>
            
        </View>
    );
}

export default PropsExample



//----------------------------------Props
/*In React Native, props (short for "properties") are a way to pass data and configuration to a component. 
They are similar to function arguments in other programming languages.

Props are defined when a component is created and passed down from a parent component to a child component. 
They are immutable, meaning that they cannot be changed within the component that receives them. 
Instead, the parent component can update the props, which will cause the child component to re-render with the new props.

Props can be any data type, including strings, numbers, objects, and functions. 
They can also be used to pass down styles, event handlers, and other configuration options to child components.
 Props are a key part of React Native development and are used extensively in building reusable and modular components.*/


//------------------------------------Q&A
// Q:How Props are used ?
// A:Props Are Like Arguments/Parameter of Components.
// (Used When pass Data from One Component to another Component)

// Q:Can we pass data from child to Parent ?
// A:Yes 

// Q:Can we pass data from Parent to child  ?
// A: yes (Lifting up State)

// Q:Can we Send State directly to other component ?
// A:No (we can only pass state to other component with help of Props)

// Q:Similarity B/W State and PropsExample
// A:Both re-render the Component when Update

