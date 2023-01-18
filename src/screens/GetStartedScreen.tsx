import React from 'react';
import {View, Image} from 'react-native';
import { ImageC } from '../components/ImageC';
import { TitleC } from '../components/TitleC';
import { SubTitleC } from '../components/SubTitleC';
import { BotonS} from '../components/BotonS';
import { Info } from '../components/Info';

interface Props {
  imageSource: Image;
  title: string;
  subTitle: string;
  buttonText: string;
  infoText: string;
  onButtonPress: () => void;
}
export const GetStartedScreen: React.FC<Props> = (props) => {
    return (
      <View>
        <ImageC  />
    <View>
          <TitleC title='this is the beginning'/>
          <SubTitleC subTitle='more text as subtitle' />
    </View>
    <View>
        <BotonS buttonText="click me" onPress={props.onButtonPress} text={'click here'} />

     </View>
    <View>
         <Info infoText='Some information, already have an account??'/>
    </View>
     </View>
        );
};