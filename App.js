
import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

export default class App extends Component {

  render() {

    return (
      <View style={{ backgroundColor:'white', alignContent: 'center', alignItems: 'center', marginTop: 40, height:1000 }}>

        <View>
          <Text style={{fontSize:40, color: 'black'}}>Cronômetro</Text>
        </View>

        <View style={{}}>
          <Text style={{fontSize:30, marginTop: 30, borderColor: 'black', borderWidth: 3, width: 300, textAlign: 'center', color: 'black'}}>0m.0s</Text>
        </View>

        <View style={{border: 'black', margin: 30, flexDirection: 'row'}}>
          <TouchableOpacity style={{backgroundColor:'lightgreen', marginRight: 50, width: 100, height:40, borderRadius:50}}>
            <Text style={{fontSize:20,textAlign: 'center', marginTop:5, color: 'white'}}>Start</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{backgroundColor:'lightgreen', width: 100, height:40, borderRadius:50}}>
            <Text style={{fontSize:20,textAlign: 'center', marginTop:5, color: 'white'}}>Stop</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}