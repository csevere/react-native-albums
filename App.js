import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header'; 
import AlbumList from './src/components/AlbumList'; 


const App = () =>(
  <View>
      <Header headerText = {'Albums'}/> 
      <AlbumList/>
  </View> 
);


//register at least one component 
AppRegistry.registerComponent('react-native-albums', () => App);

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Hello World!</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#D3D3D3',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default App; 
