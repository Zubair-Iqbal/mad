import { View ,Text } from "react-native";
import { StyleSheet } from "react-native";
import { globalStyles } from "../assets/GlobalStyle";

const StyleExample=()=>{

    return(
        <View style={styles.viewContainer}>
            <Text style={{backgroundColor:'#ff0'}}>Inline Style</Text>
            <Text style={styles2}>Object Style</Text>
            <Text style={styles.textStyle1}>API Style</Text>
            
            {/* Array Combination multi style */}
            <Text style={[globalStyles.text ,styles.textStyle1, { margin:20}]} >Gloabl Style</Text>
            
            
        </View>
    );
}

//Using Object
const styles2 ={
    backgroundColor:'purple',
    
  };
  
// Using StyleSheet API
  const styles = StyleSheet.create({
    viewContainer:{
      flexDirection:'column',
      padding:20,
      alignItems:'center',
      justifyContent:'space-around',
      backgroundColor:'#f00',
    },
    textStyle1:{
        backgroundColor:'#0f0',
    }
  });

export default StyleExample;