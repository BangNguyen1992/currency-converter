import React from 'react';
import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

// import Home from './screens/Home';
import CurrencyList from './screens/CurrencyList';


const deviceWidth = Dimensions.get('window').width;


EStyleSheet.build({
  $deviceWidth: deviceWidth,

  $primaryBlue: '#4F6D7A',
  $white: '#FFFFFF',
  $lightGray: '#F0F0F0',

  $darkText: '#343434',
  $inputText: '#797979',

  $largeFontSize: 20,
  $basicFontSize: 15,
  $smallFontSize: 12,

  $border: '#E2E2E2',

  // $outline: 1,
});


// export default () => <Home />;
export default () => <CurrencyList />;
