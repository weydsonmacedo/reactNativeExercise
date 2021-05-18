//import liraries
import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './src/styles/MainStyles';
import PresentationComponent from './src/components/PresentationComponent'

// create a component
class App extends Component {

  
  render() {
    return (
      <View style={styles.container}>
        <PresentationComponent />

      </View>

    );
  };
}

//make this component available to the app
export default App;






