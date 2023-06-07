import React from "react";
import { Text } from "react-native";

export const RName1=()=> <Text>ReNamed Exports 1 </Text>;
export const RName2=()=> <Text>ReNamed Exports 2</Text>;

//  You can import named export as same name of function Name1 in {Name1,Name2} brackets
//import { Name1,Name2 } from './component/NameImEx'; //Named Exports
//but you can renamed forcefully 
//like
//import { RName1 as NewName1,RName2 as NewName2 } from './component/RenameExIm';
//You can use RName1 and NewName1 both
//Can Have Multiple Named Export in single Module(File)