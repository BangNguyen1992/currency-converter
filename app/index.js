import React from 'react';
import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';


const deviceWidth = Dimensions.get('window').width;


EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#FFFFFF',
  $lightGray: '#F0F0F0',
  $deviceWidth: deviceWidth,
  $primaryFontSize: 20,
  $border: '#E2E2E2',
  $inputText: '#797979',
});
// export default styles;


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default () => <Home />;

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Current open from index file</Text>
//       </View>
//     );
//   }
// }
