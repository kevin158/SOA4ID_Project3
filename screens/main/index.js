import React, { Component } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

import Img from '../../assets/lotto.png';

export default class Login extends Component {
    constructor(props)
    {
        super(props);

      this.state = {
          email: "",
          password: ""
      }
    }

  _login(){
    this.props.navigation.navigate('Login')
  }

  _register(){
    this.props.navigation.navigate('Register')
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
        <Image 
              source = { Img }
              style={styles.image}
        />

        <Text style={styles.greeting}>{`¡Bienvenido al Lotto Digital!\nSea uno de los muchos afortunados.`}</Text>

        <View style={styles.buttonContainer}>
        
          <Button
            onPress={this._login.bind(this)}
            title="Iniciar sesión"
          />
        </View>
        <View style={styles.buttonContainer}>
        
          <Button
            onPress={this._register.bind(this)}
            title="Registrarse"
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
  buttonContainer: {
    marginLeft: 50,
    width: 250,
    paddingBottom: 20
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain', 
    marginLeft: 80,
    marginBottom: 60
  },
  greeting: {
    marginBottom: 40,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center"
  }
});