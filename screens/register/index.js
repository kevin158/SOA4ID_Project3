import React, { Component } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import * as firebase from "firebase";

export default class Login extends Component {
    constructor(props)
    {
        super(props);

      this.state = {
          name: "",
          email: "",
          id: '',
          password: '',
          confirm: ''
      }
    }

  _onRegister(){
    if(this.state.password == this.state.confirm){
      firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
              firebase
              .database()
              .ref("users/" + this.state.id)
              .set({
                name: this.state.name,
                email: this.state.email,
                nationalID: this.state.id
              });
              this.props.navigation.navigate('Main')
            })
            .catch(error => console.log(error));
    } else{
      Alert.alert('Su confirmación no calza con la contraseña')
    }   
  }

  _goBack(){
    this.props.navigation.goBack()
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

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Nombre completo</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={name => this.setState({ name })}
              value={this.state.name}
            ></TextInput>
          </View>
          <View>
            <Text style={styles.inputTitle}>Cédula</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={id => this.setState({ id })}
              value={this.state.id}
            ></TextInput>
          </View>
          <View>
            <Text style={styles.inputTitle}>Correo electrónico</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            ></TextInput>
          </View>

          <View>
            <Text style={styles.inputTitle}>Contraseña</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            ></TextInput>
          </View>
          <View>
            <Text style={styles.inputTitle}>Repetir contraseña</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              onChangeText={confirm => this.setState({ confirm })}
              value={this.state.confirm}
            ></TextInput>
          </View>
        </View>
        <View style={styles.buttonContainer}>
        
          <Button
            onPress={this._onRegister.bind(this)}
            title="Registrarse"
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