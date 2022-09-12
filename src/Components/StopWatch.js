
import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  useColorScheme,
  View,
  ImageBackground,
} from 'react-native';
import { style } from "../style/style"

class StopWatch extends Component {

  constructor(props) {
    super(props)

    this.state = {

      hours: 0,
      minutes: 0,
      seconds: 0,
      idTimer: null,
      firstButton: 'Vai!',
      secondButton: 'Zerar',

      Register: 0,
      secondTime: 0,
      minuteTime: 0,
      hoursTime: 0

    }

    this.startStopButton = this.startStopButton.bind(this)

    this.clearButton = this.clearButton.bind(this)
  }

  startStopButton() { // botão usado para iniciar e parar o cronômetro...

    if (this.state.idTimer == null) {

      this.setState({ firstButton: 'Pausar' })
      this.setState({ secondButton: 'Zerar e Salvar' })

      this.state.idTimer = setInterval(() => {

        // Utilizando o método setInterval do Java Script para fazer a contagem do cronômetro...
        let newState = this.state;
        newState.seconds += 1; // incrementando a contagem em Segundos
        let minute = this.setState(newState);

        if (newState.seconds == 60) {
          newState.minutes += 1;
          newState.seconds = 0;
          this.setState(newState);
        }

        if (newState.minutes == 60) {
          newState.hours += 1;
          newState.minutes = 0;
          this.setState(newState);
        }

      }, 1000)

    } else {
      clearInterval(this.state.idTimer);
      let newStateStop = this.state;
      newStateStop.idTimer = null;
      this.setState(newStateStop);
      this.setState({ firstButton: 'Vai!' })
      this.setState({ secondButton: 'Zerar e Salvar' })
    }

  }

  clearButton() {

    clearInterval(this.state.idTimer);
    let newStateClear = this.state;
    newStateClear.idTimer = null;
    this.setState(newStateClear);


    let numberRegisters = this.state;
    numberRegisters.Register += 1;
    this.setState(numberRegisters);

    let time = this.state;
    time.secondTime = this.state.seconds;
    this.setState({ time })

    time.minuteTime = this.state.minutes;
    this.setState(time);

    time.hoursTime = this.state.hours;
    this.setState(time);

    newStateClear.seconds = 0;
    newStateClear.minutes = 0;
    newStateClear.hours = 0;

    this.setState({ firstButton: 'Vai!' })
    this.setState({ secondButton: 'Zerar' })

  }

  clearRegisters() {
    this.setState(Register);
  }

  render() {

    let backGroundImage = require('../corrida.png')
    return (
      <View style={style.pView}>

        <View>
          <Text style={style.titleView}>Cronômetro</Text>
        </View>

        <View>
          <Image
            style={{ width: 300, height: 270, borderRadius: 20, margin: 50 }}
            source={require('../corrida.png')}>
          </Image>
        </View>

        <View style={style.counterView}>
          <Text style={style.counterText}>{this.state.hours}h </Text>
          <Text style={style.counterText}>{this.state.minutes}m </Text>
          <Text style={style.counterText}>{this.state.seconds}s </Text>
        </View>

        <View style={style.buttonView}>
          <TouchableOpacity
            onPress={this.startStopButton}
            style={style.firstButton}>
            <Text style={style.textButton}>{this.state.firstButton}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.clearButton}
            style={style.secondButton}>
            <Text style={style.textButton}>{this.state.secondButton}</Text>
          </TouchableOpacity>
        </View>

        <View style={style.registerView}>
          <View style={style.registerTextView}>
            <Text style={style.registerText}>N° de Registros</Text>
            <Text style={style.registerText}>{this.state.Register}</Text>
          </View>

          <View style={{ marginRight: 20 }} >
            <Text style={style.registerText}>Tempo</Text>
            <Text style={style.registerText}>{this.state.hoursTime + "h" + this.state.minuteTime + "m" + this.state.secondTime}s</Text>
          </View>
        </View>

      </View>
    )
  }
}

export default StopWatch;
