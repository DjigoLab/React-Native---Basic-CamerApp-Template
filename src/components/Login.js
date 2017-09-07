import React, {Component} from 'react';
import {StyleSheet, View, Text, Button,Alert, Image }from 'react-native';

export default class Login extends React.Component{
  static navigationOptions = {
      title: 'Login'
    };

  render(){

    return(
      <Image
         style={styles.container}
         source={require('./img/background.jpg')}
       >
      <View >

      <Text style={styles.h1}> La cámara que te da sida </Text>
      <Button title="Login" onPress={(this.onLogin.bind(this))}/>
    </View>
    </Image>
    );
  }

  onLogin(){
    Alert.alert(
      'Bienvenido a Camera',
      'Haz click en Aceptar para acceder a la cámara',
      [
        {text: 'Cancelar'},
        {text: 'Go'}
      ]
    )

  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  h1:{
    fontSize: 30,
    marginTop:100,
    marginBottom: 300,
    color: 'white',


  },


});
