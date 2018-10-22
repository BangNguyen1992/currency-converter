import React from 'react';
import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';

import Navigator from './config/routes';
import { AlertProvider } from './components/Alert';
import store from './config/store';


const deviceWidth = Dimensions.get('window').width;


EStyleSheet.build({
  $deviceWidth: deviceWidth,

  $primaryBlue: '#438CCE',
  $secondaryBlue: '#4F6D7A',
  $primaryGreen: '#00BD9D',
  $primaryOrange: '#D57A66',
  $primaryPurple: '#9E768F',
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


export default () => (
  <Provider store={store}>
    <AlertProvider>
      <Navigator onNavigationStateChange={null} />
    </AlertProvider>
  </Provider>
);
