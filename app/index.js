import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';


// const styles = EStyleSheet.create({
  
// });

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
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
