import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './src/theme/global';
//import {Calculadora} from './src/screens/Calculadora';
import { GetStartedScreen } from './src/screens/GetStartedScreen';

export const App = () => {
  return (
    <SafeAreaView style={styles.app}>
   
      <GetStartedScreen 
      imageSource={require('../assets/bill.jpeg')}
      title="My Title"
      subTitle="My SubTitle"
      buttonText="Press me"
      infoText="Some information"
      onButtonPress={() => console.log("Button pressed")}/>

    </SafeAreaView>
    
  );
};
export default App;
