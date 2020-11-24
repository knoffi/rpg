import * as React from 'react';
import { Text, View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

export const PriceHelperText = (props:{}) => {
    const [text, setText] = React.useState('');
  
     const onChangeText = (text:string) => setText(text);
  
    const hasErrors = () => {
      return !text.includes('@');
    };
  
   return (
      <View>
        <Text style={{}}>lol</Text>
        <TextInput label="Currency" value={text} onChangeText={onChangeText} />
        <HelperText type="error" visible={hasErrors()}>
          Email address is invalid!
        </HelperText>
      </View>
    );
  };