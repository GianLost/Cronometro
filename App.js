
import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  ImageBackground,
} from 'react-native';

import StopWatch from './src/Components/StopWatch';

class App extends Component {

  render() {
    return (
      <View>
        <StopWatch />
      </View>
    )
  }

}

export default App;