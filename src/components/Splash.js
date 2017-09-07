import React, {Component} from 'react';
import {StyleSheet, View, Text,Image} from 'react-native';

export default class Splash extends Component{
  render(){
    return(
      <View style={styles.wrapper}>
          <Image
            style={styles.logo}
            source={require('./img/logo.png')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    backgroundColor: '#222',
    justifyContent:'center',
    alignItems:'center'
  },

  logo:{
    width: 200,
    height: 200
  }
});
