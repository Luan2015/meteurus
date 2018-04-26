// import React, { Component } from 'react';
// import { AppRegistry, Text, View } from 'react-native';

// class Blink extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {isShowingText: true};

//     // Toggle the state every second
//     setInterval(() => {
//       this.setState(previousState => {
//         return { isShowingText: !previousState.isShowingText };
//       });
//     }, 1000);
//   }

//   render() {
//     let display = this.state.isShowingText ? this.props.text : ' ';
//     return (
//       <Text>{display}</Text>
//     );
//   }
// }


// export default class BlinkApp extends Component {
//   render() {
//     return (
//       <View>
//         <Blink text='I love to blink' />
//         <Blink text='Yes blinking is so great' />
//         <Blink text='Why did they ever take this out of HTML' />
//         <Blink text='Look at me look at me look at me' />
//       </View>
//     );
//   }
// }


// AppRegistry.registerComponent('AwesomeProject', () => BlinkApp);


// import React, { Component } from 'react';
// import { AppRegistry, StyleSheet, Text, View } from 'react-native';

// export default class LotsOfStyles extends Component {
//   render() {
//     return (
//       <View>
//         <Text style={styles.red}>just red</Text>
//         <Text style={styles.bigblue}>just bigblue</Text>
//         <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
//         <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   bigblue: {
//     color: 'green',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   red: {
//     color: '#000',
//     fontSize :40
//   },
// });

// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => LotsOfStyles);


// import React, { Component } from 'react';
// // import { AppRegistry, View } from 'react-native';
// // import React, { Component } from 'react';
// import { AppRegistry, StyleSheet, Text, View } from 'react-native';
// import {
//   StackNavigator,
// } from 'react-navigation';

// const App = StackNavigator({
//   Home: { screen: HomeScreen },
//   Profile: { screen: ProfileScreen },
// });


// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Welcome',
//   };
//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <Button
//         title="Go to Jane's profile"
//         onPress={() =>
//           navigate('Profile', { name: 'Jane' })
//         }
//       />
//     );
//   }
// }

// export default class FlexDimensionsBasics extends Component {
//   render() {
//     return (
//       // Try removing the `flex: 1` on the parent View.
//       // The parent will not have dimensions, so the children can't expand.
//       // What if you add `height: 300` instead of `flex: 1`?
//       <View style={{flex: 1}}>
//         <View style={{flex: 1, backgroundColor: 'powderblue'}} />
//         <View style={{flex: 2, backgroundColor: 'skyblue'}} />
//         <View style={{flex: 3, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// }

// skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => FlexDimensionsBasics);
// import React, { Component } from 'react';
// import { AppRegistry, Text, TextInput, View } from 'react-native';
// import MapView from 'react-native-maps';

// export default class PizzaTranslator extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {text: ''};
//   }

//   render() {
//     return (
//       <View style={{padding: 10}}>
//         <TextInput
//           style={{height: 40}}
//           placeholder="Type here to translate!"
//           onChangeText={(text) => this.setState({text})}
//         />
//         <Text style={{padding: 10, fontSize: 42}}>
//           {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//         </Text>
//       </View>
//     );
//   }
// }

// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => PizzaTranslator);

// import React, { Component } from 'react';
// import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';
// import MapView from 'react-native-maps';

// export default class ButtonBasics extends Component {
//   _onPressButton() {
//     Alert.alert('You tapped the button!')
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.buttonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="Press Me"
//           />
//         </View>
//         <View style={styles.buttonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="Press Me"
//             color="#841584"
//           />
//         </View>
//         <View style={styles.alternativeLayoutButtonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="This looks great!"
//           />
//           <Button
//             onPress={this._onPressButton}
//             title="OK!"
//             color="#841584"
//           />
//         </View>
//         {/*<View style={styles.buttonContainer}>
//            <MapView
//               initialRegion={{
//                 latitude: 37.78825,
//                 longitude: -122.4324,
//                 latitudeDelta: 0.0922,
//                 longitudeDelta: 0.0421,
//               }}
//             />
//         </View>*/}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    justifyContent: 'center',
//   },
//   buttonContainer: {
//     margin: 20
//   },
//   alternativeLayoutButtonContainer: {
//     margin: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//   }
// })

// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);


// import React, { Component } from 'react';
// import { Alert, AppRegistry, Platform, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

// export default class Touchables extends Component {

//   _onPressButton() {
//     Alert.alert('La nuestra')
//   }

//   _onLongPressButton() {
//     Alert.alert('You long-pressed the button!')
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         {/*<TextInput
//           style={{height: 40 ,width:100}}
//           placeholder="Type here to translate!"
//           id = 'algo'
//         />*/}
//         <TouchableHighlight onPress={this._onPressButton()} underlayColor="white">
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableHighlight</Text>
//           </View>
//         </TouchableHighlight>
//         <TouchableOpacity onPress={this._onPressButton}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableOpacity</Text>
//           </View>
//         </TouchableOpacity>
//         <TouchableNativeFeedback
//             onPress={this._onPressButton}
//             background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
//           </View>
//         </TouchableNativeFeedback>
//         <TouchableWithoutFeedback
//             onPress={this._onPressButton}
//             >
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
//           </View>
//         </TouchableWithoutFeedback>
//         <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>Touchable with Long Press</Text>
//           </View>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }




// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 250,
//     alignItems: 'center'
//   },
//   button: {
//     marginBottom: 30,
//     width: 260,
//     alignItems: 'center',
//     backgroundColor: '#2196F3'
//   },
//   buttonText: {
//     padding: 25,
//     color: 'white'
//   }
// })

// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => Touchables);

// import React, { Component } from 'react';
// import { AppRegistry, ScrollView, Image, Text } from 'react-native';

// export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
//   render() {
//       return (
//         <ScrollView>
//           <Text style={{fontSize:96}}>Scroll me plz</Text>
//           <Image source={require('/react-native/img/favicon.png')} />
//           <Image source={require('/react-native/img/favicon.png')} />
//           <Image source={require('/react-native/img/favicon.png')} />
//           <Image source={require('/react-native/img/favicon.png')} />
//           <Image source={require('/react-native/img/favicon.png')} />
//           <Text style={{fontSize:96}}>If you like</Text>
//           <Image source={require('/react-native/img/favicon.png')} />
//           <Image source={require('/react-native/img/favicon.png')} />
//           <Image source={require('/react-native/img/favicon.png')} />
//           <Image source={require('/react-native/img/favicon.png')} />
//           <Image source={require('/react-native/img/favicon.png')} />
//           <Text style={{fontSize:96}}>Scrolling down</Text>
//           <Image source={require('/react-native/img/favicon.png')} />
//           <Image source={require('/react-native/img/favicon.png')} />
//           <Image source={require('/react-native/img/favicon.png')} />
//           <Image source={require('/react-native/img/favicon.png')} />
//           <Image source={require('/react-native/img/favicon.png')} />
//           <Text style={{fontSize:96}}>What's the best</Text>
//           <Image source={require('/react-native/img/favicon.png')} />
//           <Image source={require('/react-native/img/favicon.png')} />
//           <Image source={require('/react-native/img/favicon.png')} />
//           <Image source={require('/react-native/img/favicon.png')} />
//           <Image source={require('/react-native/img/favicon.png')} />
//           <Text style={{fontSize:96}}>Framework around?</Text>
//           <Image source={require('/react-native/img/favicon.png')} />
//           <Image source={require('/react-native/img/favicon.png')} />
//           <Image source={require('/react-native/img/favicon.png')} />
//           <Image source={require('/react-native/img/favicon.png')} />
//           <Image source={require('/react-native/img/favicon.png')} />
//           <Text style={{fontSize:80}}>React Native</Text>
//         </ScrollView>
//     );
//   }
// }

// // skip these lines if using Create React Native App
// AppRegistry.registerComponent(
//   'AwesomeProject',
//   () => IScrolledDownAndWhatHappenedNextShockedMe);



// import React, { Component } from 'react';
// import { AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';

