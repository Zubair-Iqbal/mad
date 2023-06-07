import React from "react";
import { Text } from "react-native";

const Name5=()=> <Text>Named Exports 5 </Text>; 
const Name6=()=> <Text>Named Exports 6</Text>;

export{
    Name5,
    Name6 as NewName6
}

//In this Case We are Exporting Named as List , also renaming export of Name6
// import {
//     Name5 as NewName5,
//     NewName6
//   } from './component/ListImEx'

//We are importing list, with renaming of Name5 as NewName5