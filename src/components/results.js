import React, {Component} from 'react';
import {StyleSheet, View, Text, Button,Image }from 'react-native';

export default class results extends React{
  static navigationOptions = {
    title: 'results'
  };

  render(){
    return(
      <View style={styles.container}>
      <Text>Hola colega</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    color: '#ffffff',
    backgroundColor: '#222'
  },

  h1:{
    fontSize: 30,
    marginTop:100,
    marginBottom: 300,
    color: 'white',


  },


});