// export default class SectionListBasics extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <SectionList
//           sections={[
//             {title: 'D', data: ['Devin']},
//             {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
//           ]}
//           renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
//           renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
//           keyExtractor={(item, index) => index}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    paddingTop: 22
//   },
//   sectionHeader: {
//     paddingTop: 2,
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingBottom: 2,
//     fontSize: 14,
//     fontWeight: 'bold',
//     backgroundColor: 'rgba(247,247,247,1.0)',
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// })

// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => SectionListBasics);




// import React from 'react';
// import { Alert, FlatList, ActivityIndicator, Text, View  } from 'react-native';

// export default class FetchExample extends React.Component {

//   constructor(props){
//     super(props);
//     this.state ={ isLoading: true}
//   }

//   componentDidMount(){
//     return fetch('https://facebook.github.io/react-native/movies.json')
//       .then((response) => response.json())
//       .then((responseJson) => {

//         this.setState({
//           isLoading: false,
//           dataSource: responseJson.movies,
//         }, function(){
//           // Alert.alert(dataSource)
//         });
//       })
//       .catch((error) =>{
//         console.error(error);
//       });
//   }



//   render(){

//     if(this.state.isLoading){
//       return(
//         <View style={{flex: 1, padding: 20}}>
//           <ActivityIndicator/>
//         </View>
//       )
//     }

//     return(
//       <View style={{flex: 1, paddingTop:20}}>
//         <FlatList
//           data={this.state.dataSource}
//           renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
//           keyExtractor={(item, index) => index}
//         />
//       </View>
//     );
//   }
// }



// import PropTypes from 'prop-types'
// import React, { Component } from 'react'
// import { View } from 'react-native'
// import VideoPlayer from 'react-native-true-sight'

// export default class HomeScreen extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1, backgroundColor: 'black' }}>
//         <VideoPlayer source="https://somevideo.mp4" />
//       </View>
//     )
//   }
// }

// import React from 'react';

// import { View, Text } from 'react-native';
// import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

// class App extends React.PureComponent {
//   _menu = null;

//   setMenuRef = ref => {
//     this._menu = ref;
//   };

//   hideMenu = () => {
//     this._menu.hide();
//   };

//   showMenu = () => {
//     this._menu.show();
//   };

//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Menu
//           ref={this.setMenuRef}
//           button={<Text onPress={this.showMenu}>Show menu</Text>}
//         >
//           <MenuItem onPress={this.hideMenu}>Menu item 1</MenuItem>
//           <MenuItem onPress={this.hideMenu}>Menu item 2</MenuItem>
//           <MenuItem onPress={this.hideMenu} disabled>  Menu item 3</MenuItem>
//           <MenuDivider />
//           <MenuItem onPress={this.hideMenu}>Menu item 4</MenuItem>
//         </Menu>
//       </View>
//     );
//   }
// }

// export default App;

// import {Platform, StyleSheet} from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     ...Platform.select({
//       ios: {
//         backgroundColor: 'blue',
//       },
//       android: {
//         backgroundColor: 'green',
//       },
//     }),
//   },
// });




// import React from 'react';
// import { Animated, Text, View } from 'react-native';

// class FadeInView extends React.Component {
//   state = {
//     fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
//   }

//   componentDidMount() {
//     Animated.timing(                  // Animate over time
//       this.state.fadeAnim,            // The animated value to drive
//       {
//         toValue: 1,                   // Animate to opacity: 1 (opaque)
//         duration: 10000,              // Make it take a while
//       }
//     ).start();                        // Starts the animation
//   }

//   render() {
//     let { fadeAnim } = this.state;

//     return (
//       <Animated.View                 // Special animatable View
//         style={{
//           ...this.props.style,
//           opacity: fadeAnim,         // Bind opacity to animated value
//         }}
//       >
//         {this.props.children}
//       </Animated.View>
//     );
//   }
// }

// // You can then use your `FadeInView` in place of a `View` in your components:
// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
//           <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
//         </FadeInView>
//       </View>
//     )
//   }
// }




// import React from 'react';
// import {
//   NativeModules,
//   LayoutAnimation,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   View,
// } from 'react-native';

// const { UIManager } = NativeModules;

// UIManager.setLayoutAnimationEnabledExperimental &&
//   UIManager.setLayoutAnimationEnabledExperimental(true);

