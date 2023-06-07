import React from "react";
import { Text} from "react-native";

export const Name3=()=> <Text>Named Exports 3 </Text>; //Named Exports , and can have multiple
export const Name4=()=> <Text>Named Exports 4</Text>;

//--------------------------------------------------------------------------------------------------------------

const Default3=()=> <Text>Default Exports 3 </Text>; //default exports only 1 default allow
export default Default3;

//---------------------------------------------------------------------------------------------------------------


//In this case this File (module) contain named and Default exports both

//Option 1 (Default and {Named})
//import Default3 ,{Name3,Name4} from './component/NameDefaultImportAll';
// <Name3/>
//<Default3/>

//Option 2 (Import * for all)
//import  * as All from './documentation/import-export/NameDefaultImportAll'; //import * as All
// <All.Name3/>
//<All.default/>