//#9 C-SBS


import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import react from 'react'

const StateVsVariable = () => {

    // Required useState hook from react
    // destructerd [name , setName]
    // useState() function use to assigne ini value
    // setName() function used to push new Value
    const [name , setName]=useState("Owais");
    
    let varName="Owais";

    function nameHandle(){

        
        // state will update and re-render component
            setName("Owais Ansari");
        //Variable update but cant re-render component
            varName="Owais Ansari";
        
        
    }
  return (
    <View>
      <Text style={{ textAlign: "center" }} >State Vs Variable</Text>
      <Button title='Press to Change the State' onPress={nameHandle}/>
      <Text style={{ textAlign: "left" }} >State: {name}</Text>
      <Text style={{ textAlign: "left" }} >Variable: {varName}</Text>
    </View>
  )
}

export default StateVsVariable


//-------------------------------------------State
//In React Native, "state" refers to an object that holds information about a component's internal state. 
//State is used to manage data that can change over time, such as user input, API responses, or animations.



//---------------------------------------------Q&A
// Q:Is State React Native Feature ?
// A:No its |React JS Feature.
// (React NAtive Internally use React JS so thats why we can use all features of React JS like props , states , Hooks)

// Q:What is State ?
// A: Its Info Holder Like Variable 
// (We can store Name , Age ,Email of any entity )

// Q:Whats the diff B/W variable and State ?
// A:When you update Variable, component don't re render but when you push value in State the component rerender.A

// Q:State can be used Outside Component ?
// A: State cannot use Outside component
// (Lets suppose you create a state color for component A , you cannot use this color state in Component B but can create another state with same name color but it will not the same   as color for component A )

// Q:Can you Share the State Data ?
// A:No we cannot share the State Data Props Data can be shared across components

// Q:Can we Send State directly to other component ?
// A:No (we can only pass state to other component with help of Props)

// Q:Similarity B/W State and PropsExample
// A:Both re-render the Component when Update