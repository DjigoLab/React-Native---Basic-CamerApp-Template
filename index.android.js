/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 import React from 'react';
 import { AppRegistry, Text, View, Button, StyleSheet,Image } from 'react-native';
 import { StackNavigator } from 'react-navigation';


 import Camera from 'react-native-camera';
 import Splash from "./src/components/Splash";
 import Login from './src/components/Login';
 import androidCamera from './src/components/androidCamera';


 class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Bienvenid@',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Image
         style={styles.container}
         source={require('./src/components/img/background.jpg')}
       >


        <Text style={styles.h1}>Bienvenido a Camera!</Text>

        <Image
          style={styles.logo}
          source={require('./src/components/img/logo.png')}/>

        <Button
          onPress={() => navigate('androidCamera')}
          title="Comienza la prueba"
        />
        <Button onPress={() => navigate('results')}
        title="takemetoresutl"/>
    

      </Image>
    );
  }
}


class androCamera extends React.Component {
  render() {
    return (
      <View style={camerastyles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}

          style={camerastyles.preview}
          aspect={Camera.constants.Aspect.fill}
          type={Camera.constants.Type.front}
          >
          <Text style={camerastyles.capture} onPress={this.takePicture.bind(this)}>[Pic]</Text>
        </Camera>
      </View>
    );
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
}

class SplashScreen extends React.Component{
  render() {
    return (
      <View><Splash/></View>
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
    color: 'white',


  },

  logo:{
    width: 300,
    height: 300,



  },


});

const camerastyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});


 const DEFINITIVE = StackNavigator({
   Home: { screen: HomeScreen },
   androidCamera: { screen: androCamera },

 });

 AppRegistry.registerComponent('DEFINITIVE', () => DEFINITIVE);
