import React from 'react';
import { Text, TextStyle } from 'react-native';

interface Props {
  Info: string;
  style?: TextStyle;
}

export const Info: React.FC<Props> = (props) => {
  return <Text style={props.style}>{props.Info}</Text>;
};