// export default class App extends React.Component {
//   state = {
//     w: 100,
//     h: 100,
//   };

//   _onPress = () => {
//     // Animate the update
//     LayoutAnimation.spring();
//     this.setState({w: this.state.w + 15, h: this.state.h + 15})
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={[styles.box, {width: this.state.w, height: this.state.h}]} />
//         <TouchableOpacity onPress={this._onPress}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>Press me!</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   box: {
//     width: 200,
//     height: 200,
//     backgroundColor: 'red',
//   },
//   button: {
//     backgroundColor: 'black',
//     paddingHorizontal: 20,
//     paddingVertical: 15,
//     marginTop: 15,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });




// import { UIManager, findNodeHandle } from 'react-native';

// _onPress: function() {
//   const radioButton = this.state.radioButton === 'radiobutton_checked' ?
//     'radiobutton_unchecked' : 'radiobutton_checked'

//   this.setState({
//     radioButton: radioButton
//   });

//   if (radioButton === 'radiobutton_checked') {
//     UIManager.sendAccessibilityEvent(
//       findNodeHandle(this),
//       UIManager.AccessibilityEventTypes.typeViewClicked);
//   }
// }



// <CustomRadioButton
//   accessibleComponentType={this.state.radioButton}
//   onPress={this._onPress}/>




// import React, { Component } from 'react';
// import { Text, StatusBar, TextInput, View, StyleSheet } from 'react-native';
// import { Constants } from 'expo';

// export default class App extends Component {
//   state = {
//     nombres: '',
//     apellidos: '',
//     tipo: '',
//     identificacion: '',
//     fechaNaci: '',
//     password: '',
//     email: ''
//   };
  
//   render() {
//     return (
//       <View style={styles.container}>
//         <StatusBar barStyle="light-content" />
//         <View style={styles.header}>
//           <Text style={styles.description}>
//             This demo shows how using available TextInput customizations can make
//             forms much easier to use. Try completing the form and notice that different
//             fields have specific optimizations and the return key changes from focusing
//             next input to submitting the form.
//           </Text>
//         </View>
//         <TextInput
//           style={styles.input}
//           value={this.state.nombres}
//           onChangeText={nombres => this.setState({nombres})}
//           ref={ref => {this._nameInput = ref}}
//           placeholder="Nombres"
//           autoFocus={true}
//           autoCapitalize="words"
//           autoCorrect={true}
//           keyboardType="default"
//           returnKeyType="next"
//           onSubmitEditing={this._next}
//           blurOnSubmit={false}
//         />
//         <TextInput
//           style={styles.input}
//           value={this.state.email}
//           onChangeText={email => this.setState({email})}
//           ref={ref => {this._emailInput = ref}}
//           placeholder="email@example.com"
//           autoCapitalize="none"
//           autoCorrect={false}
//           keyboardType="email-address"
//           returnKeyType="send"
//           onSubmitEditing={this._submit}
//           blurOnSubmit={true}
//         />
//         <TextInput
//           style={styles.input}
//           value={this.state.email}
//           onChangeText={email => this.setState({email})}
//           ref={ref => {this._emailInput = ref}}
//           placeholder="email@example.com"
//           autoCapitalize="none"
//           autoCorrect={false}
//           keyboardType="email-address"
//           returnKeyType="send"
//           onSubmitEditing={this._submit}
//           blurOnSubmit={true}
//         />
//         <TextInput
//           style={styles.input}
//           value={this.state.email}
//           onChangeText={email => this.setState({email})}
//           ref={ref => {this._emailInput = ref}}
//           placeholder="email@example.com"
//           autoCapitalize="none"
//           autoCorrect={false}
//           keyboardType="email-address"
//           returnKeyType="send"
//           onSubmitEditing={this._submit}
//           blurOnSubmit={true}
//         />
//         <TextInput
//           style={styles.input}
//           value={this.state.email}
//           onChangeText={email => this.setState({email})}
//           ref={ref => {this._emailInput = ref}}
//           placeholder="email@example.com"
//           autoCapitalize="none"
//           autoCorrect={false}
//           keyboardType="email-address"
//           returnKeyType="send"
//           onSubmitEditing={this._submit}
//           blurOnSubmit={true}
//         />
//         <TextInput
//           style={styles.input}
//           value={this.state.email}
//           onChangeText={email => this.setState({email})}
//           ref={ref => {this._emailInput = ref}}
//           placeholder="email@example.com"
//           autoCapitalize="none"
//           autoCorrect={false}
//           keyboardType="email-address"
//           returnKeyType="send"
//           onSubmitEditing={this._submit}
//           blurOnSubmit={true}
//         />
//       </View>
//     );
//   }
  
