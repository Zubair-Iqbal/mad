import React from "react";
import { Text } from "react-native";

export const Name1=()=> <Text>Named Exports 1 </Text>;
export const Name2=()=> <Text>Named Exports 2</Text>;

//  You can import named export as same name of function Name1 in {Name1,Name2} brackets
//import { Name1,Name2 } from './component/NameImEx'; //Named Exports
//Can Have Multiple Named Export in single Module(File)
