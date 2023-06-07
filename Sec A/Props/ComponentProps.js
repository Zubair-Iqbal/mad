import React from 'react';
import {Text, View} from 'react-native';

const Student = (props) => {
  return (
    <View>
      <Text>Hello, I am {props.name}!</Text>
    </View>
  );
};

/////another way 
const Student2 = (kuchbhe) => {
  return (
    <View>
      <Text>Hello, I am {kuchbhe.name}!</Text>
    </View>
  );
};
const CS = () => {
  return (
    <View>
      <Student name="Ali" />
      <Student2 name="Salman" />
      <Student name="Tabish" />
    </View>
  );
};

export default CS;