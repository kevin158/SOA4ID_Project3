import React, { Component } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

import Img from '../../assets/tictactoe.png';

export default class Login extends Component {
    constructor(props)
    {
        super(props);

      this.state = {
          email: "",
          password: ""
      }
    }

  _onPressButton(){

    return fetch('http://192.168.43.87:8888/shapes')
            .then((response) => response.text())
            .then((responseText) => {
                this._askEntry(responseText);
            })
        .catch((error) =>{
            Alert.alert('Conection Failed')
        });
  }

  _onPressButton2(){
    return fetch('http://192.168.43.87:8888/restart')
            .then((response) => response.text())
            .then((responseText) => {
                Alert.alert('Restarted settings')
            })
        .catch((error) =>{
            Alert.alert('Conection Failed')
        });
  }

  _askEntry(shapes) {
    if(shapes == "012"){
        this.props.navigation.navigate('Register', {available: [{code: '0', key: 'X'},
        {code: '1', key: 'O'},
        {code: '2', key: '\u25B3'}]})
    } else if(shapes == "01"){
        this.props.navigation.navigate('Register', {available: [{code: '0', key: 'X'},
        {code: '1', key: 'O'}]})
    } else if(shapes == "02"){
        this.props.navigation.navigate('Register', {available: [{code: '0', key: 'X'},
        {code: '2', key: '\u25B3'}]})
    } else if(shapes == "12"){
        this.props.navigation.navigate('Register', {available: [
        {code: '1', key: 'O'},
        {code: '2', key: '\u25B3'}]})
    }
  }

  _jump(){
    this.props.navigation.navigate('Register')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Ingrese el código del local</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            ></TextInput>
          </View>
        </View>
        <View style={styles.buttonContainer}>
        
          <Button
            onPress={this._onPressButton2.bind(this)}
            title="Agregar"
          />
        </View>
        <View style={styles.buttonContainer}>
        
          <Button
            onPress={this._onPressButton2.bind(this)}
            title="Atrás"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  form: {
    marginBottom: 30,
    marginHorizontal: 30
  },
  inputTitle: {
    color: "#8A8F9E",
    fontSize: 10,
    textTransform: "uppercase"
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#161F3D",
    marginBottom: 20
  },
  buttonContainer: {
    marginLeft: 50,
    width: 250,
    paddingBottom: 20
  },
  image: {
    width: 200,
    height: 100,
    resizeMode: 'contain', 
    marginLeft: 80,
    marginBottom: 60
  }
});