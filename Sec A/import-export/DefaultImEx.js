import React from "react";
import { Text } from "react-native";

const Default1=()=><Text>Default Exports 1 </Text>;

export default Default1;

 //You can import Default export as same name of function or different name of your convenience  without brackets
//import Default1 from './component/Default1';
//or
//import YourName from './component/Default1';
//Here You are referring same Component file 'Default1' but with new name 'YourName'
//you can have only one default export in each js file (Module), can have multiple named export along with default
