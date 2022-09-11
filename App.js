
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
      <View style={style.pView}>

        <View>
          <Text style={style.titleView}>Cronômetro</Text>
        </View>

        <View>
          <Text style={style.counterText}>0m.0s</Text>
        </View>

        <View style={style.buttonView}>
          <TouchableOpacity style={style.firstButton}>
            <Text style={style.textButton}>Start</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.secondButton}>
            <Text style={style.textButton}>Stop</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}

const style = StyleSheet.create({

  pView: {
    backgroundColor:'white', 
    alignContent: 'center', 
    alignItems: 'center', 
    marginTop: 40, 
    height:1000
  },

  titleView: {
    fontSize:40, color: 'black'
  },

  counterText:{
    fontSize:30, 
    marginTop: 30, 
    borderColor: 'black', 
    borderWidth: 3, 
    width: 300, 
    textAlign: 'center', 
    color: 'black'
  },

  buttonView: {
    border: 'black', 
    margin: 30, 
    flexDirection: 'row'
  },

  firstButton: {
    backgroundColor:'lightgreen',  
    width: 100, 
    marginRight:50,
    height:40, 
    borderRadius:50
  },

  secondButton: {
    backgroundColor:'lightgreen', 
    width: 100, 
    height:40, 
    borderRadius:50
  },

  textButton: {
    fontSize:20,
    textAlign: 'center', 
    marginTop:5, 
    color: 'white'
  }
})