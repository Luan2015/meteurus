/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// 'use strict';
// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// import {
//   StackNavigator,
// } from 'react-navigation';
// class SearchPage extends Component<{}> {
//   static navigationOptions = {
//     title: 'Property Finder',
//   };

//   render () {
//    return React.createElement (Text, { style : styles.description}, "¡Buscar casas para comprar!" ); 
//    return <Text style={styles.description}>¡ Busca casas para comprar!</Text>;
//   }
// }


// const App = StackNavigator({
//   Home: { screen: SearchPage },
// });
// export default App;


// const styles = StyleSheet.create ({
//   description : {
//    fontSize : 18 ,
//    textAlign : 'center' ,
//    color : '#656565' ,
//    marginTop : 65 , 
//   }, 


'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image,
} from 'react-native';
import SearchPage from './componentes/SearchPage';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.flowRight}>
        <SearchPage/>
        <TextInput
          underlineColorAndroid={'transparent'}
          style={styles.searchInput}
          placeholder='Search via name or postcode'/>
        <Button
          onPress={() => {}}
          color='#48BBEC'
          title='Go'
        />
      </View>
    );
  }

}
const styles = StyleSheet.create({
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC',
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
});

