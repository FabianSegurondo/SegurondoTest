import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../theme/global';
interface Props {
  text: string;
  bColor: string;
  colorText: string;
  widthButton: Number;
  action: (number: string) => void;
}
export const ButtonC = ({text, bColor, colorText = 'white', action, widthButton=70}: Props) => {

    return (
    <TouchableOpacity onPress={() => action(text)}>
      <View style={{...styles.button, backgroundColor: bColor, width: widthButton}}>
        <Text
          style={{...styles.text, color: colorText}}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};