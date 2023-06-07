// #8 C-SBS
import { View, Text, Button } from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

const func1 = () => console.warn("Call Without event");
const func2 = () => console.warn("Call On Press Event");
const func3 = (val) => console.warn(val);

const ButtonOnPress = () => {
  return (
    <View>
      <Text >ButtonOnPress</Text>

      {/*  style prop is not available in Button Component , Up can Try Pressable or TouchableOpacity component  */}
      {/*  this will auto call the function fun1() */}
      <Button title="On Press" onPress={func1()} color="red" />

      {/*  this will call the function fun2() event*/}
      <Button title="On Press" onPress={func2} color="Blue" />

      {/* This Will Call Func3 with args with help of Arrow/Call back Function */}
      <Button
        title="On Press"
        onPress={() => func2("Say Hello From Function")}
        color="green"
      />

      {/* NOTE: style prop is not available in Button Component , Up can Try Pressable or TouchableOpacity component  */}
    </View>
  );
};

export default ButtonOnPress;
