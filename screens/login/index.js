import React, { Component } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import * as firebase from "firebase";

import Img from '../../assets/lotto.png';

export default class Login extends Component {
    constructor(props)
    {
        super(props);

      this.state = {
          email: '',
          password: '',
          errorMessage: null
      }
    }

  _onLogin(){
    const { email, password } = this.state;

    firebase
            .auth()
            .signInWithEmailAndPassword(email.trim(), password)
            .then(() => {
              this.props.navigation.navigate('Menu', {email: this.state.email})
          })
            .catch((error) => { 
              Alert.alert('Fallo al iniciar sesión')
            });
            /*firebase
                .database()
                .ref("users/2")
                .set({
                  name: 'D',
                  email: 'D',
                  nationalID: 5555
                });*/
                
                
                    /*firebase
                      .database()
                      .ref("users/")
                      .orderByChild('email')
                      .equalTo('r@gmail.com')
                      .on("value", data => {
                        console.log(data.toJSON());
                      });*/
                  
                
            
              
            
  }

  _goBack(){
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View style={styles.container}>
        <Image 
              source = { Img }
              style={styles.image}
        />
        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Correo electrónico</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            ></TextInput>
          </View>

          <View style={{ marginTop: 32 }}>
            <Text style={styles.inputTitle}>Contraseña</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            ></TextInput>
          </View>
        </View>
        <View style={styles.buttonContainer}>
        
          <Button
            onPress={this._onLogin.bind(this)}
            title="Iniciar sesión"
          />
        </View>
        <View style={styles.buttonContainer}>
        
          <Button
            onPress={this._goBack.bind(this)}
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
    marginBottom: 48,
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
    color: "#161F3D"
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