//   _next = () => {
//     this._emailInput && this._emailInput.focus();
//   };
  
//   _submit = () => {
//     alert(`Welcome, ${this.state.name}! Confirmation email has been sent to ${this.state.email}`);
//   };
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ecf0f1',
//   },
//   header: {
//     paddingTop: 20 + Constants.statusBarHeight,
//     padding: 20,
//     backgroundColor: '#336699',
//   },
//   description: {
//     fontSize: 14,
//     color: 'white',
//   },
//   input: {
//     margin: 20,
//     marginBottom: 0,
//     height: 34,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     fontSize: 16,
//   },
// });




// import React from 'react';
// import { TextInput, Text, TouchableOpacity, View } from 'react-native';

// // export default class App extends React.Component {
// //   clearText = () => {
// //     this._textInput.setNativeProps({text: ''});
// //   }

// //   render() {
// //     return (
// //       <View style={{flex: 1}}>
// //         <TextInput
// //           ref={component => this._textInput = component}
// //           style={{height: 50, flex: 1, marginHorizontal: 20, borderWidth: 1, borderColor: '#ccc'}}
// //         />
// //         <TouchableOpacity onPress={this.clearText}>
// //           <Text>Clear text</Text>
// //         </TouchableOpacity>
// //       </View>
// //     );
// //   }
// // }

// class ListOfWords extends React.PureComponent {
//   render() {
//     return <div>{this.props.words.join(',')}</div>;
//   }
// }

// class WordAdder extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       words: ['marklar']
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     // This section is bad style and causes a bug
//     const words = this.state.words;
//     words.push('marklar');
//     this.setState({words: words});
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick} />
//         <ListOfWords words={this.state.words} />
//       </div>
//     );
//   }
// }

// import React from 'react';
// import {AppRegistry, StyleSheet, Text, View} from 'react-native';

// class RNHighScores extends React.Component {
//   render() {
//     var contents = this.props['scores'].map((score) => (
//       <Text key={score.name}>
//         {score.name}:{score.value}
//         {'\n'}
//       </Text>
//     ));
//     return (
//       <View style={styles.container}>
//         <Text style={styles.highScoresTitle}>2048 High Scores!</Text>
//         <Text style={styles.scores}>{contents}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//   },
//   highScoresTitle: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   scores: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// // Module name
// AppRegistry.registerComponent('RNHighScores', ('') => RNHighScores);



import React, { Component } from 'react'
import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
        <ActivityIndicator size="small" color="#00ff00" />
        <ActivityIndicator size="large" color="#0000ff" />
        <ActivityIndicator size="small" color="#00ff00" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})

AppRegistry.registerComponent('App', () => App)



// import React, { Component } from 'react';
// import { View, ScrollView, AppRegistry, TextInput, InputAccessoryView, Button } from 'react-native';

// export default class UselessTextInput extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {text: 'Placeholder Text'};
//   }

//   render() {
//     const inputAccessoryViewID = "uniqueID";
//     return (
//       <View>
//         <ScrollView keyboardDismissMode="interactive">
//           <TextInput
//             style={{
//               padding: 10,
//               paddingTop: 50,
//             }}
//             inputAccessoryViewID={inputAccessoryViewID}
//             onChangeText={text => this.setState({text})}
//             value={this.state.text}
//           />
//         </ScrollView>
//         <InputAccessoryView nativeID={inputAccessoryViewID}>
//           <Button
//             onPress={() => this.setState({text: 'Placeholder Text'})}
//             title="Reset Text"
//           />
//         </InputAccessoryView>
//       </View>
//     );
//   }